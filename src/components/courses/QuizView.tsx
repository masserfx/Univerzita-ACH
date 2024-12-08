'use client';

import React, { useState } from 'react';
import type { Quiz } from '@/data/types';
import type { QuizResult } from '@/types/progress';

interface QuizViewProps {
  quiz: Quiz;
  onComplete: (result: QuizResult) => void;
}

export function QuizView({ quiz, onComplete }: QuizViewProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswerSelect = (answerId: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerId;
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
      selectedAnswerId: selectedAnswers[index],
      isCorrect: question.options.find(opt => opt.id === selectedAnswers[index])?.isCorrect || false,
    }));

    const score = answers.filter(a => a.isCorrect).length;
    const maxScore = quiz.questions.length;
    const passed = (score / maxScore) * 100 >= quiz.passingScore;
    
    const result: QuizResult = {
      quizId: quiz.id,
      score,
      maxScore,
      passed,
      completedAt: new Date(),
      answers,
    };

    setShowResults(true);
    onComplete(result);
  };

  if (showResults) {
    const score = quiz.questions.reduce((acc, question, index) => {
      const selectedOption = question.options.find(opt => opt.id === selectedAnswers[index]);
      return acc + (selectedOption?.isCorrect ? 1 : 0);
    }, 0);

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
          <p className="mt-2 text-lg">
            {(score / quiz.questions.length) * 100 >= quiz.passingScore ? (
              <span className="text-green-600">Úspěšně jste složili test!</span>
            ) : (
              <span className="text-red-600">Bohužel jste v testu neuspěli.</span>
            )}
          </p>
        </div>

        <div className="space-y-6">
          {quiz.questions.map((question, index) => {
            const selectedOption = question.options.find(opt => opt.id === selectedAnswers[index]);
            const correctOption = question.options.find(opt => opt.isCorrect);
            
            return (
              <div
                key={question.id}
                className={`p-4 rounded-lg ${
                  selectedOption?.isCorrect ? 'bg-green-50' : 'bg-red-50'
                }`}
              >
                <p className="font-medium mb-2">{question.text}</p>
                <div className="space-y-2">
                  {question.options.map((option) => (
                    <div
                      key={option.id}
                      className={`p-2 rounded ${
                        option.isCorrect
                          ? 'bg-green-100 text-green-800'
                          : option.id === selectedAnswers[index]
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-50'
                      }`}
                    >
                      {option.text}
                    </div>
                  ))}
                </div>
                {question.explanation && (
                  <p className="mt-2 text-sm text-gray-600">{question.explanation}</p>
                )}
              </div>
            );
          })}
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
        <h3 className="text-xl font-medium mb-4">{currentQuestion.text}</h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswerSelect(option.id)}
              className={`w-full p-4 text-left rounded-lg border transition-colors ${
                selectedAnswers[currentQuestionIndex] === option.id
                  ? 'border-ach-blue bg-ach-blue text-white'
                  : 'border-gray-200 hover:border-ach-blue'
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
          disabled={currentQuestionIndex === 0}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
        >
          Předchozí
        </button>
        <button
          onClick={handleNext}
          disabled={!selectedAnswers[currentQuestionIndex]}
          className="px-4 py-2 bg-ach-blue text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {currentQuestionIndex === quiz.questions.length - 1 ? 'Dokončit' : 'Další'}
        </button>
      </div>
    </div>
  );
} 