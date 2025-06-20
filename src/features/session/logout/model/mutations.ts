import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { authService } from '@/shared/api/modules/auth';
import { useTokenStorageStore } from '@/shared/api/token-storage';

export const useLogoutMutation = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return useMutation({
    mutationKey: ['auth', 'logout'],
    mutationFn: async () => {
      await authService.logout();
      useTokenStorageStore.getState().clearToken();
    },
    onSuccess: () => {
      toast.success(t('toasts.logoutSuccess'));
      navigate('/auth/login');
    },
    onError: () => {
      toast.error(t('toasts.logoutError'));
    },
  });
};
