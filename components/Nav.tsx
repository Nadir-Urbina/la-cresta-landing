'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRegister } from './RegisterContext';

const links = [
  ['#vision', 'La Visión'],
  ['#quienes', 'Quiénes Somos'],
  ['#conferencia', 'La Conferencia'],
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const open = useRegister();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${solid ? ' nav--solid' : ''}`}>
      <div className="nav__inner wrap">
        <a href="#top" className="nav__brand">
          <div className="nav__logomark">
            <Image
              src="/COTW Logo.png"
              alt="La Cresta de la Ola"
              width={34}
              height={34}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <span className="nav__name">
            La Cresta<em>de la Ola</em>
          </span>
        </a>

        <nav className="nav__links">
          {links.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <div className="nav__right">
<button className="btn btn-primary nav__cta" onClick={open}>
            Regístrate
          </button>
        </div>
      </div>
    </header>
  );
}
