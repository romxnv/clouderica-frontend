import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { useCurrentUserQuery } from '@/entities/user';
import { userService } from '@/shared/api/modules/user';

import { UpdateUserDtoSchema } from './contracts';
import type { UpdateUserDto } from './types';

export const useUpdateUserFormMutation = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const { data: user } = useCurrentUserQuery();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateUserDto>({
    resolver: zodResolver(UpdateUserDtoSchema()),
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user.name || '',
        email: user.email || '',
      });
    }
  }, [user, reset]);

  const updateUserMutation = useMutation({
    mutationKey: ['users', 'me', 'update'],
    mutationFn: userService.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users', 'me'] });
      toast.success(t('toasts.userUpdateSuccess'));
    },
    onError: () => {
      toast.error(t('toasts.userUpdateError'));
    },
  });

  return {
    register,
    handleSubmit: handleSubmit((data) => updateUserMutation.mutate(data)),
    isLoading: updateUserMutation.isPending,
    errors,
  };
};
