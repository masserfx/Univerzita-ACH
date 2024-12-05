export type Course = {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'expert';
  tags: string[];
  modules: {
    id: string;
    title: string;
    content: string;
  }[];
}; 