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