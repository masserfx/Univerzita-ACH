import { PDFDocument } from 'pdf-lib';
import * as fs from 'fs/promises';
import path from 'path';
import pdfjsLib from 'pdfjs-dist';

export class DocumentProcessor {
  private documentsPath: string;

  constructor() {
    this.documentsPath = path.join(process.cwd(), 'public', 'documents');
  }

  async processAllDocuments() {
    const categories = await fs.readdir(this.documentsPath);
    const documents: DocumentData[] = [];

    for (const category of categories) {
      const categoryPath = path.join(this.documentsPath, category);
      const stats = await fs.stat(categoryPath);
      
      if (stats.isDirectory()) {
        const files = await fs.readdir(categoryPath);
        for (const file of files) {
          if (file.endsWith('.pdf')) {
            const content = await this.extractPDFContent(path.join(categoryPath, file));
            documents.push({
              title: file.replace('.pdf', ''),
              category,
              content,
              path: `/documents/${category}/${file}`,
              createdAt: new Date(),
            });
          }
        }
      }
    }

    return documents;
  }

  private async extractPDFContent(filePath: string): Promise<string> {
    try {
      const data = await fs.readFile(filePath);
      const loadingTask = pdfjsLib.getDocument({ data });
      const pdf = await loadingTask.promise;
      
      let content = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        content += textContent.items
          .map((item: any) => item.str)
          .join(' ') + '\n';
      }
      
      return content;
    } catch (error) {
      console.error('Chyba při extrakci textu z PDF:', error);
      return `Nepodařilo se extrahovat text z PDF: ${filePath}`;
    }
  }
}

export interface DocumentData {
  title: string;
  category: string;
  content: string;
  path: string;
  createdAt: Date;
} 