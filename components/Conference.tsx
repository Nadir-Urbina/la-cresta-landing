'use client';

import { useReveal } from '@/hooks/useReveal';
import { useRegister } from './RegisterContext';
import Image from 'next/image';
import { Icons } from './Icons';

const speakers = [
  {
    id: 'speaker-joshua',
    role: 'Organiza',
    name: 'Dr. Joshua Todd',
    ministry: 'Joshua Todd Ministries',
    photo: '/drJTcotwpic.jpg',
    extra: 'East Gate Jacksonville · Senior Leader',
    links: [
      { icon: 'globe2' as const, label: 'drjoshuatodd.com', href: 'https://www.drjoshuatodd.com' },
      { icon: 'facebook' as const, label: 'Facebook', href: 'https://www.facebook.com/jtodd07' },
    ],
  },
  {
    id: 'speaker-wayland',
    role: 'Conferencista Invitado',
    name: 'Dr. Wayland Henderson',
    ministry: 'The Gathering Kingdom Center',
    photo: '/dwaycotwpic.jpg',
    extra: undefined,
    links: [
      { icon: 'facebook' as const, label: 'Facebook', href: 'https://www.facebook.com/wayland.henderson.532553' },
      { icon: 'instagram' as const, label: 'Instagram', href: 'https://www.instagram.com/the_gathering_kingdom_center' },
    ],
  },
];

export function Conference() {
  const ref = useReveal();
  const open = useRegister();

  return (
    <div ref={ref} data-reveal-root="" className="section conf" id="conferencia">
      <div className="wrap">
        <div className="conf__head reveal">
          <span className="kicker">
            La Conferencia
          </span>
          <h2>Tres noches.<br />Una sola corriente.</h2>
        </div>

        <div className="conf__grid">
          <div className="conf__card reveal d1">
            <div className="conf__rows">
              <div className="conf__row">
                <span className="conf__ico"><Icons.calendar width={22} height={22} /></span>
                <div>
                  <strong>Jueves 9, Viernes 10 y Sábado 11</strong>
                  <em>de Julio de 2026</em>
                </div>
              </div>
              <div className="conf__row">
                <span className="conf__ico"><Icons.clock width={22} height={22} /></span>
                <div>
                  <strong>6:30 PM</strong>
                  <em>Cada noche · puertas abiertas 6:00 PM</em>
                </div>
              </div>
              <div className="conf__row">
                <span className="conf__ico"><Icons.pin width={22} height={22} /></span>
                <div>
                  <strong>Iglesia Senderos de Luz</strong>
                  <em>Desamparados, San José, Costa Rica</em>
                </div>
              </div>
            </div>
            <span className="conf__free">
              <Icons.ticket width={18} height={18} /> Entrada Gratuita · Free Admission
            </span>
            <button className="btn btn-primary btn-block" onClick={open}>
              Regístrate al Evento <Icons.arrow width={18} height={18} />
            </button>
          </div>

          <div className="conf__map reveal d2">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=Iglesia+Senderos+de+Luz,Desamparados,San+Jose,Costa+Rica&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del evento"
            />
          </div>
        </div>

        <div className="conf__speakers reveal d1">
          <div className="conf__spk-grid">
            {speakers.map(({ id, role, name, ministry, extra, photo, links }) => (
              <div className="spk" key={id}>
                <div className="spk__photo" style={{ position: 'relative', overflow: 'hidden' }}>
                  <Image
                    src={photo}
                    alt={name}
                    width={90}
                    height={90}
                    style={{ objectFit: 'cover', objectPosition: 'center top', borderRadius: 2 }}
                  />
                </div>
                <div className="spk__meta">
                  <span className="spk__role">{role}</span>
                  <h4>{name}</h4>
                  <span className="spk__ministry">{ministry}</span>
                  {extra && <span className="spk__ministry">{extra}</span>}
                  <div className="spk__links">
                    {links.map(({ icon, label, href }) => {
                      const Ic = Icons[icon];
                      return (
                        <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="spk__link">
                          <Ic width={14} height={14} /> {label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
