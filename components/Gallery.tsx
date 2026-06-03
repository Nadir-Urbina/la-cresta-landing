'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { Icons } from './Icons';

const images = [
  '/gallery/20221104_231130.jpg',
  '/gallery/PHOTO-2022-11-04-10-16-29.jpg',
  '/gallery/20221105_160527.jpg',
  '/gallery/20221105_182732.jpg',
  '/gallery/20231116_185231.jpg',
  '/gallery/20231118_203508.jpg',
  '/gallery/20231118_221354.jpg',
  '/gallery/20240712_162252.jpg',
  '/gallery/20240712_165809.jpg',
  '/gallery/20240712_204013.jpg',
  '/gallery/20240713_154651.jpg',
  '/gallery/20240713_210749.jpg',
  '/gallery/20240714_103321.jpg',
  '/gallery/20250710_190519.jpg',
  '/gallery/20250710_191912.jpg',
  '/gallery/20250710_193053.jpg',
  '/gallery/20250710_193446.jpg',
  '/gallery/20250710_194519.jpg',
  '/gallery/20250710_195036.jpg',
  '/gallery/20250710_195448.jpg',
  '/gallery/20250711_185858.jpg',
  '/gallery/20250711_185911.jpg',
  '/gallery/20250711_210408.jpg',
  '/gallery/20250712_192326.jpg',
  '/gallery/20250712_195709.jpg',
  '/gallery/PHOTO-2025-03-17-11-58-53.jpg',
  '/gallery/PHOTO-2025-07-11-10-33-33.jpg',
  '/gallery/20260501_201721.jpg',
  '/gallery/20260502_125935.jpg',
  '/gallery/20260502_164012.jpg',
];

const SCROLL_AMOUNT = 308 * 3; // ~3 columns per click

export function Gallery() {
  const ref = useReveal();
  const viewport = useRef<HTMLDivElement>(null);

  function scroll(dir: 'prev' | 'next') {
    viewport.current?.scrollBy({
      left: dir === 'next' ? SCROLL_AMOUNT : -SCROLL_AMOUNT,
      behavior: 'smooth',
    });
  }

  return (
    <div ref={ref} data-reveal-root="" className="section gallery" id="galeria">
      <div className="wrap">
        <div className="gallery__head reveal">
          <span className="kicker">
            Galería
          </span>
          <h2>Eventos pasados.</h2>
        </div>

        <div className="gallery__reel reveal d1">
          <button
            className="gallery__btn gallery__btn--prev"
            onClick={() => scroll('prev')}
            aria-label="Anterior"
          >
            <Icons.arrow width={20} height={20} style={{ transform: 'rotate(180deg)' }} />
          </button>

          <div className="gallery__viewport" ref={viewport}>
            <div className="gallery__track">
              {images.map((src, i) => (
                <div className="gallery__item" key={i} style={{ position: 'relative' }}>
                  <Image
                    src={src}
                    alt={`Encuentro pasado — foto ${i + 1}`}
                    fill
                    sizes="300px"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            className="gallery__btn gallery__btn--next"
            onClick={() => scroll('next')}
            aria-label="Siguiente"
          >
            <Icons.arrow width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
