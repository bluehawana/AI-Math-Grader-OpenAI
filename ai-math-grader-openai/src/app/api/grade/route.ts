import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { NextRequest } from 'next/server';
import pdf from 'pdf-parse';
import { readFile } from 'fs/promises';
import path from 'path';

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

const EXAMS_BASE_PATH = path.join(process.cwd(), '..');

// System prompt for the math grading assistant
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

## Scoring Guidelines for each question:
- Full marks: Correct answer with valid method and clear notation
- Partial credit (50-80%): Correct approach but calculation errors, or incomplete solution
- Minimal credit (10-50%): Shows understanding but significant errors
- Zero marks: Incorrect approach, wrong answer, or no attempt

## IMPORTANT: 
- Match each student answer to the corresponding question number
- If a question has multiple parts (a, b, c), grade each part separately
- Calculate the correct answer yourself to verify
- Be fair but rigorous - this is an entrance exam for an elite program

## Output Format:
You MUST respond with valid JSON in this exact structure:
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
      "question_number": "1" or "1a" or "1b" etc,
      "question_text": "Brief summary of the question",
      "student_answer": "What the student wrote (or 'Inget svar' if blank)",
      "correct_answer": "The correct answer with brief solution",
      "score": number,
      "max_score": number,
      "is_correct": boolean,
      "feedback": "Detailed feedback in Swedish explaining what was right/wrong"
    }
  ],
  "overall_feedback": "Overall assessment in Swedish - be encouraging but honest",
  "strengths": ["List of topics where student performed well"],
  "areas_to_improve": ["List of topics needing more practice"],
  "study_recommendations": ["Specific topics to study based on mistakes"]
}`;

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const answersFile = formData.get('answers') as File;
        const year = formData.get('year') as string;

        if (!year) {
            return new Response(
                JSON.stringify({ error: 'Please select an exam year' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        if (!answersFile) {
            return new Response(
                JSON.stringify({ error: 'Please upload the student answers PDF/image' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Load the official exam for the selected year
        const examFilename = EXAM_FILES[year];
        if (!examFilename) {
            return new Response(
                JSON.stringify({ error: `No exam found for year ${year}` }),
                { status: 404, headers: { 'Content-Type': 'application/json' } }
            );
        }

        let examText: string;
        try {
            const examPath = path.join(EXAMS_BASE_PATH, examFilename);
            const examBuffer = await readFile(examPath);
            const examData = await pdf(examBuffer);
            examText = examData.text;
        } catch {
            return new Response(
                JSON.stringify({ error: `Failed to load exam for year ${year}` }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Extract text from student's answers
        let answersText: string;
        try {
            const arrayBuffer = await answersFile.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const answersData = await pdf(buffer);
            answersText = answersData.text;
        } catch {
            return new Response(
                JSON.stringify({ error: 'Failed to parse answers PDF. Please ensure it is a valid PDF file.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        if (!answersText || answersText.trim().length === 0) {
            return new Response(
                JSON.stringify({ error: 'No text could be extracted from the answers PDF. It may be an image-based PDF - please use a PDF with selectable text.' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Construct the prompt with both exam and answers
        const userPrompt = `
## OFFICIAL EXAM (Year ${year}):
${examText}

---

## STUDENT'S ANSWERS:
${answersText}

---

Please grade the student's answers against the official exam questions. Provide detailed feedback in Swedish.`;

        // Use Vercel AI SDK to stream the grading response
        const result = streamText({
            model: openai(process.env.OPENAI_MODEL || 'gpt-4o'),
            system: GRADING_SYSTEM_PROMPT,
            prompt: userPrompt,
            temperature: 0.1, // Very low temperature for consistent grading
        });

        // Return streaming response
        return result.toDataStreamResponse();
    } catch (error) {
        console.error('Grading error:', error);
        return new Response(
            JSON.stringify({ error: 'Internal server error during grading' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
