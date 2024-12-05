import { NextResponse } from 'next/server';
import type { Course } from '@/data/types';

// Toto je dočasná databáze kurzů, později bude nahrazena skutečnou databází
const courses: Course[] = [
  {
    id: 'uvod-do-ac-heating',
    title: 'Úvod do AC Heating',
    description: 'Základní kurz o tepelných čerpadlech AC Heating',
    duration: '2 hodiny',
    level: 'beginner',
    tags: ['tepelná čerpadla', 'základy', 'technologie'],
    modules: [
      {
        id: 'modul-1',
        title: 'Co je tepelné čerpadlo',
        content: `
# Co je tepelné čerpadlo

Tepelné čerpadlo je zařízení, které umožňuje přenos tepla z chladnějšího prostředí do teplejšího. 
Tento proces se může zdát v rozporu s přirozeným tokem tepla, ale je možný díky dodání externí energie.

## Princip fungování

Tepelné čerpadlo funguje na podobném principu jako chladnička, ale s opačným účelem:
- Odebírá teplo z venkovního prostředí (vzduch, země, voda)
- Pomocí komprese zvyšuje teplotu
- Předává teplo do vytápěného objektu

## Výhody tepelných čerpadel

1. Úspora energie
2. Ekologický provoz
3. Nízké provozní náklady
4. Komfortní vytápění`
      },
      {
        id: 'modul-2',
        title: 'Typy tepelných čerpadel',
        content: `
# Typy tepelných čerpadel

Existuje několik základních typů tepelných čerpadel podle zdroje tepla:

## Vzduch-voda
- Nejčastější typ v ČR
- Snadná instalace
- Celoroční provoz

## Země-voda
- Stabilní výkon
- Vyšší pořizovací náklady
- Potřeba pozemku

## Voda-voda
- Nejvyšší účinnost
- Náročné na zdroj vody
- Specifické požadavky na umístění`
      }
    ]
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const course = courses.find(c => c.id === id);
    if (!course) {
      return new NextResponse('Course not found', { status: 404 });
    }
    return NextResponse.json(course);
  }

  return NextResponse.json(courses);
}

export async function POST(request: Request) {
  try {
    const course = await request.json();
    
    // Zde by byla validace a ukládání do databáze
    courses.push({
      ...course,
      id: course.id || Math.random().toString(36).substr(2, 9)
    });

    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    return new NextResponse('Invalid request', { status: 400 });
  }
} 