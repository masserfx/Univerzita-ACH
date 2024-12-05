export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Image {
  src: string;
  alt: string;
  caption?: string;
}

export interface Question {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  passingScore: number;
  timeLimit?: number;
}

export interface Module {
  id: string;
  title: string;
  content: string;
  type: 'lesson' | 'quiz';
  description?: string;
  materials?: string[];
  images?: Image[];
  quiz?: Quiz;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: CourseLevel;
  tags: string[];
  modules: Module[];
} 