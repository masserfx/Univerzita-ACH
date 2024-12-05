import { PrismaClient } from '@prisma/client';
import { DocumentData } from './documentProcessor';

export class TestGenerator {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async generateTests(documents: DocumentData[]) {
    for (const doc of documents) {
      const questions = this.generateQuestions(doc);
      
      await this.prisma.test.create({
        data: {
          title: `Test: ${doc.title}`,
          category: doc.category,
          questions: {
            create: questions
          }
        }
      });
    }
  }

  private generateQuestions(doc: DocumentData) {
    const sentences = this.extractSentences(doc.content);
    const questions: any[] = [];

    for (const sentence of sentences) {
      if (this.isSuitableForQuestion(sentence)) {
        const question = this.createQuestion(sentence);
        if (question) {
          questions.push(question);
        }
      }
    }

    return questions;
  }

  private extractSentences(text: string): string[] {
    return text.split(/[.!?]+/).filter(s => s.trim().length > 20);
  }

  private isSuitableForQuestion(sentence: string): boolean {
    // Kontrola, zda je věta vhodná pro vytvoření otázky
    return sentence.length > 30 && 
           /^[A-Z]/.test(sentence) && 
           !/^(Poznámka|Například|Pozor)/.test(sentence);
  }

  private createQuestion(sentence: string) {
    // Vytvoření otázky z věty
    const words = sentence.split(' ');
    const keywordIndex = this.findKeywordIndex(words);
    
    if (keywordIndex === -1) return null;

    const correctAnswer = words[keywordIndex];
    const question = [
      ...words.slice(0, keywordIndex),
      '_____',
      ...words.slice(keywordIndex + 1)
    ].join(' ');

    return {
      text: question,
      type: 'FILL_IN',
      correctAnswer,
      options: this.generateOptions(correctAnswer),
      explanation: sentence
    };
  }

  private findKeywordIndex(words: string[]): number {
    // Najde index klíčového slova pro vytvoření mezery
    return words.findIndex(word => 
      word.length > 4 && 
      /^[A-Z][a-z]+$/.test(word) &&
      !['Proto', 'Tento', 'Tato', 'Toto'].includes(word)
    );
  }

  private generateOptions(correctAnswer: string): string[] {
    // Generování dalších možností pro multiple choice
    // Toto by mělo být vylepšeno pomocí NLP nebo databáze souvisejících termínů
    return [
      correctAnswer,
      this.modifyWord(correctAnswer),
      this.reverseWord(correctAnswer),
      this.shuffleWord(correctAnswer)
    ];
  }

  private modifyWord(word: string): string {
    return word.charAt(0).toLowerCase() + word.slice(1) + 's';
  }

  private reverseWord(word: string): string {
    return word.split('').reverse().join('');
  }

  private shuffleWord(word: string): string {
    return word.split('').sort(() => Math.random() - 0.5).join('');
  }
} 