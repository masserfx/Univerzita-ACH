import { DocumentData } from './documentProcessor';
import { PrismaClient } from '@prisma/client';

export class KnowledgeBaseGenerator {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async generateKnowledgeBase(documents: DocumentData[]) {
    for (const doc of documents) {
      // Rozdělení obsahu na menší části pro lepší zpracování
      const sections = this.splitIntoSections(doc.content);
      
      // Vytvoření znalostní báze pro každou sekci
      for (const section of sections) {
        await this.prisma.knowledgeBase.create({
          data: {
            title: doc.title,
            category: doc.category,
            content: section,
            sourcePath: doc.path,
            keywords: this.extractKeywords(section),
          }
        });
      }
    }
  }

  private splitIntoSections(content: string): string[] {
    // Implementace rozdělení obsahu na logické sekce
    return content.split(/\n{2,}/);
  }

  private extractKeywords(text: string): string[] {
    // Jednoduchá implementace extrakce klíčových slov
    const words = text.toLowerCase().split(/\W+/);
    const stopWords = new Set(['a', 'an', 'the', 'v', 'na', 'pro', 'je', 'se', 'si']);
    return [...new Set(words.filter(w => w.length > 3 && !stopWords.has(w)))];
  }
} 