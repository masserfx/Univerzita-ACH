import React from 'react';

type Module = {
  id: number;
  title: string;
  description: string;
  duration: number;
  order: number;
  curriculumId: number;
};

type ModuleCardProps = {
  module: Module;
  onRefresh: () => void;
};

export const ModuleCard: React.FC<ModuleCardProps> = ({ module, onRefresh }) => {
  const handleDelete = async () => {
    if (!confirm('Opravdu chcete smazat tento modul?')) return;

    try {
      const response = await fetch(`/api/modules/${module.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      onRefresh();
    } catch (error) {
      console.error('Chyba při mazání modulu:', error);
      alert('Nepodařilo se smazat modul');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{module.title}</h3>
          <p className="text-gray-600 mt-1">{module.description}</p>
          <div className="mt-2 text-sm text-gray-500">
            <span>Délka: {module.duration} minut</span>
            <span className="mx-2">•</span>
            <span>Pořadí: {module.order}</span>
          </div>
        </div>
        <button
          onClick={handleDelete}
          className="text-red-600 hover:text-red-800"
        >
          Smazat
        </button>
      </div>
    </div>
  );
}; 