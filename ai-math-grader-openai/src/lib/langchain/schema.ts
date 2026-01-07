/**
 * Zod Schema for LangChain Structured Output
 * 
 * This defines the expected JSON structure from the LLM grading response.
 * Using Zod ensures type safety and validation of AI outputs.
 */

import { z } from 'zod';

// Schema for individual question results
export const QuestionResultSchema = z.object({
    question_number: z.string().describe('The question number (e.g., "1", "2a", "2b")'),
    question_text: z.string().describe('Brief summary of the question'),
    student_answer: z.string().describe('What the student wrote, or "Inget svar" if blank'),
    correct_answer: z.string().describe('The correct answer with brief solution'),
    score: z.number().describe('Points awarded'),
    max_score: z.number().describe('Maximum points possible'),
    is_correct: z.boolean().describe('Whether the answer is fully correct'),
    feedback: z.string().describe('Detailed feedback in Swedish'),
});

// Schema for exam metadata
export const ExamInfoSchema = z.object({
    year: z.string().describe('The exam year (e.g., "2011")'),
    exam_type: z.string().describe('Type of exam'),
    total_questions: z.number().describe('Total number of questions'),
});

// Main grading result schema
export const GradingResultSchema = z.object({
    exam_info: ExamInfoSchema,
    total_score: z.number().describe('Total points earned'),
    max_possible_score: z.number().describe('Maximum possible points'),
    percentage: z.number().describe('Percentage score'),
    per_question: z.array(QuestionResultSchema).describe('Results for each question'),
    overall_feedback: z.string().describe('Overall assessment in Swedish'),
    strengths: z.array(z.string()).describe('Areas where student performed well'),
    areas_to_improve: z.array(z.string()).describe('Areas needing improvement'),
    study_recommendations: z.array(z.string()).describe('Specific study recommendations'),
});

// TypeScript types derived from Zod schemas
export type QuestionResult = z.infer<typeof QuestionResultSchema>;
export type ExamInfo = z.infer<typeof ExamInfoSchema>;
export type GradingResult = z.infer<typeof GradingResultSchema>;
