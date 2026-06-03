'use client';

import { useEffect } from 'react';
import { Icons } from './Icons';
import { RegistrationForm } from './RegistrationForm';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function RegistrationModal({ open, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal__card">
        <button className="modal__x" onClick={onClose} aria-label="Cerrar">
          <Icons.close width={22} height={22} />
        </button>
        <RegistrationForm onClose={onClose} />
      </div>
    </div>
  );
}
