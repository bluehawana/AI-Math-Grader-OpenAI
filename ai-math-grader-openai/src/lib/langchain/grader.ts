/**
 * LangChain Grading Workflow (LCEL) - Multi-Provider
 * 
 * This module implements the core grading logic using:
 * - LangChain: For structured chains and prompt management
 * - Multi-Provider: OpenAI, Anthropic, Google, Groq
 * - Zod: For output schema validation
 * 
 * Set LLM_PROVIDER in .env to switch providers
 * 
 * LCEL (LangChain Expression Language) allows us to compose
 * modular, reusable AI workflows.
 */

import { ChatOpenAI } from '@langchain/openai';
import { ChatAnthropic } from '@langchain/anthropic';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { StructuredOutputParser } from 'langchain/output_parsers';
import { BaseChatModel } from '@langchain/core/language_models/chat_models';
import { GradingResultSchema, GradingResult } from './schema';
import { SYSTEM_PROMPT_TEMPLATE } from './rubric';

type LLMProvider = 'openai' | 'anthropic' | 'google' | 'groq';

// Get the LangChain model based on provider
function getLangChainModel(): BaseChatModel {
    const provider = (process.env.LLM_PROVIDER || 'openai') as LLMProvider;

    switch (provider) {
        case 'anthropic':
            console.log('LangChain using: Anthropic Claude');
            return new ChatAnthropic({
                modelName: process.env.ANTHROPIC_MODEL || 'claude-3-5-sonnet-20241022',
                temperature: 0.1,
                anthropicApiKey: process.env.ANTHROPIC_API_KEY,
            });

        case 'google':
            console.log('LangChain using: Google Gemini');
            return new ChatGoogleGenerativeAI({
                modelName: process.env.GOOGLE_MODEL || 'gemini-1.5-pro',
                temperature: 0.1,
                apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
            });

        case 'groq':
            // Groq uses OpenAI-compatible API
            console.log('LangChain using: Groq (OpenAI-compatible)');
            return new ChatOpenAI({
                modelName: process.env.GROQ_MODEL || 'llama-3.1-70b-versatile',
                temperature: 0.1,
                openAIApiKey: process.env.GROQ_API_KEY,
                configuration: {
                    baseURL: 'https://api.groq.com/openai/v1',
                },
            });

        case 'openai':
        default:
            console.log('LangChain using: OpenAI GPT-4o');
            return new ChatOpenAI({
                modelName: process.env.OPENAI_MODEL || 'gpt-4o',
                temperature: 0.1,
                openAIApiKey: process.env.OPENAI_API_KEY,
            });
    }
}

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
 * Create LangChain Grading Chain (LCEL)
 * 
 * This chain:
 * 1. Takes exam text and student answers as input
 * 2. Formats them into a structured prompt
 * 3. Sends to the configured LLM provider
 * 4. Parses the structured JSON output
 */
function createGradingChain() {
    const model = getLangChainModel();
    return RunnableSequence.from([
        chatPrompt,
        model,
        outputParser,
    ]);
}

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
        const gradingChain = createGradingChain();
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
    const model = getLangChainModel();
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

// Export for use in other modules
export { createGradingChain };
