import { Metadata } from 'next';
import { RegistroClient } from './RegistroClient';

export const metadata: Metadata = {
  title: 'Regístrate — La Cresta de la Ola 2026',
  description: 'Registro gratuito para La Cresta de la Ola 2026. Julio 9, 10 y 11 · Iglesia Senderos de Luz, Desamparados, San José, Costa Rica.',
};

export default function RegistroPage() {
  return <RegistroClient />;
}
