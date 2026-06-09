'use client';

import { useState } from 'react';
import { track } from '@vercel/analytics';
import { Icons } from './Icons';

interface FormValues {
  nombre: string;
  telefono: string;
  email: string;
  acepta: boolean;
}

interface FormErrors {
  nombre?: string;
  telefono?: string;
  email?: string;
  acepta?: string;
}

function validate(v: FormValues): FormErrors {
  const e: FormErrors = {};
  if (!v.nombre.trim() || v.nombre.trim().length < 2) e.nombre = 'Ingresa tu nombre completo.';
  const phone = v.telefono.replace(/[\s\-()]/g, '');
  if (phone && !/^\+?\d{8,15}$/.test(phone)) e.telefono = 'Número inválido (8–15 dígitos).';
  if (!v.email.trim()) e.email = 'Ingresa tu correo electrónico.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Correo electrónico inválido.';
  if (!v.acepta) e.acepta = 'Confirma para continuar.';
  return e;
}

function Field({ label, hint, error, children }: { label: string; hint?: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="fld">
      <span className="fld__label">
        {label}
        {hint && <em className="fld__hint">{hint}</em>}
      </span>
      {children}
      <span className={`fld__err${error ? ' show' : ''}`}>{error || ' '}</span>
    </label>
  );
}

interface Props {
  onClose?: () => void;
  source?: 'modal' | 'page';
}

export function RegistrationForm({ onClose, source = 'page' }: Props) {
  const empty: FormValues = { nombre: '', telefono: '', email: '', acepta: false };

  const [v, setV] = useState<FormValues>(empty);
  const [err, setErr] = useState<FormErrors>({});
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  function set<K extends keyof FormValues>(k: K, val: FormValues[K]) {
    const next = { ...v, [k]: val };
    setV(next);
    if (touched) setErr(validate(next));
  }

  async function submit(ev: React.FormEvent) {
    ev.preventDefault();
    track('Completar Registro', { source });
    setTouched(true);
    const e = validate(v);
    setErr(e);
    if (Object.keys(e).length !== 0) return;

    setLoading(true);
    try {
      await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre: v.nombre, email: v.email, telefono: v.telefono }),
      });
    } catch {
      // fail silently — registration UX still completes
    } finally {
      setLoading(false);
      setDone(true);
    }
  }

  const firstName = v.nombre.split(' ')[0] || 'hermano';

  if (done) {
    return (
      <div className="modal__done">
        <div className="modal__seal"><Icons.check width={40} height={40} /></div>
        <span className="kicker" style={{ justifyContent: 'center' }}>Registro confirmado</span>
        <h3>Gracias, {firstName}.</h3>
        <p className="modal__sub" style={{ textAlign: 'center', margin: '0 auto' }}>
          Te esperamos en <strong>Senderos de Luz</strong> los días 9, 10 y 11 de julio.{' '}
          Recibirás la confirmación en <strong>{v.email}</strong>.
        </p>
        <p className="modal__verse">«Y vi como un mar de vidrio mezclado con fuego.»</p>
        {onClose && (
          <button className="btn btn-ghost btn-block" onClick={onClose}>Cerrar</button>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="modal__head">
        <span className="kicker">Registro al Evento</span>
        <h3>La Cresta de la Ola · 2026</h3>
        <p className="modal__sub">
          Julio 9, 10 y 11 · 6:30 PM · Iglesia Senderos de Luz, Desamparados. Entrada gratuita.
        </p>
      </div>

      <form className="modal__form" onSubmit={submit} noValidate>
        <Field label="Nombre completo" error={err.nombre}>
          <input
            className={`inp${err.nombre ? ' inp--err' : ''}`}
            type="text"
            value={v.nombre}
            placeholder="Tu nombre"
            autoComplete="name"
            onChange={(e) => set('nombre', e.target.value)}
          />
        </Field>

        <div className="modal__row">
          <Field label="Teléfono" hint="WhatsApp" error={err.telefono}>
            <input
              className={`inp${err.telefono ? ' inp--err' : ''}`}
              type="tel"
              value={v.telefono}
              placeholder="+506 0000 0000"
              autoComplete="tel"
              onChange={(e) => set('telefono', e.target.value)}
            />
          </Field>
          <Field label="Correo electrónico" error={err.email}>
            <input
              className={`inp${err.email ? ' inp--err' : ''}`}
              type="email"
              value={v.email}
              placeholder="tucorreo@ejemplo.com"
              autoComplete="email"
              onChange={(e) => set('email', e.target.value)}
            />
          </Field>
        </div>

        <label className="chk">
          <input
            type="checkbox"
            checked={v.acepta}
            onChange={(e) => set('acepta', e.target.checked)}
          />
          <span className={`chk__box${v.acepta ? ' chk__box--checked' : ''}${err.acepta ? ' chk__box--err' : ''}`}>
            {v.acepta && <Icons.check width={14} height={14} />}
          </span>
          <span className="chk__txt">Acepto recibir información del evento por WhatsApp y correo.</span>
        </label>

        <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: 6 }} disabled={loading}>
          {loading ? 'Enviando…' : 'Completar registro'}{' '}
          {!loading && <Icons.arrow width={18} height={18} />}
        </button>
        <p className="modal__fine">Sin costo. Tus datos solo se usan para coordinar tu asistencia.</p>
      </form>
    </>
  );
}
