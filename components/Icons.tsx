import { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;

export const Icons = {
  globe: (p: P) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <circle cx="16" cy="16" r="12" />
      <ellipse cx="16" cy="16" rx="5" ry="12" />
      <path d="M4 16h24M6 9h20M6 23h20" />
    </svg>
  ),
  church: (p: P) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M16 3v6M13 6h6" />
      <path d="M16 9 5 17v11h22V17z" />
      <path d="M13 28v-6h6v6" />
    </svg>
  ),
  wave: (p: P) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M3 20c3 0 3-4 6-4s3 4 6 4 3-4 6-4 3 4 6 4" />
      <path d="M3 26c3 0 3-4 6-4s3 4 6 4 3-4 6-4 3 4 6 4" />
      <path d="M16 4c4 2 6 5 6 9" opacity="0.55" />
    </svg>
  ),
  drop: (p: P) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M16 4c5 7 8 10 8 14a8 8 0 0 1-16 0c0-4 3-7 8-14z" />
      <path d="M12 20a4 4 0 0 0 4 4" />
    </svg>
  ),
  calendar: (p: P) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <rect x="5" y="7" width="22" height="20" rx="2" />
      <path d="M5 13h22M11 4v6M21 4v6" />
    </svg>
  ),
  clock: (p: P) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <circle cx="16" cy="16" r="12" />
      <path d="M16 9v7l5 3" />
    </svg>
  ),
  pin: (p: P) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M16 28s9-8 9-15a9 9 0 0 0-18 0c0 7 9 15 9 15z" />
      <circle cx="16" cy="13" r="3.5" />
    </svg>
  ),
  ticket: (p: P) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <path d="M5 9h22v6a3 3 0 0 0 0 6v0H5v0a3 3 0 0 0 0-6z" />
      <path d="M20 9v18" strokeDasharray="2 3" />
    </svg>
  ),
  check: (p: P) => (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M7 16.5 13 22l12-13" />
    </svg>
  ),
  arrow: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  ),
  play: (p: P) => (
    <svg viewBox="0 0 32 32" fill="currentColor" {...p}>
      <path d="M12 9.5v13l11-6.5z" />
    </svg>
  ),
  close: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  ),
  quote: (p: P) => (
    <svg viewBox="0 0 40 32" fill="currentColor" {...p}>
      <path d="M0 18C0 9 5 2 14 0l2 4C11 6 8 9 8 13h7v15H0zM23 18C23 9 28 2 37 0l2 4c-5 2-8 5-8 9h7v15H23z" />
    </svg>
  ),
  facebook: (p: P) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  instagram: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  globe2: (p: P) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};
