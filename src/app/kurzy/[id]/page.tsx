'use client';

import { useEffect, useState } from 'react';
import { Course, courses } from '@/data/courses';
import { CourseView } from '@/components/courses/CourseView';

interface Props {
  params: {
    id: string;
  };
}

export default function CoursePage({ params }: Props) {
  const [course, setCourse] = useState<Course | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const foundCourse = courses.find((c) => c.id === params.id);
      if (foundCourse) {
        setCourse(foundCourse);
      } else {
        setError('Kurz nebyl nalezen');
      }
    } catch (err) {
      setError('Nepodařilo se načíst kurz');
    } finally {
      setIsLoading(false);
    }
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ach-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Načítání kurzu...</p>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 text-xl">{error || 'Kurz nebyl nalezen'}</p>
        </div>
      </div>
    );
  }

  return <CourseView course={course} />;
} 