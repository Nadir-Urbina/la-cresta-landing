'use client';

import { useReveal } from '@/hooks/useReveal';
import { WaveCrest } from './WaveCrest';

export function Vision() {
  const ref = useReveal();

  return (
    <div ref={ref} data-reveal-root="" className="section vision" id="vision">
      <div className="vision__texture" />
      <div className="wrap vision__inner">
        <div className="vision__copy">
          <span className="kicker reveal">
            La Visión
          </span>
          <h2 className="vision__title reveal d1">Una ola que empezó<br />en el sur.</h2>
          <div className="vision__body reveal d2">
            <p>
              Comenzó en <strong>Argentina</strong>. Una ola que nadie convocó, que se formó en lo profundo y empezó a moverse hacia el norte. Cruzó <strong>Brasil</strong>, ganó altura sobre el continente, y vino a romper — a <em>crestar</em> — sobre <strong>Costa Rica</strong>.
            </p>
            <p>
              En la cresta había un <strong>rugido</strong>: el rugido del León de la tribu de Judá. Y dentro de la ola, peces de muchos colores — las naciones — congregadas en la nación para recibir el impacto de la ola y llevarlo a sus hogares.
            </p>
            <p className="vision__verse">
              «El león ha rugido, ¿quién no temerá?»
              <span className="vision__cite">Amós 3:8</span>
            </p>
          </div>
        </div>

        <div className="vision__visual reveal d2">
          <WaveCrest />
        </div>
      </div>
    </div>
  );
}
