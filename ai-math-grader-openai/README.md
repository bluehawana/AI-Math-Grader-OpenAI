# 🎯 AI Math Grader

> **Automated Math Exam Grading System** — Powered by OpenAI GPT-4o, LangChain & Vercel AI SDK

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?logo=openai)](https://openai.com/)
[![LangChain](https://img.shields.io/badge/LangChain-LCEL-green)](https://langchain.com/)
[![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-Streaming-black?logo=vercel)](https://sdk.vercel.ai/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)

---

## 🚀 Technologies Used

This project demonstrates proficiency in modern AI/LLM development technologies:

### 1. **OpenAI API** (`@ai-sdk/openai`, `@langchain/openai`)
- GPT-4o model for mathematical reasoning and grading
- Low temperature settings for consistent, accurate grading
- Structured JSON output for reliable parsing

### 2. **LangChain** (`langchain`, `@langchain/core`)
- **LCEL (LangChain Expression Language)** for composable chains
- **ChatPromptTemplate** for structured prompt management
- **StructuredOutputParser** with Zod schema validation
- **RunnableSequence** for modular workflow composition

### 3. **Vercel AI SDK** (`ai`)
- **streamText()** for real-time streaming responses
- **toTextStreamResponse()** for efficient HTTP streaming
- Seamless Next.js API route integration

---

## 📖 The Story Behind This Project

This project was born from a real need: **helping Yvonna prepare for the Hvitfeldska spetsutbildning mathematics entrance exam**.

### The Problem

Every year, thousands of students in Sweden take demanding math entrance exams for specialized (spets) programs. Parents like us want to help, but:

- 📚 **Finding answers is time-consuming** — Past exams often lack official answer keys
- ⏰ **Manual explanation is slow** — Going through each problem one-by-one takes hours
- 🔄 **Feedback isn't immediate** — Students lose momentum waiting for corrections
- 📝 **Tracking progress is hard** — It's difficult to identify patterns in mistakes

### The Solution

**AI Math Grader** automates the entire process:

1. **Write year** at top of answer sheet (e.g., "2011")
2. **Upload PDF** of your answers
3. **AI automatically:**
   - Detects the exam year
   - Loads the official exam questions
   - Grades each answer
   - Provides detailed feedback in Swedish

---

## ✨ Features

### 🔍 Auto Year Detection
Just write "2011" at the top of your answer sheet — the system automatically loads the correct exam.

### 📚 15 Years of Exams
All Hvitfeldska entrance exams from 2010-2025 pre-loaded and ready for grading.

### 🧠 AI-Powered Grading
- GPT-4o understands complex mathematical reasoning
- Provides partial credit for partially correct solutions
- Grades according to Swedish mathematics standards

### 📊 Detailed Feedback
- Per-question scores with max points
- Correct solutions for comparison
- Personalized feedback in Swedish
- Strengths & areas to improve

---

## 🏗️ Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Frontend      │────▶│   API Routes     │────▶│   AI Engine     │
│   (Next.js)     │     │   (Next.js)      │     │                 │
│                 │     │                  │     │  ┌───────────┐  │
│  • File Upload  │     │  /api/grade      │     │  │  OpenAI   │  │
│  • Results UI   │     │  (Vercel AI SDK) │     │  │  GPT-4o   │  │
│  • Streaming    │     │                  │     │  └───────────┘  │
│                 │     │  /api/grade-     │     │        │        │
│                 │     │  langchain       │     │  ┌───────────┐  │
│                 │     │  (LangChain)     │────▶│  │ LangChain │  │
└─────────────────┘     └──────────────────┘     │  │   LCEL    │  │
                                                 │  └───────────┘  │
                                                 └─────────────────┘
```

---

## 📁 Project Structure

```
ai-math-grader-openai/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── grade/
│   │   │   │   └── route.ts          # Vercel AI SDK endpoint
│   │   │   └── grade-langchain/
│   │   │       └── route.ts          # LangChain LCEL endpoint
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── FileUpload.tsx
│   │   ├── GradingResults.tsx
│   │   └── StreamingOutput.tsx
│   ├── lib/
│   │   └── langchain/
│   │       ├── grader.ts             # LangChain LCEL workflow
│   │       ├── rubric.ts             # Grading rubric (prompt engineering)
│   │       ├── schema.ts             # Zod schemas for validation
│   │       └── index.ts
│   └── types/
│       └── grading.ts
├── .env                               # OPENAI_API_KEY
├── package.json
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-math-grader-openai.git
cd ai-math-grader-openai

# Install dependencies
npm install

# Set up environment variables
echo "OPENAI_API_KEY=sk-your-key-here" > .env

# Run the development server
npm run dev -- -p 3005
```

Open [http://localhost:3005](http://localhost:3005) in your browser.

---

## 🔧 API Endpoints

### `POST /api/grade` — Vercel AI SDK
Uses `streamText()` for streaming responses.

```bash
curl -X POST http://localhost:3005/api/grade \
  -F "pdf=@answers.pdf"
```

### `POST /api/grade-langchain` — LangChain LCEL
Uses LangChain chains with structured output.

```bash
curl -X POST http://localhost:3005/api/grade-langchain \
  -F "pdf=@answers.pdf"
```

---

## 🧠 LangChain Workflow (LCEL)

The LangChain integration demonstrates:

```typescript
// 1. Define Zod Schema
const GradingResultSchema = z.object({
  total_score: z.number(),
  per_question: z.array(...),
  overall_feedback: z.string(),
});

// 2. Create Prompt Template
const chatPrompt = ChatPromptTemplate.fromMessages([
  SystemMessagePromptTemplate.fromTemplate(rubric),
  HumanMessagePromptTemplate.fromTemplate('{examText}\n{studentText}'),
]);

// 3. Build LCEL Chain
const gradingChain = RunnableSequence.from([
  chatPrompt,
  new ChatOpenAI({ model: 'gpt-4o' }),
  StructuredOutputParser.fromZodSchema(GradingResultSchema),
]);

// 4. Invoke Chain
const result = await gradingChain.invoke({
  examText,
  studentText,
  year,
});
```

---

## 🎯 Use Cases

### 👨‍👩‍👧 For Parents
- Help your children practice math exams
- Get instant explanations without being a math expert
- Track progress and identify weak areas

### 📚 For Students
- Self-study with immediate feedback
- Understand mistakes with detailed explanations
- Build confidence before the real exam

### 🏫 For Teachers
- Quick grading of practice tests
- Consistent feedback quality
- Save hours of manual work

---

## 📝 Prompt Engineering

This project demonstrates "prompt engineering as software development":

1. **Grading Rubric** (`rubric.ts`) — Defines evaluation criteria in Swedish
2. **System Prompt** — Instructs the AI on grading methodology
3. **Output Schema** — Ensures consistent, parseable responses
4. **Temperature Tuning** — Low temperature for consistent grading

---

## 🗺️ Roadmap

- [x] OpenAI GPT-4o integration
- [x] Vercel AI SDK streaming
- [x] LangChain LCEL workflow
- [x] Zod schema validation
- [ ] Image-based PDF support (OCR)
- [ ] Multiple exam templates
- [ ] Progress tracking
- [ ] Custom rubrics upload

---

## 📄 License

MIT License — Open source and free to use.

---

## 🙏 Acknowledgments

- **OpenAI** for GPT-4o
- **LangChain** for the excellent LCEL framework
- **Vercel** for the AI SDK and hosting platform
- **Hvitfeldska gymnasiet** for the challenging math problems

---

<p align="center">
  <strong>Good luck on your math exam! 📐✨</strong>
</p>
