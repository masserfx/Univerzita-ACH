'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { ModuleCard } from '@/components/modules/ModuleCard';
import { AddModuleForm } from '@/components/modules/AddModuleForm';

type Module = {
  id: number;
  title: string;
  description: string;
  duration: number;
  order: number;
  curriculumId: number;
};

export default function AdminModulesPage() {
  const [modules, setModules] = useState<Module[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchModules();
  }, []);

  const fetchModules = async () => {
    try {
      const response = await fetch('/api/modules');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setModules(data);
    } catch (err) {
      setError(`Chyba při načítání modulů: ${err instanceof Error ? err.message : 'Neznámá chyba'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Správa modulů</h1>
      
      {isLoading && <div>Načítání...</div>}
      {error && <div className="text-red-500">{error}</div>}
      
      <div className="grid gap-4">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} onRefresh={fetchModules} />
        ))}
      </div>
      
      <AddModuleForm onSuccess={fetchModules} />
    </div>
  );
} 