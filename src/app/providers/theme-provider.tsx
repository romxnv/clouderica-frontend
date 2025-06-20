import { useEffect, type ReactNode } from 'react';

import { getSystemTheme, useThemeStore } from '@/shared/theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    const isDark =
      theme === 'dark' || (theme === 'system' && getSystemTheme() === 'dark');
    document.documentElement.classList.toggle('dark', isDark);
  }, [theme]);

  return <>{children}</>;
};
