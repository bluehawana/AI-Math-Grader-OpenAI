# 🎯 AI Math Grader

> **Automated Mathematics Exam Assessment System** — Powered by Gemini 2.0 Flash, LangChain, and Vercel AI SDK.

AI Math Grader is a sophisticated platform designed to automatically evaluate handwritten mathematics exams against official standards. Built for speed and accuracy, it leverages state-of-the-art Vision-AI to interpret Swedish handwriting and provide detailed pedagogical feedback.

## ✨ Key Features

- **📸 Advanced Vision-AI**: Utilizes Gemini 2.0 Flash and GPT-4o to read and grade handwritten Swedish math solutions directly from photos.
- **📱 iPhone/HEIC Support**: Seamlessly processes `.heic` photos from mobile devices with automatic server-side optimization.
- **📊 Multi-Page Grading**: Submit up to 10 pages per exam; the AI maintains context across all sheets to provide holistic feedback.
- **📄 Professional PDF Export**: Generates clean, print-friendly assessment reports for parents and students.
- **🇸🇪 Swedish Optimization**: Full support for Swedish mathematical notation, terminology, and character sets (å, ä, ö).
- **🔗 Multi-Provider Architecture**: Modular design supporting OpenAI, Anthropic, Google (Gemini), and Groq.

## 🛠️ Technology Stack

| Layer | Technology |
|-------|------------|
| **Core** | [Next.js 16](https://nextjs.org/) (Full-stack), [TypeScript](https://www.typescriptlang.org/) |
| **AI Orchestration** | [LangChain](https://js.langchain.com/) (LCEL), [Vercel AI SDK](https://sdk.vercel.ai/) |
| **Models** | Gemini 2.0 Flash, GPT-4o, Claude 3.5 Sonnet |
| **Processing** | Sharp (Image optimization), pdftotext (PDF extraction) |
| **Styling** | Vanilla CSS (Modern, Premium Aesthetic) |
| **PDF Generation** | jsPDF, html2canvas |

## 🧠 Architecture Overview

The system utilizes a dual-engine approach for maximum flexibility:

1.  **Vercel AI SDK Engine**: Optimized for real-time streaming feedback and UI responsiveness.
2.  **LangChain LCEL Engine**: Designed for structured output, consistent schema validation, and complex logical chaining.

For a deep dive into the technical implementation, see [ARCHITECTURE.md](./ARCHITECTURE.md).

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- API Key (OpenAI, Anthropic, or Google)
- `poppler-utils` (for PDF text extraction)

### Installation

```bash
# Clone the repository
git clone https://github.com/bluehawana/AI-Math-Grader-OpenAI.git
cd AI-Math-Grader-OpenAI

# Install dependencies
npm install

# Configure surroundings
# Set LLM_PROVIDER=google and add GOOGLE_GENERATIVE_AI_API_KEY
cp .env.example .env

# Start development server
npm run dev
```

## 📁 Repository Structure

- `src/app/api/grade-image`: Vision-AI processing for photos/handwriting.
- `src/app/api/grade`: Text-based PDF grading logic.
- `src/lib/providers.ts`: Multi-provider configuration and model switching.
- `src/components/GradingResults.tsx`: PDF report generation and visualization.

## 📄 License
MIT License - Developed as a tool for students preparing for competitive mathematics entrance exams.

---
*Helping students achieve excellence in mathematics.*
