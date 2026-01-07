'use client';

import { useState, useCallback } from 'react';
import FileUpload from '@/components/FileUpload';
import GradingResults from '@/components/GradingResults';
import { GradingResult } from '@/types/grading';

export default function Home() {
    const [files, setFiles] = useState<File[]>([]);
    const [isGrading, setIsGrading] = useState(false);
    const [gradingResult, setGradingResult] = useState<GradingResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [progressMessage, setProgressMessage] = useState<string>('');

    const handleFilesSelect = useCallback((selectedFiles: File[]) => {
        setFiles(selectedFiles);
        setError(null);
        setGradingResult(null);
    }, []);

    const handleGrade = async () => {
        if (files.length === 0) return;

        setIsGrading(true);
        setError(null);
        setGradingResult(null);
        setProgressMessage('Preparing files...');

        try {
            const formData = new FormData();

            // Check if any file is an image
            const hasImages = files.some(f =>
                f.type.startsWith('image/') ||
                f.name.toLowerCase().endsWith('.heic') ||
                f.name.toLowerCase().endsWith('.heif')
            );

            // Append all files
            files.forEach((file, index) => {
                formData.append(`file${index}`, file);
            });
            formData.append('fileCount', files.length.toString());

            // Use grade-image endpoint for images
            const endpoint = hasImages ? '/api/grade-image' : '/api/grade';

            // For single PDF, use legacy endpoint
            if (!hasImages && files.length === 1) {
                formData.delete('file0');
                formData.append('pdf', files[0]);
            }

            setProgressMessage(`Uploading ${files.length} page(s)...`);

            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to grade exam');
            }

            setProgressMessage('AI is reading and grading your answers...');

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
            setProgressMessage('');
        }
    };

    const handleReset = () => {
        setFiles([]);
        setGradingResult(null);
        setError(null);
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
                                <p>Upload your answer sheets (up to 10 pages) → AI grades automatically</p>
                            </div>

                            <div className="instruction-box">
                                <h3>📋 How it works:</h3>
                                <ol>
                                    <li>Take <strong>photos</strong> of your answer paper with iPhone</li>
                                    <li>Or scan to <strong>PDF</strong></li>
                                    <li>Upload <strong>up to 10 pages</strong> for one exam</li>
                                    <li>AI reads your handwriting and grades!</li>
                                </ol>
                                <p className="available-years">
                                    <strong>Supported:</strong> iPhone photos (HEIC), JPEG, PNG, PDF
                                </p>
                            </div>

                            <FileUpload
                                onFilesSelect={handleFilesSelect}
                                selectedFiles={files}
                                maxFiles={10}
                            />

                            {error && (
                                <div className="error-message">
                                    <span className="error-icon">⚠️</span>
                                    {error}
                                </div>
                            )}

                            <button
                                onClick={handleGrade}
                                disabled={files.length === 0 || isGrading}
                                className={`grade-button ${isGrading ? 'grading' : ''}`}
                            >
                                {isGrading ? (
                                    <>
                                        <span className="spinner"></span>
                                        {progressMessage || 'Processing...'}
                                    </>
                                ) : (
                                    <>
                                        <span className="button-icon">🎯</span>
                                        Grade {files.length > 0 ? `${files.length} Page${files.length > 1 ? 's' : ''}` : 'My Answers'}
                                    </>
                                )}
                            </button>

                            {isGrading && (
                                <div className="grading-progress">
                                    <div className="progress-bar">
                                        <div className="progress-fill"></div>
                                    </div>
                                    <p className="progress-text">
                                        {progressMessage}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Features section */}
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">📸</div>
                                <h3>iPhone Photos</h3>
                                <p>Take photos with iPhone - HEIC format supported</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📄</div>
                                <h3>Multi-Page Support</h3>
                                <p>Upload up to 10 pages for one exam</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🧠</div>
                                <h3>AI Vision</h3>
                                <p>GPT-4o reads your handwritten answers</p>
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
                <p className="footer-sub">Helping students prepare for Hvitfeldska Spetsutbildning 2026</p>
            </footer>
        </main>
    );
}
