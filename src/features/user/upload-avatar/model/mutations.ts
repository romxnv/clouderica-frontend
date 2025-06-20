import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { userService } from '@/shared/api/modules/user';
import { queryClient } from '@/shared/api/query-client';

export const useUploadAvatarMutation = () => {
  const { t } = useTranslation();

  return useMutation({
    mutationKey: ['users', 'me', 'avatar', 'upload'],
    mutationFn: userService.uploadAvatar,
    onSuccess: () => {
      toast.success(t('toasts.avatarUploadSuccess'));
      queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
    },
    onError: () => {
      toast.error(t('toasts.avatarUploadError'));
    },
  });
};
