import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { userService } from '@/shared/api/modules/user';

import { UpdateUserPasswordSchema } from './contracts';
import type { UpdateUserPassword } from './types';

export const useUpdateUserPasswordFormMutation = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUserPassword>({
    resolver: zodResolver(UpdateUserPasswordSchema()),
  });

  const updateUserPasswordMutation = useMutation({
    mutationKey: ['users', 'me', 'update-password'],
    mutationFn: userService.updatePassword,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
      toast.success(t('toasts.passwordChangeSuccess'));
    },
    onError: () => {
      toast.error(t('toasts.passwordChangeError'));
    },
  });

  return {
    register,
    handleSubmit: handleSubmit((data) =>
      updateUserPasswordMutation.mutate({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      }),
    ),
    isLoading: updateUserPasswordMutation.isPending,
    errors,
  };
};
