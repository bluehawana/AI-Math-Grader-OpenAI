# 🎯 AI Math Grader

> **Automated Math Exam Grading System** — Powered by OpenAI GPT-4o & Vercel AI SDK

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?logo=openai)](https://openai.com/)
[![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-Streaming-black?logo=vercel)](https://sdk.vercel.ai/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)

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

1. **Upload** a math exam PDF
2. **AI analyzes** questions and student answers
3. **Get instant feedback** with scores, explanations, and improvement suggestions

Now any parent or student can get **detailed, structured feedback in seconds** instead of hours!

---

## ✨ Features

### 🧠 AI-Powered Analysis
- Uses **OpenAI GPT-4o** for deep mathematical understanding
- Recognizes various question types (algebra, geometry, combinatorics, etc.)
- Provides accurate grading based on mathematical correctness

### 📊 Detailed Feedback
- **Per-question scoring** with max points
- **Correct solutions** for comparison
- **Personalized feedback** in Swedish
- **Strengths & areas to improve** summary

### 🚀 Modern Tech Stack
- **Next.js 16** — Fast, production-ready React framework
- **Vercel AI SDK** — Streaming responses for real-time feedback
- **TypeScript** — Type-safe, maintainable code
- **Tailwind CSS** — Beautiful, responsive design

### 🇸🇪 Built for Swedish Math Exams
- Optimized for **Hvitfeldska spetsutbildning** entrance tests
- Feedback provided in **Swedish**
- Understands Swedish mathematical notation and conventions

---

## 🖼️ Screenshots

| Upload Screen | Results View |
|---------------|--------------|
| Modern drag-and-drop interface | Detailed scoring breakdown |
| Real-time processing feedback | Per-question analysis |
| Beautiful glassmorphism design | Strengths & improvements |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-math-grader-openai.git
cd ai-math-grader-openai

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your OpenAI API key:
# OPENAI_API_KEY=sk-your-key-here

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file with:

```env
# Required: Your OpenAI API key
OPENAI_API_KEY=sk-your-openai-api-key-here

# Optional: Specify the model (default: gpt-4o)
OPENAI_MODEL=gpt-4o
```

---

## 📁 Project Structure

```
ai-math-grader-openai/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── grade/
│   │   │       └── route.ts      # OpenAI grading API endpoint
│   │   ├── globals.css           # Modern CSS design system
│   │   ├── layout.tsx            # Root layout with SEO
│   │   └── page.tsx              # Main application page
│   ├── components/
│   │   ├── FileUpload.tsx        # Drag-and-drop PDF upload
│   │   ├── GradingResults.tsx    # Results display component
│   │   └── StreamingOutput.tsx   # Real-time AI response
│   └── types/
│       └── grading.ts            # TypeScript type definitions
├── package.json
└── README.md
```

---

## 🔧 How It Works

### 1. PDF Text Extraction
The system uses `pdf-parse` to extract text content from uploaded PDF files.

### 2. AI Analysis with OpenAI
The extracted text is sent to GPT-4o with a specialized **system prompt** that instructs the AI to:
- Identify questions and student answers
- Apply mathematical grading criteria
- Provide structured JSON output

### 3. Streaming Response
Using **Vercel AI SDK**, responses stream in real-time for a smooth user experience.

### 4. Structured Output
The AI returns a JSON object with:
```json
{
  "total_score": 87,
  "max_possible_score": 100,
  "percentage": 87.0,
  "per_question": [
    {
      "question_number": 1,
      "question_text": "...",
      "student_answer": "...",
      "correct_answer": "...",
      "score": 4,
      "max_score": 5,
      "feedback": "..."
    }
  ],
  "overall_feedback": "...",
  "strengths": ["..."],
  "areas_to_improve": ["..."]
}
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
- Quickly grade practice tests
- Provide consistent feedback
- Save hours of manual work

---

## 🗺️ Roadmap

- [ ] **Image-based PDF support** — OCR for scanned exams
- [ ] **Multiple exam templates** — IB Math, AP Calculus, etc.
- [ ] **Progress tracking** — Save and compare results over time
- [ ] **Custom rubrics** — Upload your own grading criteria
- [ ] **Multi-language support** — English, Swedish, more
- [ ] **Mobile app** — Grade exams on the go

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **OpenAI** for the powerful GPT-4o model
- **Vercel** for the excellent AI SDK and hosting platform
- **Hvitfeldska gymnasiet** for the challenging math problems that inspired this project
- **All parents and students** working hard to master mathematics

---

## 💬 Contact

Built with ❤️ for Yvonna and all students preparing for math excellence.

Questions or suggestions? Open an issue or reach out!

---

<p align="center">
  <strong>Good luck on your math exam! 📐✨</strong>
</p>
