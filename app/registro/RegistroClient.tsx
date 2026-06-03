'use client';

import Link from 'next/link';
import { RegistrationForm } from '@/components/RegistrationForm';

export function RegistroClient() {
  return (
    <div className="registro-page">
      <div className="registro-page__bg" />

      <header className="registro-page__nav wrap">
        <Link href="/" className="nav__brand">
          <span className="nav__name">La Cresta<em>de la Ola</em></span>
        </Link>
        <Link href="/" className="btn btn-ghost" style={{ fontSize: 12, padding: '9px 16px' }}>
          ← Volver al inicio
        </Link>
      </header>

      <main className="registro-page__main wrap">
        <div className="registro-page__card">
          <RegistrationForm />
        </div>
      </main>

      <footer className="registro-page__foot wrap">
        <span>© 2026 La Cresta de la Ola · Iglesia Senderos de Luz, Desamparados, San José</span>
      </footer>
    </div>
  );
}
