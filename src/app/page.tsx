'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Course, courses } from '@/data/courses';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [allCourses, setAllCourses] = useState<Course[]>([]);

  useEffect(() => {
    try {
      setAllCourses(courses);
    } catch (err) {
      setError('Nepodařilo se načíst kurzy. Zkuste to prosím později.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Vítejte v AC Heating Univerzitě
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Vzdělávací platforma pro profesionály v oblasti tepelných čerpadel
            </p>
            <Link
              href="/kurzy"
              className="inline-block bg-ach-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Prozkoumat kurzy
            </Link>
          </div>
        </div>
      </div>

      {/* All Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Dostupné kurzy</h2>
        
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ach-blue mx-auto"></div>
              <p className="mt-4 text-gray-600">Načítání kurzů...</p>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">{error}</p>
          </div>
        ) : allCourses.length === 0 ? (
          <p className="text-gray-600 text-center py-8">
            Momentálně nejsou k dispozici žádné kurzy.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course) => (
              <Link
                key={course.id}
                href={`/kurzy/${course.id}`}
                className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      course.level === 'beginner' ? 'bg-green-100 text-green-800' :
                      course.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {course.level === 'beginner' ? 'Základní' :
                       course.level === 'intermediate' ? 'Pokročilý' :
                       'Expert'}
                    </span>
                    <span className="text-sm text-gray-500">{course.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {course.tags?.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}