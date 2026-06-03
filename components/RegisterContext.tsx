'use client';

import { createContext, useContext } from 'react';

export const RegisterContext = createContext<() => void>(() => {});

export function useRegister() {
  return useContext(RegisterContext);
}
