/**
 * Image Grading API Route - Supports iPhone Photos (HEIC)
 * 
 * This endpoint handles:
 * - HEIC (iPhone), JPEG, PNG, WebP images
 * - Converts HEIC to JPEG for processing
 * - Uses GPT-4o Vision to read handwritten answers
 * 
 * Endpoint: POST /api/grade-image
 */

import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import * as pdfjs from 'pdfjs-dist';
import sharp from 'sharp';

// Dynamic import for heic-convert (ESM issue workaround)
let heicConvert: ((options: { buffer: Buffer; format: 'JPEG' | 'PNG'; quality: number }) => Promise<Buffer>) | null = null;

async function getHeicConvert() {
    if (!heicConvert) {
        const module = await import('heic-convert');
        heicConvert = module.default;
    }
    return heicConvert;
}

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = '';

// Map of exam years to their PDF filenames
const EXAM_FILES: Record<string, string> = {
    '2010': 'intagningstest2010.pdf',
    '2011': 'intagningstest2011.pdf',
    '2012': 'intagningstest2012.pdf',
    '2013': 'intagningstest-2013.pdf',
    '2014': 'intagningstest-2014.pdf',
    '2015': 'intagningstest-2015.pdf',
    '2016': 'intagningstest-2016.pdf',
    '2017': 'intagningstest-2017.pdf',
    '2018': 'intagningstest-2018.pdf',
    '2019': 'intagningstest-2019.pdf',
    '2021': 'intagningstest-2021.pdf',
    '2022': 'intagningstest-2022-.pdf',
    '2023': 'intagningstest-2023-.pdf',
    '2024': 'intagningstest-2024.pdf',
    '2025': 'intagningstest-2025.pdf',
};

const EXAMS_BASE_PATH = path.join(process.cwd(), '..', 'exams', 'intagningstest');

// Supported image formats
const SUPPORTED_IMAGE_TYPES = [
    'image/heic',
    'image/heif',
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
];

// Convert HEIC to JPEG
async function convertHeicToJpeg(buffer: Buffer): Promise<Buffer> {
    const convert = await getHeicConvert();
    if (!convert) {
        throw new Error('HEIC converter not available');
    }
    const jpegBuffer = await convert({
        buffer,
        format: 'JPEG',
        quality: 0.9,
    });
    return Buffer.from(jpegBuffer);
}

// Process image to ensure it's in a compatible format and optimized size
async function processImage(buffer: Buffer, mimeType: string): Promise<{ base64: string; mimeType: string }> {
    let processedBuffer = buffer;
    let finalMimeType = mimeType;

    // Convert HEIC to JPEG
    if (mimeType === 'image/heic' || mimeType === 'image/heif') {
        console.log('Converting HEIC to JPEG...');
        processedBuffer = await convertHeicToJpeg(buffer);
        finalMimeType = 'image/jpeg';
    }

    // Optimize image size for API (max 2048px on longest side)
    const optimized = await sharp(processedBuffer)
        .resize(2048, 2048, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 85 })
        .toBuffer();

    return {
        base64: optimized.toString('base64'),
        mimeType: 'image/jpeg',
    };
}

// Extract text from PDF for exam questions
async function extractPdfText(buffer: Buffer): Promise<string> {
    const data = new Uint8Array(buffer);
    const doc = await pdfjs.getDocument({ data, useSystemFonts: true }).promise;

    let fullText = '';
    for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items
            .map((item: unknown) => (item as { str: string }).str)
            .join(' ');
        fullText += pageText + '\n';
    }

    return fullText;
}

