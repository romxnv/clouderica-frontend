import { Link } from 'react-router';

import { getSystemTheme, useThemeStore } from '@/shared/theme';

type Props = {
  isLink?: boolean;
};

const LOGO_PATHS = {
  light: '/assets/logos/logo-light.svg',
  dark: '/assets/logos/logo-dark.svg',
} as const;

export const Logo = ({ isLink = false }: Props = {}) => {
  const { theme } = useThemeStore();

  const getLogoPath = (theme: 'light' | 'dark' | 'system'): string => {
    const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;
    return LOGO_PATHS[resolvedTheme];
  };

  if (isLink) {
    return (
      <Link to="/" className="flex items-center justify-center gap-1.5">
        <img
          src={getLogoPath(theme)}
          className="pointer-events-none h-12"
          alt=""
        />
      </Link>
    );
  }

  return (
    <img src={getLogoPath(theme)} className="pointer-events-none h-12" alt="" />
  );
};
