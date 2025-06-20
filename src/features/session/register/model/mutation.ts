import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { authService } from '@/shared/api/modules/auth';
import { useTokenStorageStore } from '@/shared/api/token-storage';

import { RegisterSchema } from './contracts';
import type { Register } from './types';

export const useRegisterMutation = () => {
  const router = useNavigate();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Register>({
    resolver: zodResolver(RegisterSchema()),
  });

  const registerMutation = useMutation({
    mutationKey: ['session', 'login'],
    mutationFn: authService.register,
    onSuccess: ({ data }) => {
      const { access_token: accessToken } = data;
      useTokenStorageStore.getState().setToken(accessToken);
      toast.success(t('toasts.registerSuccess'));
      router('/');
    },
    onError: () => {
      toast.error(t('toasts.registerError'));
    },
  });

  return {
    register,
    handleSubmit: handleSubmit((data) => registerMutation.mutate(data)),
    isLoading: registerMutation.isPending,
    errors,
  };
};
