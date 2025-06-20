import type { ReactNode } from 'react';

import { Navigate } from 'react-router';

import { useAuth } from '@/shared/api/token-storage';

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const isAuth = useAuth();

  if (!isAuth) {
    return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
};
