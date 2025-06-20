import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import { fileService } from '@/shared/api/modules/file';
import { queryClient } from '@/shared/api/query-client';

export const useUploadFileFormMutation = () => {
  const { t } = useTranslation();

  return useMutation({
    mutationKey: ['files', 'upload'],
    mutationFn: fileService.upload,
    onSuccess: () => {
      toast.success(t('toasts.uploadSuccess'));
      queryClient.invalidateQueries({ queryKey: ['files'] });
    },
    onError: () => {
      toast.error(t('toasts.uploadError'));
    },
  });
};
