import * as fs from 'fs/promises';
import path from 'path';

async function backupDocuments() {
  try {
    const trainingPath = path.join(process.cwd(), 'public', 'documents', 'training');
    const backupPath = path.join(process.cwd(), 'public', 'documents', 'backup', 'training');
    
    // Vytvoření záložní složky
    await fs.mkdir(backupPath, { recursive: true });
    
    // Kopírování souborů
    const files = await fs.readdir(trainingPath);
    for (const file of files) {
      const sourcePath = path.join(trainingPath, file);
      const destPath = path.join(backupPath, file);
      await fs.copyFile(sourcePath, destPath);
    }
    
    console.log('Záloha dokumentů byla vytvořena v:', backupPath);
  } catch (error) {
    console.error('Chyba při vytváření zálohy:', error);
  }
}

backupDocuments(); 