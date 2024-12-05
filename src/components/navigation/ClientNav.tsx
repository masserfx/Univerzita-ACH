'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ClientNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '/kurzy', label: 'Kurzy' },
    { href: '/kurzy/uvod-do-ac-heating', label: 'Základní kurz' },
    { href: '/kurzy/pokrocile-funkce', label: 'Pokročilé funkce' },
    { href: '/kurzy/instalace-tepelnych-cerpadel', label: 'Instalace' },
    { href: '/testy', label: 'Certifikace' },
    { href: '/profil', label: 'Můj profil' },
  ];

  return (
    <>
      {/* Mobilní menu tlačítko */}
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
        >
          <span className="sr-only">Otevřít hlavní menu</span>
          {!isOpen ? (
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex md:items-center md:space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-gray-700 hover:text-ach-blue px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobilní menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-ach-blue px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
} 