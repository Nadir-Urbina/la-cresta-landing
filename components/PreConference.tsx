'use client';

import Image from 'next/image';
import { useReveal } from '@/hooks/useReveal';
import { Icons } from './Icons';

const PR_SCHEDULER_URL = 'https://pr-scheduler-silk.vercel.app/';

export function PreConference() {
  const ref = useReveal();

  return (
    <div ref={ref} data-reveal-root="" className="section pre" id="profeticas">
      <div className="wrap pre__inner">
        <div className="pre__copy">
          <span className="kicker reveal">
            Pre-Conferencia
          </span>
          <h2 className="reveal d1">Sesiones Proféticas<br />Pre-Conferencia.</h2>
          <p className="reveal d2">
            Antes de que comience la conferencia, abrimos espacios para{' '}
            <strong>ministración profética personal y familiar</strong>. No es una multitud. Es tú, los tuyos, y una palabra dada por el Espíritu para tu casa.
          </p>
          <ul className="pre__points reveal d2">
            <li><Icons.church width={18} height={18} /> Sesiones personales o familiares</li>
            <li><Icons.wave width={18} height={18} /> Cupo limitado · requiere reserva</li>
          </ul>
          <a
            href={PR_SCHEDULER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary reveal d3"
          >
            Reservar una Sesión Profética <Icons.arrow width={18} height={18} />
          </a>
        </div>

        <div className="pre__art reveal d2">
          <div className="pre__ring" />
          <div className="pre__ring pre__ring--2" />
          <div className="pre__img">
            <Image
              src="/cotw pr.jpg"
              alt="Sesiones proféticas — ministración personal"
              fill
              sizes="(min-width: 860px) 37vw, 78vw"
              style={{ objectFit: 'cover', objectPosition: 'center', borderRadius: 2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
