'use client';

import { GradingResult } from '@/types/grading';
import { useRef } from 'react';

interface GradingResultsProps {
    result: GradingResult;
    onReset: () => void;
}

export default function GradingResults({ result, onReset }: GradingResultsProps) {
    const resultsRef = useRef<HTMLDivElement>(null);

    const getScoreColor = (percentage: number) => {
        if (percentage >= 80) return 'score-excellent';
        if (percentage >= 60) return 'score-good';
        if (percentage >= 40) return 'score-fair';
        return 'score-needs-work';
    };

    const getScoreEmoji = (percentage: number) => {
        if (percentage >= 90) return '🌟';
        if (percentage >= 80) return '✨';
        if (percentage >= 70) return '👍';
        if (percentage >= 60) return '📈';
        if (percentage >= 50) return '💪';
        return '📚';
    };

    const exportToPDF = async () => {
        const element = resultsRef.current;
        if (!element) return;

        // Dynamic import to avoid SSR issues
        const html2canvas = (await import('html2canvas')).default;
        const { jsPDF } = await import('jspdf');

        try {
            // Create canvas from the results
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#0a0a0f',
                logging: false,
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4',
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;

            // Add pages if content is long
            let heightLeft = imgHeight * ratio;
            let position = 0;

            pdf.addImage(imgData, 'PNG', imgX, position, imgWidth * ratio, imgHeight * ratio);
            heightLeft -= pdfHeight;

            while (heightLeft > 0) {
                position = heightLeft - imgHeight * ratio;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', imgX, position, imgWidth * ratio, imgHeight * ratio);
                heightLeft -= pdfHeight;
            }

            // Generate filename with date
            const date = new Date().toISOString().split('T')[0];
            const year = result.exam_info?.year || result.exam_info?.detected_year || 'exam';
            const filename = `Yvonna_Math_Grading_${year}_${date}.pdf`;

            pdf.save(filename);
        } catch (error) {
            console.error('PDF export error:', error);
            alert('Failed to export PDF. Please try again.');
        }
    };

    return (
        <div className="results-container">
            {/* Action buttons */}
            <div className="results-actions">
                <button onClick={onReset} className="back-button">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Grade Another Exam
                </button>

                <button onClick={exportToPDF} className="export-button">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="12" y1="18" x2="12" y2="12" />
                        <polyline points="9 15 12 12 15 15" />
                    </svg>
                    📄 Export as PDF
                </button>
            </div>

            {/* Printable content */}
            <div ref={resultsRef} className="printable-results">
                {/* Score Overview Card */}
                <div className="glass-card score-card">
                    <div className="score-header">
                        <div className="exam-info">
                            <span className="exam-badge">{result.exam_info.exam_type}</span>
                            <span className="exam-year">{result.exam_info?.year || result.exam_info?.detected_year}</span>
                        </div>
                        <h2>Exam Results - Yvonna</h2>
                    </div>

                    <div className="score-display">
                        <div className={`score-circle ${getScoreColor(result.percentage)}`}>
                            <span className="score-emoji">{getScoreEmoji(result.percentage)}</span>
                            <span className="score-value">{result.total_score}</span>
                            <span className="score-max">/ {result.max_possible_score}</span>
                        </div>
                        <div className="score-percentage">
                            <span className="percentage-value">{result.percentage.toFixed(1)}%</span>
                            <div className="percentage-bar">
                                <div
                                    className={`percentage-fill ${getScoreColor(result.percentage)}`}
                                    style={{ width: `${result.percentage}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="overall-feedback">
                        <h3>📝 Övergripande Bedömning</h3>
                        <p>{result.overall_feedback}</p>
                    </div>

                    <div className="feedback-columns">
                        <div className="strengths">
                            <h4>💪 Styrkor</h4>
                            <ul>
                                {result.strengths.map((strength, i) => (
                                    <li key={i}>{strength}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="improvements">
                            <h4>📈 Förbättringsområden</h4>
                            <ul>
                                {result.areas_to_improve.map((area, i) => (
                                    <li key={i}>{area}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {result.study_recommendations && result.study_recommendations.length > 0 && (
                        <div className="study-recommendations">
                            <h4>📚 Studierekommendationer</h4>
                            <ul>
                                {result.study_recommendations.map((rec, i) => (
                                    <li key={i}>{rec}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Per-Question Results */}
                <div className="questions-section">
                    <h2>📊 Detaljerade Resultat per Fråga</h2>
                    <div className="questions-grid">
                        {result.per_question.map((q) => (
                            <div key={q.question_number} className="question-card glass-card">
                                <div className="question-header">
                                    <span className="question-number">Fråga {q.question_number}</span>
                                    <span className={`question-score ${getScoreColor((q.score / q.max_score) * 100)}`}>
                                        {q.score} / {q.max_score}
                                    </span>
                                </div>

                                <div className="question-content">
                                    <div className="question-text">
                                        <strong>Uppgift:</strong>
                                        <p>{q.question_text}</p>
                                    </div>

                                    <div className="answer-section">
                                        <div className="student-answer">
                                            <strong>Elevens svar:</strong>
                                            <p>{q.student_answer || 'Ej identifierat'}</p>
                                        </div>
                                        <div className="correct-answer">
                                            <strong>Korrekt lösning:</strong>
                                            <p>{q.correct_answer}</p>
                                        </div>
                                    </div>

                                    <div className="question-feedback">
                                        <strong>Feedback:</strong>
                                        <p>{q.feedback}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer for PDF */}
                <div className="pdf-footer">
                    <p>Generated by AI Math Grader • Hvitfeldska Spetsutbildning Preparation</p>
                    <p>Date: {new Date().toLocaleDateString('sv-SE')}</p>
                </div>
            </div>
        </div>
    );
}
