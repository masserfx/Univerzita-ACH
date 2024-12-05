import { PrismaClient } from '@prisma/client';
import { DocumentData } from './documentProcessor';

export class CurriculumGenerator {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async generateCurriculum(documents: DocumentData[]) {
    const categorizedContent = this.categorizeContent(documents);
    
    for (const [category, content] of Object.entries(categorizedContent)) {
      const modules = this.createModules(content);
      
      await this.prisma.curriculum.create({
        data: {
          category,
          modules: {
            create: modules.map(module => ({
              title: module.title,
              description: module.description,
              duration: module.duration,
              order: module.order,
              lessons: {
                create: module.lessons
              }
            }))
          }
        }
      });
    }
  }

  private categorizeContent(documents: DocumentData[]) {
    const categories: Record<string, DocumentData[]> = {};
    
    for (const doc of documents) {
      if (!categories[doc.category]) {
        categories[doc.category] = [];
      }
      categories[doc.category].push(doc);
    }
    
    return categories;
  }

  private createModules(documents: DocumentData[]) {
    // Logika pro vytvoření modulů z dokumentů
    return documents.map((doc, index) => ({
      title: this.generateModuleTitle(doc),
      description: this.generateModuleDescription(doc),
      duration: this.estimateDuration(doc),
      order: index + 1,
      lessons: this.generateLessons(doc)
    }));
  }

  // Pomocné metody pro generování obsahu
  private generateModuleTitle(doc: DocumentData) {
    return doc.title.split('-')[0].trim();
  }

  private generateModuleDescription(doc: DocumentData) {
    // Extrahuje první odstavec jako popis
    return doc.content.split('\n')[0];
  }

  private estimateDuration(doc: DocumentData) {
    // Odhad délky studia based na délce obsahu
    const wordsPerMinute = 200;
    const words = doc.content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  }

  private generateLessons(doc: DocumentData) {
    // Rozdělí obsah na lekce
    const sections = doc.content.split(/#{2,3}\s+/);
    return sections.map((section, index) => ({
      title: this.extractTitle(section),
      content: section,
      order: index + 1,
      duration: this.estimateDuration({ ...doc, content: section })
    }));
  }

  private extractTitle(section: string) {
    return section.split('\n')[0].trim();
  }
} 