'use client';

import Image from 'next/image';
import { useRegister } from './RegisterContext';
import { Icons } from './Icons';

const PR_SCHEDULER_URL = 'https://pr-scheduler-silk.vercel.app/';

export function Hero() {
  const open = useRegister();

  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <Image
          src="/La Cresta de la Ola - Hero Banner.webp"
          alt="La Cresta de la Ola — Costa Rica"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className="hero__scrim" />
      <div className="hero__grad" />

      <div className="hero__inner wrap">
        <div className="hero__kick reveal in">
          <span className="kicker">Un mover de Dios para una nación</span>
        </div>

        <h1 className="hero__title reveal in">
          <span className="hero__l1">La Cresta</span>
          <span className="hero__l2"><em>de la</em> Ola</span>
        </h1>

        <div className="hero__meta reveal in d1">
          <span className="hero__cr">Costa Rica</span>
          <span className="hero__yr">2026</span>
        </div>

        <div className="hero__facts reveal in d2">
          <div className="hero__fact">
            <Icons.calendar width={20} height={20} />
            <span>Julio 9, 10 y 11</span>
          </div>
          <div className="hero__fact">
            <Icons.clock width={20} height={20} />
            <span>6:30 PM</span>
          </div>
          <div className="hero__fact">
            <Icons.pin width={20} height={20} />
            <span>Iglesia Senderos de Luz · Desamparados, San José</span>
          </div>
        </div>

        <div className="hero__cta reveal in d3">
          <button className="btn btn-primary" onClick={open}>
            Regístrate al Evento <Icons.arrow width={18} height={18} />
          </button>
          <a
            href={PR_SCHEDULER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Sesiones Proféticas Pre-Conferencia
          </a>
        </div>
      </div>

      <a href="#vision" className="hero__scroll" aria-label="Bajar">
        <span>Desliza</span>
        <i />
      </a>
    </section>
  );
}
