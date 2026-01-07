/**
 * Image Grading API Route - Multi-Page Support
 * 
 * This endpoint handles:
 * - Multiple images (up to 10 pages)
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
import sharp from 'sharp';
import { spawn } from 'child_process';

// Dynamic import for heic-convert (ESM issue workaround)
let heicConvert: ((options: { buffer: Buffer; format: 'JPEG' | 'PNG'; quality: number }) => Promise<Buffer>) | null = null;

async function getHeicConvert() {
    if (!heicConvert) {
        const module = await import('heic-convert');
        heicConvert = module.default;
    }
    return heicConvert;
}

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
async function processImage(buffer: Buffer, mimeType: string): Promise<string> {
    let processedBuffer = buffer;

    // Convert HEIC to JPEG
    if (mimeType === 'image/heic' || mimeType === 'image/heif') {
        console.log('Converting HEIC to JPEG...');
        processedBuffer = await convertHeicToJpeg(buffer);
    }

    // Optimize image size for API (max 2048px on longest side)
    const optimized = await sharp(processedBuffer)
        .resize(2048, 2048, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 85 })
        .toBuffer();

    return optimized.toString('base64');
}

// Extract text from PDF using system pdftotext command (if available)
async function extractPdfText(pdfPath: string): Promise<string> {
    return new Promise((resolve) => {
        const pdftotext = spawn('pdftotext', [pdfPath, '-']);
        let text = '';
        let error = '';

        pdftotext.stdout.on('data', (data) => {
            text += data.toString();
        });

        pdftotext.stderr.on('data', (data) => {
            error += data.toString();
        });

        pdftotext.on('close', (code) => {
            if (code === 0 && text) {
                resolve(text);
            } else {
                // If pdftotext fails, return a minimal description
                console.warn('pdftotext failed, using fallback:', error);
                resolve(`[PDF text extraction not available. Year detected from filename.]`);
            }
        });

        pdftotext.on('error', () => {
            resolve(`[PDF text extraction not available. Please install poppler-utils.]`);
        });
    });
}

// System prompt for vision-based grading
const VISION_GRADING_PROMPT = `You are an expert mathematics exam grader for Swedish Hvitfeldska spetsutbildning entrance exams.

You will receive:
1. The OFFICIAL EXAM questions (as text, in Swedish)
2. PHOTOS of the student's handwritten answers (may be multiple pages, handwriting in Swedish)

Your task:
1. Read and interpret the SWEDISH handwritten answers in ALL images
2. The student writes in Swedish - understand Swedish mathematical notation and terms
3. Match each answer to the corresponding exam question
4. Grade each answer based on correctness, method, and mathematical notation

## Important:
- The student writes in SWEDISH - recognize Swedish handwriting and mathematical terms
- Swedish decimal comma (3,14) equals English decimal point (3.14)
- Swedish mathematical terms: "summa" = sum, "differens" = difference, "kvot" = quotient, etc.
- The student's answers may span MULTIPLE PAGES
- Look through ALL provided images to find answers
- Some answers may continue on the next page

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
      "question_text": "Brief summary (in Swedish)",
      "student_answer": "What the student wrote (transcribed from images, keep in Swedish)",
      "correct_answer": "The correct answer (show calculation)",
      "score": number,
      "max_score": number,
      "is_correct": boolean,
      "feedback": "Detailed feedback in Swedish - explain what was right/wrong"
    }
  ],
  "overall_feedback": "Overall assessment in Swedish - be encouraging but honest",
  "strengths": ["Areas where student performed well (in Swedish)"],
  "areas_to_improve": ["Topics needing more practice (in Swedish)"],
  "study_recommendations": ["Specific study tips in Swedish"]
}`;

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const yearOverride = formData.get('year') as string | null;

        // Collect all files
        const files: File[] = [];
        const fileCount = parseInt(formData.get('fileCount') as string) || 1;

        // Try to get files with numbered keys (file0, file1, etc.)
        for (let i = 0; i < fileCount; i++) {
            const file = formData.get(`file${i}`) as File;
            if (file) {
                files.push(file);
            }
        }

        // Also try single 'file' key for backward compatibility
        const singleFile = formData.get('file') as File;
        if (singleFile && files.length === 0) {
            files.push(singleFile);
        }

        if (files.length === 0) {
            return new Response(
                JSON.stringify({ error: 'Please upload at least one image of your answer sheet' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        if (files.length > 10) {
            return new Response(
                JSON.stringify({ error: 'Maximum 10 files allowed per submission' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        console.log(`Processing ${files.length} file(s)...`);

        // Process each file
        const processedImages: string[] = [];
        let detectedYear = yearOverride;

        for (const file of files) {
            const mimeType = file.type.toLowerCase();
            const isImage = SUPPORTED_IMAGE_TYPES.includes(mimeType) ||
                file.name.toLowerCase().endsWith('.heic') ||
                file.name.toLowerCase().endsWith('.heif');

            if (!isImage) {
                return new Response(
                    JSON.stringify({
                        error: `Unsupported file type: ${file.name}. Please upload images (HEIC, JPEG, PNG, WebP)`
                    }),
                    { status: 400, headers: { 'Content-Type': 'application/json' } }
                );
            }

            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const base64 = await processImage(buffer, mimeType);
            processedImages.push(base64);

            // Try to detect year from filename if not set
            if (!detectedYear) {
                const filename = file.name.toLowerCase();
                const yearMatch = filename.match(/\b(201[0-9]|202[0-5])\b/);
                if (yearMatch && EXAM_FILES[yearMatch[1]]) {
                    detectedYear = yearMatch[1];
                }
            }
        }

        // Default to latest exam if no year detected
        if (!detectedYear) {
            detectedYear = '2024';
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
            // Check if file exists first
            await readFile(examPath);
            examText = await extractPdfText(examPath);
        } catch {
            return new Response(
                JSON.stringify({ error: `Failed to load exam for year ${detectedYear}` }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Build message content with all images
        console.log(`Grading ${processedImages.length} image(s) for year ${detectedYear} exam...`);

        // Build content array with text and all images
        const contentParts: Array<{ type: 'text'; text: string } | { type: 'image'; image: string }> = [
            {
                type: 'text',
                text: `## OFFICIAL EXAM (Year ${detectedYear}):\n${examText}\n\n---\n\nThe student has submitted ${processedImages.length} page(s) of answers. Please read ALL the handwritten answers in the images below and grade them against the exam questions. Answers may span multiple pages. Provide feedback in Swedish.`,
            },
        ];

        // Add all images
        for (let i = 0; i < processedImages.length; i++) {
            contentParts.push({
                type: 'text',
                text: `\n--- Page ${i + 1} of ${processedImages.length} ---`,
            });
            contentParts.push({
                type: 'image',
                image: processedImages[i],
            });
        }

        const messages = [
            {
                role: 'system' as const,
                content: VISION_GRADING_PROMPT,
            },
            {
                role: 'user' as const,
                content: contentParts,
            },
        ];

        // Use GPT-4o Vision to grade
        const result = streamText({
            model: openai('gpt-4o'),
            messages,
            temperature: 0.1,
        });

        return result.toTextStreamResponse();
    } catch (error) {
        console.error('Image grading error:', error);
        return new Response(
            JSON.stringify({ error: 'Internal server error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
