import { DocumentProcessor } from '../lib/services/documentProcessor';
import { KnowledgeBaseGenerator } from '../lib/services/knowledgeBaseGenerator';
import { CurriculumGenerator } from '../lib/services/curriculumGenerator';
import { TestGenerator } from '../lib/services/testGenerator';

async function main() {
  try {
    const processor = new DocumentProcessor();
    const documents = await processor.processAllDocuments();

    const knowledgeBaseGen = new KnowledgeBaseGenerator();
    await knowledgeBaseGen.generateKnowledgeBase(documents);

    const curriculumGen = new CurriculumGenerator();
    await curriculumGen.generateCurriculum(documents);

    const testGen = new TestGenerator();
    await testGen.generateTests(documents);

    console.log('Zpracování dokumentů dokončeno');
  } catch (error) {
    console.error('Chyba při zpracování dokumentů:', error);
  }
}

main(); 