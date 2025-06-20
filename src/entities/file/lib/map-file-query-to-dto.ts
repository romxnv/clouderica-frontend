import type { FileQueryDto } from '@/shared/api/modules/file';

import type { FileQuery } from '../model/types';

export const mapFileQueryToDto = (query: FileQuery): FileQueryDto => ({
  page: String(query.page),
  limit: String(query.limit),
  sort: query.sort,
  order: query.order,
});
