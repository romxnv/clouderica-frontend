import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { HiPhoto } from 'react-icons/hi2';

import { useCurrentUserQuery } from '@/entities/user';
import { Avatar } from '@/shared/ui/avatar';

import { useUploadAvatarMutation } from '../model/mutations';

export const UploadAvatarForm = () => {
  const { t } = useTranslation();
  const { data: user, isLoading: userLoading } = useCurrentUserQuery();
  const { mutate: uploadAvatar } = useUploadAvatarMutation();

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files?.[0]) return;

      const file = e.target.files[0];

      if (file.size > 10 * 1024 * 1024) {
        return alert(t('common.fileLimits.size', { size: 10 }));
      }

      uploadAvatar(file);
    },
    [uploadAvatar, t],
  );

  return (
    <div className="group relative flex items-center justify-center">
      <Avatar
        size="lg"
        avatar={user?.avatar ?? null}
        isLoading={userLoading}
        className="transition-all duration-200 ease-in-out group-hover:brightness-80"
      />
      <HiPhoto
        size={32}
        color="white"
        className="absolute opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"
      />
      <input
        type="file"
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        onChange={handleFileChange}
      />
    </div>
  );
};
