import * as fs from 'fs/promises';
import path from 'path';

async function listDocuments() {
  try {
    const trainingPath = path.join(process.cwd(), 'public', 'documents', 'training');
    const files = await fs.readdir(trainingPath, { withFileTypes: true });
    
    console.log('Nalezené dokumenty ve složce training:');
    for (const file of files) {
      if (file.isFile()) {
        const stats = await fs.stat(path.join(trainingPath, file.name));
        const fileExt = path.extname(file.name).toLowerCase();
        console.log(`- ${file.name} (${(stats.size / 1024).toFixed(2)} KB) [${fileExt}]`);
      }
    }
  } catch (error: unknown) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT') {
      console.error('Složka training nebyla nalezena. Vytvářím...');
      await fs.mkdir(path.join(process.cwd(), 'public', 'documents', 'training'), { recursive: true });
      console.log('Složka training byla vytvořena.');
    } else {
      console.error('Chyba při čtení dokumentů:', error);
    }
  }
}

listDocuments(); 