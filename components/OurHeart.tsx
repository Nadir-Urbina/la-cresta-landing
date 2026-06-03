'use client';

import { useReveal } from '@/hooks/useReveal';

const goals = [
  'Huérfanos llegando a la casa del Padre',
  'Libertar al cautivo de adicciones, cadenas y demonios que le atormentan',
  'Familias restauradas',
  'Reconciliación en el hogar',
  'Transformacion en toda Costa Rica, gobierno, deportes, entretenimiento — no solo dentro de la iglesia',
];

export function OurHeart() {
  const ref = useReveal();

  return (
    <div ref={ref} data-reveal-root="" className="section heart" id="anhelo">
      <div className="wrap">
        <span className="kicker reveal">
          Nuestro Anhelo
        </span>
        <h2 className="heart__statement reveal d1">
          Queremos ver a<br /><span className="heart__hl">Costa Rica inundada por esta Ola.</span>
        </h2>
        <ul className="heart__list">
          {goals.map((g, i) => (
            <li className={`heart__item reveal d${Math.min(i + 1, 4)}`} key={i}>
              <span className="heart__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="heart__txt">{g}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
