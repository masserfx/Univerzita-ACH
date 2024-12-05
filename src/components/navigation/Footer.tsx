'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-300">AC Heating</p>
            <p className="text-gray-300">info@ac-heating.cz</p>
            <p className="text-gray-300">+420 xxx xxx xxx</p>
          </div>

          {/* Rychlé odkazy */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kurzy" className="text-gray-300 hover:text-white transition-colors">
                  Kurzy
                </Link>
              </li>
              <li>
                <Link href="/testy" className="text-gray-300 hover:text-white transition-colors">
                  Testy
                </Link>
              </li>
              <li>
                <Link href="/profil" className="text-gray-300 hover:text-white transition-colors">
                  Můj profil
                </Link>
              </li>
            </ul>
          </div>

          {/* O nás */}
          <div>
            <h3 className="text-lg font-semibold mb-4">O AC Heating</h3>
            <p className="text-gray-300">
              Jsme přední výrobce tepelných čerpadel s dlouholetou tradicí. Naše vzdělávací platforma
              pomáhá našim zaměstnancům v profesním růstu.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} AC Heating. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
} 