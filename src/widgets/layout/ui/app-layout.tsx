import type { ReactNode } from 'react';

import { Outlet } from 'react-router';

type Props = {
  header: ReactNode;
  footer: ReactNode;
};

export const AppLayout = ({ header, footer }: Props) => {
  return (
    <>
      {header}
      <main className="h-full min-h-screen w-full">
        <Outlet />
      </main>
      {footer}
    </>
  );
};
