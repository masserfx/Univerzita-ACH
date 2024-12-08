import { NextResponse } from 'next/server';
import type { Course } from '@/data/types';
import { allCourses } from '@/data/courses';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const course = allCourses.find(c => c.id === id);
    if (!course) {
      return new NextResponse('Course not found', { status: 404 });
    }
    return NextResponse.json(course);
  }

  return NextResponse.json(allCourses);
}

export async function POST(request: Request) {
  try {
    const course = await request.json();
    
    // Zde by byla validace a ukládání do databáze
    allCourses.push({
      ...course,
      id: course.id || Math.random().toString(36).substr(2, 9)
    });

    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    return new NextResponse('Invalid request', { status: 400 });
  }
} 