// System prompt for vision-based grading
const VISION_GRADING_PROMPT = `You are an expert mathematics exam grader for Swedish Hvitfeldska spetsutbildning entrance exams.

You will receive:
1. The OFFICIAL EXAM questions (as text)
2. A PHOTO of the student's handwritten answers

Your task:
1. Read and interpret the handwritten answers in the image
2. Match each answer to the corresponding exam question
3. Grade each answer based on correctness, method, and mathematical notation

## Grading Criteria:
- Full marks: Correct answer with valid method
- Partial credit (50-80%): Right approach but calculation errors
- Minimal credit (10-50%): Shows understanding but significant errors
- Zero: Wrong approach or no attempt

## Output Format (JSON):
{
  "exam_info": {
    "year": "YYYY",
    "exam_type": "Intagningstest Hvitfeldska Spetsutbildning",
    "total_questions": number
  },
  "total_score": number,
  "max_possible_score": number,
  "percentage": number,
  "per_question": [
    {
      "question_number": "1",
      "question_text": "Brief summary",
      "student_answer": "What the student wrote (transcribed from image)",
      "correct_answer": "The correct answer",
      "score": number,
      "max_score": number,
      "is_correct": boolean,
      "feedback": "Feedback in Swedish"
    }
  ],
  "overall_feedback": "Overall assessment in Swedish",
  "strengths": ["Areas of strength"],
  "areas_to_improve": ["Areas needing work"],
  "study_recommendations": ["Study tips"]
}`;

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const yearOverride = formData.get('year') as string | null;

        if (!file) {
            return new Response(
                JSON.stringify({ error: 'Please upload an image or PDF of your answer sheet' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const mimeType = file.type.toLowerCase();
        const isImage = SUPPORTED_IMAGE_TYPES.includes(mimeType);
        const isPdf = mimeType === 'application/pdf';

        if (!isImage && !isPdf) {
            return new Response(
                JSON.stringify({
                    error: `Unsupported file type: ${mimeType}. Supported: HEIC, JPEG, PNG, WebP, PDF`
                }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Determine exam year
        let detectedYear = yearOverride;

        // If no year specified, try to detect from filename or default to 2024
        if (!detectedYear) {
            const filename = file.name.toLowerCase();
            const yearMatch = filename.match(/\b(201[0-9]|202[0-5])\b/);
            if (yearMatch && EXAM_FILES[yearMatch[1]]) {
                detectedYear = yearMatch[1];
            } else {
                // Default to latest exam
                detectedYear = '2024';
            }
        }

        // Load the official exam
        const examFilename = EXAM_FILES[detectedYear];
        if (!examFilename) {
            return new Response(
                JSON.stringify({ error: `No exam found for year ${detectedYear}` }),
                { status: 404, headers: { 'Content-Type': 'application/json' } }
            );
        }

        let examText: string;
        try {
            const examPath = path.join(EXAMS_BASE_PATH, examFilename);
            const examBuffer = await readFile(examPath);
            examText = await extractPdfText(examBuffer);
        } catch {
            return new Response(
                JSON.stringify({ error: `Failed to load exam for year ${detectedYear}` }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Process the image or PDF
        if (isImage) {
            // Process image for vision API
            const { base64 } = await processImage(buffer, mimeType);

            console.log(`Processing image for year ${detectedYear} exam...`);

            // Use GPT-4o Vision to grade
            const result = streamText({
                model: openai('gpt-4o'),
                messages: [
                    {
                        role: 'system',
                        content: VISION_GRADING_PROMPT,
                    },
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'text',
                                text: `## OFFICIAL EXAM (Year ${detectedYear}):\n${examText}\n\n---\n\nPlease read the handwritten answers in the image below and grade them against the exam questions. Provide feedback in Swedish.`,
                            },
                            {
                                type: 'image',
                                image: base64,
                            },
                        ],
                    },
                ],
                temperature: 0.1,
            });

            return result.toTextStreamResponse();
        } else {
            // Handle PDF (existing logic)
            let answersText: string;
            try {
                answersText = await extractPdfText(buffer);
            } catch {
                return new Response(
                    JSON.stringify({ error: 'Failed to parse PDF.' }),
                    { status: 400, headers: { 'Content-Type': 'application/json' } }
                );
            }

            const userPrompt = `
## OFFICIAL EXAM (Year ${detectedYear}):
${examText}

---

## STUDENT'S ANSWERS:
${answersText}

---

Grade the student's answers. Provide detailed feedback in Swedish.`;

            const result = streamText({
                model: openai('gpt-4o'),
                system: VISION_GRADING_PROMPT,
                prompt: userPrompt,
                temperature: 0.1,
            });

            return result.toTextStreamResponse();
        }
    } catch (error) {
        console.error('Image grading error:', error);
        return new Response(
            JSON.stringify({ error: 'Internal server error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
