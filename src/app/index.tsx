import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { Entry } from './entry.tsx';

import '@/shared/styles/index.css';
import '@/shared/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Entry />
  </StrictMode>,
);
