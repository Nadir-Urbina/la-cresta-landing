'use client';

import { useReveal } from '@/hooks/useReveal';
import { track } from '@vercel/analytics';
import { useRegister } from './RegisterContext';
import { Icons } from './Icons';

export function JoinRemnant() {
  const ref = useReveal();
  const open = useRegister();

  return (
    <div ref={ref} data-reveal-root="" className="section join" id="remanente">
      <div className="join__bg" />
      <div className="wrap join__inner" style={{ margin: '0 auto' }}>
        <span className="kicker reveal" style={{ justifyContent: 'center' }}>
          Únete al Remanente
        </span>
        <h2 className="join__statement reveal d1">
          Dios no empieza con todos
          <span className="join__br">— pero los quiere a todos.</span>
        </h2>
        <p className="join__q reveal d2">¿Eres parte del remanente?</p>
        <button
          className="btn btn-primary join__btn reveal d3"
          onClick={() => { track('Registro CTA', { location: 'join' }); open(); }}
        >
          Quiero Unirme <Icons.arrow width={18} height={18} />
        </button>
      </div>
    </div>
  );
}
