'use client';

import { useState, useCallback } from 'react';
import FileUpload from '@/components/FileUpload';
import GradingResults from '@/components/GradingResults';
import YearSelector from '@/components/YearSelector';
import { GradingResult } from '@/types/grading';

const AVAILABLE_YEARS = [
    '2010', '2011', '2012', '2013', '2014', '2015',
    '2016', '2017', '2018', '2019', '2021', '2022',
    '2023', '2024', '2025'
];

export default function Home() {
    const [selectedYear, setSelectedYear] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [isGrading, setIsGrading] = useState(false);
    const [gradingResult, setGradingResult] = useState<GradingResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleYearSelect = useCallback((year: string) => {
        setSelectedYear(year);
        setError(null);
    }, []);

    const handleFileSelect = useCallback((selectedFile: File) => {
        setFile(selectedFile);
        setError(null);
        setGradingResult(null);
    }, []);

    const handleGrade = async () => {
        if (!file || !selectedYear) return;

        setIsGrading(true);
        setError(null);
        setGradingResult(null);

        try {
            const formData = new FormData();
            formData.append('answers', file);
            formData.append('year', selectedYear);

            const response = await fetch('/api/grade', {
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
                } else {
                    setError('Could not parse grading result. Raw output: ' + extractedText.substring(0, 500));
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
        setSelectedYear('');
        setGradingResult(null);
        setError(null);
    };

    const canGrade = selectedYear && file && !isGrading;

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
                                <h2>📝 Grade Yvonna&apos;s Math Exam</h2>
                                <p>Select exam year and upload answer sheet for instant AI grading</p>
                            </div>

                            {/* Step 1: Year Selection */}
                            <div className="step-section">
                                <div className="step-header">
                                    <span className="step-number">1</span>
                                    <span className="step-title">Select Exam Year</span>
                                </div>
                                <YearSelector
                                    years={AVAILABLE_YEARS}
                                    selectedYear={selectedYear}
                                    onSelect={handleYearSelect}
                                />
                                {selectedYear && (
                                    <div className="year-selected-info">
                                        ✅ Loaded: Hvitfeldska Intagningstest {selectedYear}
                                    </div>
                                )}
                            </div>

                            {/* Step 2: Upload Answers */}
                            <div className="step-section">
                                <div className="step-header">
                                    <span className="step-number">2</span>
                                    <span className="step-title">Upload Answer Sheet</span>
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
                            </div>

                            {error && (
                                <div className="error-message">
                                    <span className="error-icon">⚠️</span>
                                    {error}
                                </div>
                            )}

                            <button
                                onClick={handleGrade}
                                disabled={!canGrade}
                                className={`grade-button ${isGrading ? 'grading' : ''}`}
                            >
                                {isGrading ? (
                                    <>
                                        <span className="spinner"></span>
                                        Grading with GPT-4o...
                                    </>
                                ) : (
                                    <>
                                        <span className="button-icon">🎯</span>
                                        Grade Answers
                                    </>
                                )}
                            </button>

                            {!canGrade && !isGrading && (
                                <p className="hint-text">
                                    {!selectedYear ? '👆 First, select an exam year above' :
                                        !file ? '👆 Then, upload the answer sheet' : ''}
                                </p>
                            )}

                            {isGrading && (
                                <div className="grading-progress">
                                    <div className="progress-bar">
                                        <div className="progress-fill"></div>
                                    </div>
                                    <p className="progress-text">
                                        Comparing answers against {selectedYear} exam with GPT-4o...
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Features section */}
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">📚</div>
                                <h3>15 Years of Exams</h3>
                                <p>All Hvitfeldska entrance exams from 2010-2025 pre-loaded</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🧠</div>
                                <h3>AI-Powered Grading</h3>
                                <p>GPT-4o understands math and grades like a teacher</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📊</div>
                                <h3>Detailed Feedback</h3>
                                <p>Per-question scores with explanations in Swedish</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📈</div>
                                <h3>Study Tips</h3>
                                <p>Get recommendations on what topics to practice</p>
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
