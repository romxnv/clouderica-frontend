import { useQuery } from '@tanstack/react-query';

import { fileService } from '@/shared/api/modules/file';

import { mapFileDtoToDomain } from '../lib/map-file-dto-to-domain';
import { mapFileQueryToDto } from '../lib/map-file-query-to-dto';

import type { FileQuery } from './types';

export const useUserFilesQuery = (query: FileQuery) => {
  const dto = mapFileQueryToDto(query);

  return useQuery({
    queryKey: ['files', dto],
    queryFn: async () => {
      const { data } = await fileService.getList(dto);
      return data.map(mapFileDtoToDomain);
    },
  });
};
