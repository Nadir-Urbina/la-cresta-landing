'use client';

import Image from 'next/image';

export function WaveCrest() {
  return (
    <div className="wavecrest" aria-label="Ilustración: ola con león">
      <div className="wavecrest__glow" />
      <div className="wavecrest__lion">
        <Image
          src="/COTW Lion Face.jpg"
          alt="León — La Cresta de la Ola"
          fill
          sizes="(min-width: 860px) 25vw, 56vw"
          style={{ objectFit: 'cover', objectPosition: 'center top', mixBlendMode: 'luminosity', opacity: 0.9 }}
        />
      </div>

      <svg className="wavecrest__svg" viewBox="0 0 1200 420" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wv1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#1c4a5e" />
            <stop offset="1" stopColor="#0c2230" />
          </linearGradient>
          <linearGradient id="wv2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#2a6f86" />
            <stop offset="1" stopColor="#123243" />
          </linearGradient>
          <linearGradient id="wvgold" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="rgba(212,175,55,0)" />
            <stop offset="0.5" stopColor="rgba(212,175,55,0.85)" />
            <stop offset="1" stopColor="rgba(212,175,55,0)" />
          </linearGradient>
        </defs>

        <g className="wv wv--back">
          <path fill="url(#wv1)" d="M-200 260 C 100 200 260 320 520 260 C 760 205 900 300 1200 250 C 1340 226 1500 280 1700 250 L1700 460 L-200 460 Z" />
        </g>
        <g className="wv wv--mid">
          <path fill="url(#wv2)" d="M-200 300 C 120 250 280 360 540 300 C 800 245 940 350 1200 300 C 1360 270 1520 330 1700 300 L1700 460 L-200 460 Z" />
        </g>
        <path
          className="wv wv--crest"
          fill="none"
          stroke="url(#wvgold)"
          strokeWidth="2.5"
          d="M-200 300 C 120 250 280 360 540 300 C 800 245 940 350 1200 300 C 1360 270 1520 330 1700 300"
        />
        <g className="wv wv--front">
          <path fill="#0a1622" d="M-200 350 C 140 312 300 392 560 350 C 820 305 980 392 1240 350 C 1380 327 1540 372 1700 350 L1700 460 L-200 460 Z" />
        </g>
      </svg>
    </div>
  );
}
