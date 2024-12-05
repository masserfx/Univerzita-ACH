export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Image {
  src: string;
  alt: string;
  caption?: string;
}

export interface Module {
  id: string;
  title: string;
  content: string;
  type: 'lesson' | 'quiz';
  description?: string;
  materials?: string[];
  images?: Image[];
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