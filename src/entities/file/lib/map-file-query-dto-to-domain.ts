import type { FileQueryDto } from '@/shared/api/modules/file';

import type { FileQuery } from '../model/types';

export const DEFAULT_PAGINATION = {
  page: 1,
  limit: 10,
} as const;

export const mapFileQueryDtoToDomain = (dto: FileQueryDto): FileQuery => ({
  page: parseInt(dto.page || String(DEFAULT_PAGINATION.page), 10),
  limit: parseInt(dto.limit || String(DEFAULT_PAGINATION.limit), 10),
  sort: dto.sort || 'createdAt',
  order: dto.order || 'desc',
});
