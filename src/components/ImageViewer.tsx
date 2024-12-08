'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageViewerProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageViewer({ src, alt, caption }: ImageViewerProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="my-4">
      <div 
        className={`relative ${isZoomed ? 'fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center' : ''}`}
        onClick={() => setIsZoomed(false)}
      >
        <div className={`relative ${isZoomed ? 'max-w-4xl w-full mx-4' : 'w-full'}`}>
          <Image
            src={src}
            alt={alt}
            width={isZoomed ? 1200 : 800}
            height={isZoomed ? 800 : 600}
            className={`rounded-lg shadow-lg cursor-pointer ${isZoomed ? 'max-h-[90vh] object-contain' : 'w-full'}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(!isZoomed);
            }}
            priority
          />
        </div>
      </div>
      {caption && (
        <p className="text-sm text-gray-600 mt-2 text-center italic">{caption}</p>
      )}
    </div>
  );
} 