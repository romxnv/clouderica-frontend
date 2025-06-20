import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { authService } from '@/shared/api/modules/auth';
import { useTokenStorageStore } from '@/shared/api/token-storage';

import { LoginSchema } from './contracts';
import type { Login } from './types';

export const useLoginMutation = () => {
  const router = useNavigate();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(LoginSchema()),
  });

  const loginMutation = useMutation({
    mutationKey: ['session', 'login'],
    mutationFn: authService.login,
    onSuccess: ({ data }) => {
      const { access_token: accessToken } = data;
      useTokenStorageStore.getState().setToken(accessToken);
      toast.success(t('toasts.loginSuccess'));
      router('/');
    },
    onError: () => {
      toast.error(t('toasts.loginError'));
    },
  });

  return {
    register,
    handleSubmit: handleSubmit((data) => loginMutation.mutate(data)),
    isLoading: loginMutation.isPending,
    errors,
  };
};
