'use client';

import { useState, useEffect } from 'react';
import { DOCUMENT_CATEGORIES } from '@/lib/documents/config';

export default function FileUpload() {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/documents/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Chyba při nahrávání');
      }

      setMessage('Soubor byl úspěšně nahrán');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Chyba při nahrávání');
    } finally {
      setUploading(false);
    }
  };

  if (!mounted) {
    return null; // Předejde problémům s hydratací
  }

  return (
    <form onSubmit={handleUpload} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Kategorie
          <select
            name="category"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-ach-blue focus:ring-ach-blue"
            required
          >
            {Object.entries(DOCUMENT_CATEGORIES).map(([key, value]) => (
              <option key={key} value={value}>
                {key}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Soubor
          <input
            type="file"
            name="file"
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-ach-blue file:text-white
              hover:file:bg-opacity-90"
            required
            accept=".pdf,.doc,.docx,.txt"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={uploading}
        className="w-full bg-ach-blue hover:bg-opacity-90 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50"
      >
        {uploading ? 'Nahrávání...' : 'Nahrát soubor'}
      </button>

      {message && (
        <p className={`mt-2 text-sm ${
          message.includes('Chyba') ? 'text-red-600' : 'text-green-600'
        }`}>
          {message}
        </p>
      )}
    </form>
  );
} 