import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { fileService } from '@/shared/api/modules/file';
import { queryClient } from '@/shared/api/query-client';

export const useDeleteFileMutation = (id: string) => {
  const { t } = useTranslation();

  return useMutation({
    mutationKey: ['files', id, 'delete'],
    mutationFn: () => fileService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['files'] });
      toast.success(t('toasts.deleteSuccess'));
    },
    onError: () => {
      toast.error(t('toasts.deleteError'));
    },
  });
};
