/**
 * Grading API Route - Vercel AI SDK Implementation
 * 
 * This endpoint uses:
 * - Vercel AI SDK: streamText() for streaming responses
 * - OpenAI: GPT-4o via @ai-sdk/openai
 * - pdfjs-dist: PDF text extraction
 * 
 * Endpoint: POST /api/grade
 */

import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';
import * as pdfjs from 'pdfjs-dist';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = '';

// Map of exam years to their PDF filenames
// Exams are now stored in: ../exams/intagningstest/
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

// Updated path: exams are now in ../exams/intagningstest/
const EXAMS_BASE_PATH = path.join(process.cwd(), '..', 'exams', 'intagningstest');

// Extract text from PDF buffer using pdfjs-dist
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

// Extract year from the answer sheet text
function detectExamYear(text: string): string | null {
    const yearPattern = /\b(201[0-9]|202[0-5])\b/;
    const match = text.match(yearPattern);

    if (match) {
        const year = match[1];
        if (EXAM_FILES[year]) {
            return year;
        }
    }
    return null;
}

// System prompt for grading - Using OpenAI via Vercel AI SDK
const GRADING_SYSTEM_PROMPT = `You are an expert mathematics exam grader for Swedish Hvitfeldska spetsutbildning (advanced mathematics program) entrance exams.

You will receive:
1. The OFFICIAL EXAM with all questions (from the school's archive)
2. The STUDENT'S ANSWERS (what the student wrote)

Your task is to grade the student's answers against the official exam questions.

## Grading Criteria:
1. **Correctness** (Primary): Is the final answer mathematically correct?
2. **Method** (Secondary): Is the solution approach valid and clearly shown?
3. **Notation** (Tertiary): Is proper mathematical notation used?
4. **Completeness** (Tertiary): Are all steps shown and all parts answered?

## Scoring Guidelines:
- Full marks: Correct answer with valid method and clear notation
- Partial credit (50-80%): Correct approach but calculation errors
- Minimal credit (10-50%): Shows understanding but significant errors
- Zero marks: Incorrect approach, wrong answer, or no attempt

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
      "student_answer": "What student wrote",
      "correct_answer": "Correct answer",
      "score": number,
      "max_score": number,
      "is_correct": boolean,
      "feedback": "Detailed feedback in Swedish"
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
        const answersFile = formData.get('pdf') as File;

        if (!answersFile) {
            return new Response(
                JSON.stringify({ error: 'Please upload your answer sheet (PDF with year at top)' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Extract text from student's answers
        let answersText: string;
        try {
            const arrayBuffer = await answersFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            answersText = await extractPdfText(buffer);
        } catch (err) {
            console.error('PDF parse error:', err);
            return new Response(
                JSON.stringify({ error: 'Failed to parse PDF.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        if (!answersText || answersText.trim().length === 0) {
            return new Response(
                JSON.stringify({ error: 'No text extracted from PDF.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Detect exam year
        const detectedYear = detectExamYear(answersText);

        if (!detectedYear) {
            return new Response(
                JSON.stringify({
                    error: 'Could not detect exam year. Write the year (e.g., "2011") at the top.'
                }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Load official exam
        const examFilename = EXAM_FILES[detectedYear];
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

        // Construct prompt
        const userPrompt = `
## OFFICIAL EXAM (Year ${detectedYear}):
${examText}

---

## STUDENT'S ANSWERS (detected year: ${detectedYear}):
${answersText}

---

Grade the student's answers. Provide detailed feedback in Swedish.`;

        // ============================================
        // VERCEL AI SDK: streamText()
        // Streams the response from OpenAI GPT-4o
        // ============================================
        const result = streamText({
            model: openai(process.env.OPENAI_MODEL || 'gpt-4o'),
            system: GRADING_SYSTEM_PROMPT,
            prompt: userPrompt,
            temperature: 0.1,
        });

        return result.toTextStreamResponse();
    } catch (error) {
        console.error('Grading error:', error);
        return new Response(
            JSON.stringify({ error: 'Internal server error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
