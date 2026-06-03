'use client';

import { useReveal } from '@/hooks/useReveal';
import { Icons } from './Icons';
import { ImageSlot } from './ImageSlot';

const videos = [
  { id: 'video-1', label: 'Testimonio — sanidad' },
  { id: 'video-2', label: 'Testimonio — restauración' },
];

const cards = [
  { quote: 'Una palabra cambió el rumbo de mi familia. Salimos de esa sesión siendo otras personas.', name: 'María F.', city: 'Alajuela, Costa Rica' },
  { quote: 'Vine arrastrando una adicción de doce años. Esa noche la dejé en el altar y nunca volvió.', name: 'Kevin R.', city: 'San José, Costa Rica' },
  { quote: 'Viajo desde Texas cada año. Lo que Dios hace en esta tierra no se puede explicar, solo presenciar.', name: 'David & Anne', city: 'Houston, EE.UU.' },
  { quote: 'Mi matrimonio estaba terminado. Hoy servimos juntos en la iglesia. Él lo restauró todo.', name: 'Jocelyn M.', city: 'Cartago, Costa Rica' },
];

export function Testimonials() {
  const ref = useReveal();

  return (
    <div ref={ref} data-reveal-root="" className="section test" id="testimonios">
      <div className="wrap">
        <div className="test__head reveal">
          <span className="kicker">
            Lo que Dios ha hecho
          </span>
          <h2>Testimonios</h2>
        </div>

        <div className="test__videos">
          {videos.map(({ id, label }, i) => (
            <div className={`test__vid reveal d${i + 1}`} key={id}>
              <ImageSlot label={`${label} — embed de YouTube`} />
              <button className="test__play" aria-label="Reproducir">
                <Icons.play width={26} height={26} />
              </button>
            </div>
          ))}
        </div>

        <div className="test__cards">
          {cards.map(({ quote, name, city }, i) => (
            <figure className={`tcard reveal d${Math.min(i + 1, 4)}`} key={i}>
              <span className="tcard__q"><Icons.quote width={30} height={24} /></span>
              <blockquote>{quote}</blockquote>
              <figcaption>
                <strong>{name}</strong>
                <span>{city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
