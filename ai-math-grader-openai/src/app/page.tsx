'use client';

import { useState, useCallback } from 'react';
import FileUpload from '@/components/FileUpload';
import GradingResults from '@/components/GradingResults';
import { GradingResult } from '@/types/grading';

export default function Home() {
    const [file, setFile] = useState<File | null>(null);
    const [isGrading, setIsGrading] = useState(false);
    const [gradingResult, setGradingResult] = useState<GradingResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [detectedYear, setDetectedYear] = useState<string | null>(null);

    const handleFileSelect = useCallback((selectedFile: File) => {
        setFile(selectedFile);
        setError(null);
        setGradingResult(null);
        setDetectedYear(null);
    }, []);

    const handleGrade = async () => {
        if (!file) return;

        setIsGrading(true);
        setError(null);
        setGradingResult(null);

        try {
            const formData = new FormData();
            formData.append('file', file);

            // Use grade-image endpoint for images, grade for PDFs
            const isImage = file.type.startsWith('image/') ||
                file.name.toLowerCase().endsWith('.heic') ||
                file.name.toLowerCase().endsWith('.heif');

            const endpoint = isImage ? '/api/grade-image' : '/api/grade';
            if (!isImage) {
                // For legacy PDF endpoint, use 'pdf' key
                formData.delete('file');
                formData.append('pdf', file);
            }

            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to grade exam');
            }

            // Handle streaming response
            const reader = response.body?.getReader();
            const decoder = new TextDecoder();
            let fullText = '';

            if (reader) {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value, { stream: true });
                    fullText += chunk;
                }
            }

            // Parse the streamed text to extract JSON
            const textMatch = fullText.match(/0:"([^"]*)"/g);
            if (textMatch) {
                const extractedText = textMatch
                    .map(m => m.slice(3, -1))
                    .join('')
                    .replace(/\\n/g, '\n')
                    .replace(/\\"/g, '"')
                    .replace(/\\\\/g, '\\');

                const jsonMatch = extractedText.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    const result = JSON.parse(jsonMatch[0]) as GradingResult;
                    setGradingResult(result);
                    if (result.exam_info?.year) {
                        setDetectedYear(result.exam_info.year);
                    }
                } else {
                    setError('Could not parse grading result.');
                }
            } else {
                const jsonMatch = fullText.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    const result = JSON.parse(jsonMatch[0]) as GradingResult;
                    setGradingResult(result);
                } else {
                    setError('Unexpected response format');
                }
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred');
        } finally {
            setIsGrading(false);
        }
    };

    const handleReset = () => {
        setFile(null);
        setGradingResult(null);
        setError(null);
        setDetectedYear(null);
    };

    return (
        <main className="main-container">
            {/* Animated background */}
            <div className="bg-gradient"></div>
            <div className="bg-grid"></div>

            {/* Header */}
            <header className="header">
                <div className="logo">
                    <div className="logo-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <div className="logo-text">
                        <h1>AI Math Grader</h1>
                        <span className="logo-subtitle">Powered by OpenAI & Vercel AI SDK</span>
                    </div>
                </div>
                <div className="header-badges">
                    <span className="badge badge-openai">OpenAI GPT-4o</span>
                    <span className="badge badge-vercel">Vercel AI SDK</span>
                </div>
            </header>

            {/* Main content */}
            <div className="content">
                {!gradingResult ? (
                    <div className="upload-section">
                        <div className="glass-card">
                            <div className="card-header">
                                <h2>📝 Grade Math Exam</h2>
                                <p>Upload answer sheet with year at top (e.g., &quot;2011&quot;) → AI grades automatically</p>
                            </div>

                            <div className="instruction-box">
                                <h3>📋 How it works:</h3>
                                <ol>
                                    <li>Write the exam year at the top of your answer paper (e.g., <strong>2011</strong>)</li>
                                    <li>Write your answers for each question below</li>
                                    <li>Scan or convert to PDF</li>
                                    <li>Upload here → Get instant AI grading!</li>
                                </ol>
                                <p className="available-years">
                                    <strong>Available exams:</strong> 2010-2019, 2021-2025
                                </p>
                            </div>

                            <FileUpload onFileSelect={handleFileSelect} selectedFile={file} />

                            {file && (
                                <div className="file-info">
                                    <div className="file-icon">📎</div>
                                    <div className="file-details">
                                        <span className="file-name">{file.name}</span>
                                        <span className="file-size">{(file.size / 1024).toFixed(1)} KB</span>
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="error-message">
                                    <span className="error-icon">⚠️</span>
                                    {error}
                                </div>
                            )}

                            <button
                                onClick={handleGrade}
                                disabled={!file || isGrading}
                                className={`grade-button ${isGrading ? 'grading' : ''}`}
                            >
                                {isGrading ? (
                                    <>
                                        <span className="spinner"></span>
                                        Detecting year & grading...
                                    </>
                                ) : (
                                    <>
                                        <span className="button-icon">🎯</span>
                                        Grade My Answers
                                    </>
                                )}
                            </button>

                            {isGrading && (
                                <div className="grading-progress">
                                    <div className="progress-bar">
                                        <div className="progress-fill"></div>
                                    </div>
                                    <p className="progress-text">
                                        Detecting exam year → Loading official exam → Grading with GPT-4o...
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Features section */}
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">🔍</div>
                                <h3>Auto Year Detection</h3>
                                <p>Just write &quot;2011&quot; at top - system loads the correct exam</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📚</div>
                                <h3>15 Years of Exams</h3>
                                <p>All Hvitfeldska entrance exams from 2010-2025 included</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🧠</div>
                                <h3>AI-Powered Grading</h3>
                                <p>GPT-4o grades like a math teacher</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📊</div>
                                <h3>Detailed Feedback</h3>
                                <p>Swedish feedback with study recommendations</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <GradingResults result={gradingResult} onReset={handleReset} />
                )}
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>Built with Next.js, OpenAI API & Vercel AI SDK</p>
                <p className="footer-sub">Helping Yvonna prepare for Hvitfeldska Spetsutbildning 2026</p>
            </footer>
        </main>
    );
}
