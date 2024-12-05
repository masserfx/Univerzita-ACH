import { PDFDocument } from 'pdf-lib';
import * as fs from 'fs/promises';
import path from 'path';

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
    const pdfBytes = await fs.readFile(filePath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pages = pdfDoc.getPages();
    
    let content = '';
    for (const page of pages) {
      const text = await page.getText();
      content += text + '\n';
    }
    
    return content;
  }
}

export interface DocumentData {
  title: string;
  category: string;
  content: string;
  path: string;
  createdAt: Date;
} 