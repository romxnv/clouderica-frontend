import type { ReactNode } from 'react';

import clsx from 'clsx';

type Props = {
  children: ReactNode;
  size?: 'sm' | 'lg';
};

const sizes = {
  sm: 'max-w-2xl',
  lg: 'max-w-7xl',
};

export const Container = ({ children, size = 'lg' }: Props) => {
  return (
    <div className={clsx('mx-auto px-4 py-3 sm:py-12', sizes[size])}>
      {children}
    </div>
  );
};
