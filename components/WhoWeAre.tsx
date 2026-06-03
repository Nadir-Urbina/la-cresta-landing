'use client';

import { useReveal } from '@/hooks/useReveal';
import { Icons } from './Icons';

const items = [
  { Icon: Icons.globe, title: 'Misioneros de varias naciones', desc: 'EE.UU., Latinoamerica, y Australia.' },
  { Icon: Icons.church, title: 'Al servicio de iglesias locales', desc: 'No para reemplazarlas — para servirlas.' },
  { Icon: Icons.wave, title: 'Un movimiento profético', desc: 'Respondiendo a un llamado, no a una marca.' },
  { Icon: Icons.drop, title: 'Un encuentro anual', desc: 'Cada año regresamos a esta tierra.' },
];

export function WhoWeAre() {
  const ref = useReveal();

  return (
    <div ref={ref} data-reveal-root="" className="section who" id="quienes">
      <div className="wrap who__grid">
        <div className="who__left">
          <span className="kicker reveal">
            Quiénes Somos
          </span>
          <h2 className="reveal d1">No somos un<br />ministerio local.</h2>
          <p className="who__lead reveal d2">
            Somos un equipo misionero global. Hombres y mujeres de diferentes partes del mundo que{' '}
            <strong>creen en el destino de la nación de Costa Rica</strong> y ponerse al servicio de las iglesias locales.
          </p>
          <p className="who__lead reveal d2">
            No venimos a construir nuestro nombre. Venimos a empujar la ola.
          </p>
        </div>

        <div className="who__right">
          {items.map(({ Icon, title, desc }, i) => (
            <div className={`who__cell reveal d${i + 1}`} key={title}>
              <span className="who__ico"><Icon width={30} height={30} /></span>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
