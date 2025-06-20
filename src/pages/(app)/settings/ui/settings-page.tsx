import { useTranslation } from 'react-i18next';

import { useCurrentUserQuery } from '@/entities/user';
import { UpdateUserForm } from '@/features/user/update';
import { UpdateUserPasswordForm } from '@/features/user/update-password';
import { UploadAvatarForm } from '@/features/user/upload-avatar';
import { Container } from '@/shared/ui/container';

export const SettingsPage = () => {
  const { t } = useTranslation();
  const { data: user } = useCurrentUserQuery();

  return (
    <Container size="sm">
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">{t('pages.settings.title')}</div>
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-6">
            <UploadAvatarForm />
            <div className="flex flex-col gap-0.5">
              <div className="text-2xl font-semibold">{user?.name}</div>
              <div className="text-sm text-gray-600">{user?.email}</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <UpdateUserForm />
            <UpdateUserPasswordForm />
          </div>
        </div>
      </div>
    </Container>
  );
};
