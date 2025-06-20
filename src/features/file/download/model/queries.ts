import { useQuery } from '@tanstack/react-query';

import { fileService } from '@/shared/api/modules/file';

export const useFileDownloadUrlQuery = (id: string) =>
  useQuery({
    queryKey: ['files', id, 'download'],
    queryFn: async () => {
      const url = await fileService.getDownloadUrl(id);
      return url.data;
    },
  });
