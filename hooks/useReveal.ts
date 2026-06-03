'use client';

import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const els = root.hasAttribute('data-reveal-root')
      ? [...root.querySelectorAll<HTMLElement>('.reveal')]
      : [root as HTMLElement];

    if (!els.length) return;

    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach((el) => {
        if (el.classList.contains('in')) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) el.classList.add('in');
      });
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(check);
    };

    requestAnimationFrame(() => requestAnimationFrame(check));
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    const t = setTimeout(() => els.forEach((el) => el.classList.add('in')), 2600);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);

  return ref;
}
