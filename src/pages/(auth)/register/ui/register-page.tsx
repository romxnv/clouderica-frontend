import { useTranslation } from 'react-i18next';
import { HiMiniArrowUpRight } from 'react-icons/hi2';
import { Link } from 'react-router';

import { RegisterForm } from '@/features/session/register';
import { Logo } from '@/shared/ui/logo';

export const RegisterPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="pointer-events-none my-12 flex items-center justify-center">
        <Logo />
      </div>
      <div className="flex flex-col gap-6 px-6">
        <div className="flex flex-col gap-1">
          <div className="text-3xl font-semibold">
            {t('pages.register.title')}
          </div>
          <div className="text-sm dark:text-gray-400">
            {t('pages.register.description')}
          </div>
        </div>
        <RegisterForm />
        <div className="flex items-center justify-center gap-1">
          <div className="text-sm">{t('pages.register.alreadyRegistered')}</div>
          <Link to="/auth/login" className="flex items-center gap-1">
            <span className="text-primary text-sm font-medium">
              {t('pages.register.createAccount')}
            </span>
            <HiMiniArrowUpRight size={20} color="var(--color-primary)" />
          </Link>
        </div>
      </div>
    </>
  );
};
