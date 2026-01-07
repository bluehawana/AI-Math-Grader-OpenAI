/**
 * LangChain Grading Workflow (LCEL)
 * 
 * This module implements the core grading logic using:
 * - LangChain: For structured chains and prompt management
 * - OpenAI: As the LLM provider (GPT-4o)
 * - Zod: For output schema validation
 * 
 * LCEL (LangChain Expression Language) allows us to compose
 * modular, reusable AI workflows.
 */

import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { StructuredOutputParser } from 'langchain/output_parsers';
import { GradingResultSchema, GradingResult } from './schema';
import { SYSTEM_PROMPT_TEMPLATE } from './rubric';

// Initialize OpenAI model via LangChain
const model = new ChatOpenAI({
    modelName: process.env.OPENAI_MODEL || 'gpt-4o',
    temperature: 0.1, // Low temperature for consistent grading
    openAIApiKey: process.env.OPENAI_API_KEY,
});

// Create structured output parser from Zod schema
const outputParser = StructuredOutputParser.fromZodSchema(GradingResultSchema);

// Format instructions for the LLM
const formatInstructions = outputParser.getFormatInstructions();

// Build the prompt template using LCEL
const systemTemplate = SystemMessagePromptTemplate.fromTemplate(
    SYSTEM_PROMPT_TEMPLATE + '\n\n' + formatInstructions
);

const humanTemplate = HumanMessagePromptTemplate.fromTemplate(`
## OFFICIELLT PROV (År {year}):
{examText}

---

## ELEVENS SVAR:
{studentText}

---

Betygsätt elevens svar mot de officiella provfrågorna.
Ge detaljerad feedback på svenska.
Returnera resultatet som JSON enligt schemat.
`);

const chatPrompt = ChatPromptTemplate.fromMessages([
    systemTemplate,
    humanTemplate,
]);

/**
 * LangChain Grading Chain (LCEL)
 * 
 * This chain:
 * 1. Takes exam text and student answers as input
 * 2. Formats them into a structured prompt
 * 3. Sends to OpenAI GPT-4o
 * 4. Parses the structured JSON output
 */
export const gradingChain = RunnableSequence.from([
    chatPrompt,
    model,
    outputParser,
]);

/**
 * Grade an exam using the LangChain workflow
 * 
 * @param examText - The official exam questions
 * @param studentText - The student's answers
 * @param year - The exam year
 * @returns Structured grading result
 */
export async function gradeExamWithLangChain({
    examText,
    studentText,
    year,
}: {
    examText: string;
    studentText: string;
    year: string;
}): Promise<GradingResult> {
    try {
        const result = await gradingChain.invoke({
            examText,
            studentText,
            year,
        });

        return result as GradingResult;
    } catch (error) {
        console.error('LangChain grading error:', error);
        throw new Error('Failed to grade exam with LangChain');
    }
}

/**
 * Stream grading results using LangChain
 * 
 * This is useful for showing real-time progress to the user
 */
export async function* streamGradeExam({
    examText,
    studentText,
    year,
}: {
    examText: string;
    studentText: string;
    year: string;
}) {
    const prompt = await chatPrompt.format({
        examText,
        studentText,
        year,
    });

    const stream = await model.stream(prompt);

    for await (const chunk of stream) {
        yield chunk.content;
    }
}
