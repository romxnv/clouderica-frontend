import { useSearchParams } from 'react-router';

import { FileQueryDtoSchema } from '@/shared/api/modules/file';

import { mapFileQueryDtoToDomain } from './map-file-query-dto-to-domain';

export const useFileQuery = () => {
  const [searchParams] = useSearchParams();
  const dto = FileQueryDtoSchema.parse(Object.fromEntries(searchParams));

  return mapFileQueryDtoToDomain(dto);
};
