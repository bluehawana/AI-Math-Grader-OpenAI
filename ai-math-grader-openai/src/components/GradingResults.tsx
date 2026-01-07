'use client';

import { GradingResult } from '@/types/grading';

interface GradingResultsProps {
    result: GradingResult;
    onReset: () => void;
}

export default function GradingResults({ result, onReset }: GradingResultsProps) {
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

    return (
        <div className="results-container">
            {/* Back button */}
            <button onClick={onReset} className="back-button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Grade Another Exam
            </button>

            {/* Score Overview Card */}
            <div className="glass-card score-card">
                <div className="score-header">
                    <div className="exam-info">
                        <span className="exam-badge">{result.exam_info.exam_type}</span>
                        <span className="exam-year">{result.exam_info.detected_year}</span>
                    </div>
                    <h2>Exam Results</h2>
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
        </div>
    );
}
