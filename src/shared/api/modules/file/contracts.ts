import { z } from 'zod';

export const FileDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
  size: z.number(),
  ownerId: z.string(),
  isDeleted: z.boolean(),
  mimeType: z.string(),
  storageKey: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const FileQueryDtoSchema = z.object({
  page: z.string().optional().default('1'),
  limit: z.string().optional().default('10'),
  sort: z.string().optional(),
  order: z.enum(['asc', 'desc']).optional(),
});
