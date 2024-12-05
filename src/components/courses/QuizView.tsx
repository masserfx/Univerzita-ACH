'use client';

import React, { useState } from 'react';
import type { Quiz } from '@/types/course';
import type { QuizResult } from '@/types/progress';

interface QuizViewProps {
  quiz: Quiz;
  onComplete: (result: QuizResult) => void;
}

export default function QuizView({ quiz, onComplete }: QuizViewProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const answers = quiz.questions.map((question, index) => ({
      questionId: question.id,
      selectedAnswer: selectedAnswers[index],
      correct: selectedAnswers[index] === question.correctAnswer,
    }));

    const score = answers.filter(a => a.correct).length;
    
    const result: QuizResult = {
      quizId: quiz.id,
      score,
      maxScore: quiz.questions.length,
      completedAt: new Date(),
      answers,
    };

    setShowResults(true);
    onComplete(result);
  };

  if (showResults) {
    const score = selectedAnswers.filter(
      (answer, index) => answer === quiz.questions[index].correctAnswer
    ).length;

    return (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Výsledky kvízu</h2>
        <div className="text-center mb-8">
          <p className="text-4xl font-bold text-ach-blue mb-2">
            {score} / {quiz.questions.length}
          </p>
          <p className="text-gray-600">
            Správných odpovědí ({Math.round((score / quiz.questions.length) * 100)}%)
          </p>
        </div>

        <div className="space-y-6">
          {quiz.questions.map((question, index) => (
            <div
              key={question.id}
              className={`p-4 rounded-lg ${
                selectedAnswers[index] === question.correctAnswer
                  ? 'bg-green-50'
                  : 'bg-red-50'
              }`}
            >
              <p className="font-medium mb-2">{question.question}</p>
              <div className="space-y-2">
                {question.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`p-2 rounded ${
                      optionIndex === question.correctAnswer
                        ? 'bg-green-100 text-green-800'
                        : optionIndex === selectedAnswers[index]
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-50'
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
              {question.explanation && (
                <p className="mt-2 text-sm text-gray-600">{question.explanation}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{quiz.title}</h2>
          <span className="text-gray-600">
            Otázka {currentQuestionIndex + 1} z {quiz.questions.length}
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-ach-blue rounded-full transition-all"
            style={{
              width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4">{currentQuestion.question}</h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 text-left rounded-lg border transition-colors ${
                selectedAnswers[currentQuestionIndex] === index
                  ? 'border-ach-blue bg-ach-blue text-white'
                  : 'border-gray-200 hover:border-ach-blue'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
          disabled={currentQuestionIndex === 0}
          className="btn-secondary disabled:opacity-50"
        >
          Předchozí
        </button>
        <button
          onClick={handleNext}
          disabled={selectedAnswers[currentQuestionIndex] === undefined}
          className="btn-primary disabled:opacity-50"
        >
          {currentQuestionIndex === quiz.questions.length - 1 ? 'Dokončit' : 'Další'}
        </button>
      </div>
    </div>
  );
} 