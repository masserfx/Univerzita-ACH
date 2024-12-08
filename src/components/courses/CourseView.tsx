'use client';

import React, { useState, useEffect, useRef } from 'react';
import type { Course } from '@/data/types';
import { marked } from 'marked';

interface CourseViewProps {
  course: Course;
}

export function CourseView({ course }: CourseViewProps) {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const currentModule = course.modules[currentModuleIndex];
  const moduleContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    moduleContentRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentModuleIndex]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hlavička kurzu */}
      <div className="bg-ach-blue text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <div className="flex items-center space-x-4 text-sm">
            <span className="px-3 py-1 bg-white/20 rounded-full">{course.level}</span>
            <span>{course.duration}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigace modulů */}
          <div className="lg:col-span-1">
            <div className="bg-ach-gray p-4 rounded-lg sticky top-4">
              <h2 className="font-semibold mb-4">Obsah kurzu</h2>
              <nav className="space-y-2">
                {course.modules.map((module, index) => (
                  <button
                    key={module.id}
                    onClick={() => setCurrentModuleIndex(index)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      index === currentModuleIndex
                        ? 'bg-ach-blue text-white'
                        : 'hover:bg-ach-gray'
                    }`}
                  >
                    {module.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Obsah modulu */}
          <div className="lg:col-span-3">
            <div ref={moduleContentRef} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">{currentModule.title}</h2>
              
              {/* Textový obsah */}
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: marked(currentModule.content) }}
              />

              {/* Navigační tlačítka */}
              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setCurrentModuleIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentModuleIndex === 0}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50"
                >
                  Předchozí modul
                </button>
                <button
                  onClick={() => setCurrentModuleIndex(prev => Math.min(course.modules.length - 1, prev + 1))}
                  disabled={currentModuleIndex === course.modules.length - 1}
                  className="px-4 py-2 bg-ach-blue text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  Další modul
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 