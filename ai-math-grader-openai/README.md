# 🎯 AI Math Grader

> **Automated Math Exam Grading System** — Powered by OpenAI GPT-4o, LangChain LCEL & Vercel AI SDK

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?logo=openai)](https://openai.com/)
[![LangChain](https://img.shields.io/badge/LangChain-LCEL-green)](https://langchain.com/)
[![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-Streaming-black?logo=vercel)](https://sdk.vercel.ai/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)

---

## 📖 Project Overview

An AI-powered exam grading system that automatically evaluates student answers against official Hvitfeldska spetsutbildning mathematics entrance exams (2010-2025).

### 🎯 Problem Statement

Students preparing for competitive math exams need:
- **Immediate feedback** on practice tests
- **Detailed explanations** of mistakes
- **Consistent grading** according to exam standards

Manual grading is time-consuming and inconsistent. This project solves it with AI.

---

## 🛠️ Technologies & Tools

### Core AI Stack

| Technology | Purpose | Package |
|------------|---------|---------|
| **OpenAI API** | LLM Provider (GPT-4o) | `@ai-sdk/openai`, `@langchain/openai` |
| **Vercel AI SDK** | Streaming responses | `ai` |
| **LangChain** | Chain composition & LCEL | `langchain`, `@langchain/core` |
| **Zod** | Schema validation | `zod` |

### Frontend & Backend

| Technology | Purpose | Package |
|------------|---------|---------|
| **Next.js 16** | Full-stack React framework | `next` |
| **TypeScript** | Type safety | `typescript` |
| **Tailwind CSS** | Styling | `tailwindcss` |
| **React 19** | UI library | `react`, `react-dom` |

### Utilities

| Technology | Purpose | Package |
|------------|---------|---------|
| **pdfjs-dist** | PDF text extraction | `pdfjs-dist` |
| **react-dropzone** | File upload UI | `react-dropzone` |

### Total: **12+ npm packages** for a complete AI grading solution

---

## 🧠 LangChain Workflow Design

The grading system uses **LCEL (LangChain Expression Language)** for modular, composable AI workflows.

### Workflow Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        GRADING WORKFLOW                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌──────────────┐                                                       │
│  │   Student    │                                                       │
│  │   Upload     │                                                       │
│  │   PDF        │                                                       │
│  └──────┬───────┘                                                       │
│         │                                                               │
│         ▼                                                               │
│  ┌──────────────┐     ┌──────────────┐                                 │
│  │   PDF Text   │────▶│  Year        │                                 │
│  │   Extraction │     │  Detection   │                                 │
│  │  (pdfjs)     │     │  (regex)     │                                 │
│  └──────────────┘     └──────┬───────┘                                 │
│                              │                                          │
│                              ▼                                          │
│                       ┌──────────────┐                                 │
│                       │  Load Exam   │                                 │
│                       │  from Archive│                                 │
│                       │  (2010-2025) │                                 │
│                       └──────┬───────┘                                 │
│                              │                                          │
│         ┌────────────────────┴────────────────────┐                    │
│         │                                         │                    │
│         ▼                                         ▼                    │
│  ┌──────────────┐                         ┌──────────────┐            │
│  │ Vercel AI    │                         │ LangChain    │            │
│  │ SDK Route    │                         │ LCEL Route   │            │
│  │ /api/grade   │                         │ /api/grade-  │            │
│  │              │                         │ langchain    │            │
│  └──────┬───────┘                         └──────┬───────┘            │
│         │                                         │                    │
│         ▼                                         ▼                    │
│  ┌──────────────┐                         ┌──────────────┐            │
│  │ streamText() │                         │ LCEL Chain   │            │
│  │ OpenAI GPT4o │                         │ Prompt +     │            │
│  │              │                         │ Model +      │            │
│  │              │                         │ Parser       │            │
│  └──────┬───────┘                         └──────┬───────┘            │
│         │                                         │                    │
│         └─────────────────┬───────────────────────┘                    │
│                           │                                            │
│                           ▼                                            │
│                    ┌──────────────┐                                   │
│                    │  Structured  │                                   │
│                    │  JSON Output │                                   │
│                    │  (Zod valid) │                                   │
│                    └──────┬───────┘                                   │
│                           │                                            │
│                           ▼                                            │
│                    ┌──────────────┐                                   │
│                    │   Results    │                                   │
│                    │   Display    │                                   │
│                    │   Component  │                                   │
│                    └──────────────┘                                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### LangChain LCEL Chain

```typescript
// 1. Define Schema (Zod)
const GradingResultSchema = z.object({
  total_score: z.number(),
  percentage: z.number(),
  per_question: z.array(QuestionSchema),
  overall_feedback: z.string(),
  strengths: z.array(z.string()),
  areas_to_improve: z.array(z.string()),
});

// 2. Create Prompt Template
const chatPrompt = ChatPromptTemplate.fromMessages([
  SystemMessagePromptTemplate.fromTemplate(GRADING_RUBRIC),
  HumanMessagePromptTemplate.fromTemplate('{examText}\n{studentText}'),
]);

// 3. Build LCEL Chain
const gradingChain = RunnableSequence.from([
  chatPrompt,                    // Format input
  new ChatOpenAI({ model: 'gpt-4o' }),  // LLM call
  StructuredOutputParser.fromZodSchema(GradingResultSchema),  // Parse output
]);

// 4. Execute Chain
const result = await gradingChain.invoke({
  examText,
  studentText,
  year,
});
```

---

## 🎨 System Design

### API Endpoints

| Endpoint | Method | Technology | Description |
|----------|--------|------------|-------------|
| `/api/grade` | POST | Vercel AI SDK | Streaming grading with `streamText()` |
| `/api/grade-langchain` | POST | LangChain LCEL | Structured output with chain |
| `/api/exams` | GET | Next.js | List available exam years |

### Two Grading Approaches

#### 1. Vercel AI SDK (`/api/grade`)
```typescript
const result = streamText({
  model: openai('gpt-4o'),
  system: GRADING_PROMPT,
  prompt: userPrompt,
  temperature: 0.1,
});
return result.toTextStreamResponse();
```
- **Pros**: Real-time streaming, simpler code
- **Use case**: Interactive UI with live feedback

#### 2. LangChain LCEL (`/api/grade-langchain`)
```typescript
const result = await gradingChain.invoke({
  examText,
  studentText,
  year,
});
return NextResponse.json(result);
```
- **Pros**: Structured output, schema validation, composable
- **Use case**: Reliable JSON output, complex workflows

---

## 📁 Project Structure

```
ai-math-grader-openai/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── grade/
│   │   │   │   └── route.ts          # Vercel AI SDK endpoint
│   │   │   ├── grade-langchain/
│   │   │   │   └── route.ts          # LangChain LCEL endpoint
│   │   │   └── exams/
│   │   │       └── route.ts          # Exam listing endpoint
│   │   ├── globals.css               # Styling
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Main UI
│   │
│   ├── components/
│   │   ├── FileUpload.tsx            # Drag-drop upload
│   │   ├── GradingResults.tsx        # Results display
│   │   └── StreamingOutput.tsx       # Real-time output
│   │
│   ├── lib/
│   │   └── langchain/
│   │       ├── grader.ts             # LCEL workflow
│   │       ├── rubric.ts             # Grading criteria (Swedish)
│   │       ├── schema.ts             # Zod schemas
│   │       └── index.ts              # Exports
│   │
│   └── types/
│       └── grading.ts                # TypeScript types
│
├── .env                              # OPENAI_API_KEY
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript config
└── README.md                         # This file

../exams/intagningstest/              # 15 exam PDFs (2010-2025)
../handbok/                           # Study materials
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- OpenAI API key

### Installation

```bash
# Clone
git clone https://github.com/bluehawana/AI-Math-Grader-OpenAI.git
cd AI-Math-Grader-OpenAI/ai-math-grader-openai

# Install
npm install

# Configure
echo "OPENAI_API_KEY=sk-your-key" > .env

# Run
npm run dev -- -p 3005
```

Open http://localhost:3005

---

## 📝 Prompt Engineering

The grading system uses carefully crafted prompts in Swedish:

### Grading Rubric (`rubric.ts`)

```typescript
export const GRADING_RUBRIC = `
Du är en expert-examinator för Hvitfeldska Spetsutbildning.

## Bedömningskriterier:
1. Korrekthet (40%) - Är svaret matematiskt korrekt?
2. Resonemangskvalitet (30%) - Är lösningen logisk?
3. Matematisk struktur (20%) - Korrekt notation?
4. Tydlighet (10%) - Är svaret klart?

## Poängfördelning:
- Full poäng: Korrekt svar med giltig metod
- Delpoäng (50-80%): Rätt metod men beräkningsfel
- Minimal poäng (10-50%): Visar förståelse
- Noll poäng: Fel metod eller inget svar
`;
```

---

## 🎯 Use Case: Yvonna's Exam Prep

1. **Yvonna writes "2011"** at the top of her answer sheet
2. **Solves the problems** from memory
3. **Scans to PDF** and uploads
4. **AI automatically**:
   - Detects year → loads 2011 exam
   - Grades each answer
   - Provides Swedish feedback
   - Suggests study topics

---

## 🗺️ Roadmap

- [x] OpenAI GPT-4o integration
- [x] Vercel AI SDK streaming
- [x] LangChain LCEL workflow
- [x] Zod schema validation
- [x] 15 years of exams (2010-2025)
- [x] Swedish grading rubric
- [ ] OCR for handwritten answers
- [ ] Progress tracking
- [ ] Custom rubric upload
- [ ] Multi-language support

---

## 📄 License

MIT License — Open source and free to use.

---

## 🙏 Acknowledgments

- **OpenAI** for GPT-4o
- **LangChain** for LCEL framework
- **Vercel** for AI SDK
- **Hvitfeldska gymnasiet** for the challenging exams

---

<p align="center">
  <strong>Built with ❤️ for Yvonna and all math students</strong>
</p>
