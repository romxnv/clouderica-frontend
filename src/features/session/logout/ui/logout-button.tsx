import { useTranslation } from 'react-i18next';
import { GoSignOut } from 'react-icons/go';

import { useLogoutMutation } from '../model/mutations';

export const LogoutButton = () => {
  const { t } = useTranslation();
  const { mutate } = useLogoutMutation();

  return (
    <button
      className="group hover:bg-primary/5 flex w-full cursor-pointer items-center gap-2 px-3 py-2"
      onClick={() => mutate()}
    >
      <GoSignOut size={20} color="var(--color-primary)" />
      <div className="text-sm">{t('common.actions.logout')}</div>
    </button>
  );
};
