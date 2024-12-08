export type Progress = {
  id: string;
  userId: string;
  courseId: string;
  completed: boolean;
  completedAt?: Date;
  score?: number;
  modules: {
    id: string;
    completed: boolean;
    completedAt?: Date;
    score?: number;
  }[];
};

export interface QuizResult {
  quizId: string;
  score: number;
  maxScore: number;
  passed: boolean;
  completedAt: Date;
  answers: {
    questionId: string;
    selectedAnswerId: string;
    isCorrect: boolean;
  }[];
}