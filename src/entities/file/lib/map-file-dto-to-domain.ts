import type { FileDto } from '@/shared/api/modules/file';

import type { File } from '../model/types';

import { getCategoryFromMimeType } from './get-category-from-mimetype';
import { getFileExtensionFromMimeType } from './get-file-extension-from-mimetype';

export const mapFileDtoToDomain = (dto: FileDto): File => ({
  id: dto.id,
  name: dto.name,
  size: dto.size,
  mimeType: dto.mimeType,
  extension: getFileExtensionFromMimeType(dto.mimeType),
  isDeleted: dto.isDeleted,
  category: getCategoryFromMimeType(dto.mimeType),
  storageKey: dto.storageKey,
  uploadedAt: new Date(dto.createdAt),
  ownerId: dto.ownerId,
});
