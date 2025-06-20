import { useTranslation } from 'react-i18next';
import { HiMiniArrowUpRight } from 'react-icons/hi2';
import { Link } from 'react-router';

import { LoginForm } from '@/features/session/login';
import { Logo } from '@/shared/ui/logo';

export const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="pointer-events-none my-12 flex items-center justify-center">
        <Logo />
      </div>
      <div className="flex flex-col gap-6 px-6">
        <div className="flex flex-col gap-1">
          <div className="text-3xl font-semibold">{t('pages.login.title')}</div>
          <div className="text-sm dark:text-gray-400">
            {t('pages.login.description')}
          </div>
        </div>
        <LoginForm />
        <div className="flex items-center justify-center gap-1">
          <div className="text-sm">{t('pages.login.noAccount')}</div>
          <Link to="/auth/register" className="flex items-center gap-1">
            <span className="text-primary text-sm font-medium">
              {t('pages.login.createAccount')}
            </span>
            <HiMiniArrowUpRight size={20} color="var(--color-primary)" />
          </Link>
        </div>
      </div>
    </>
  );
};
