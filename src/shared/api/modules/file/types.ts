import type { z } from 'zod';

import type { FileDtoSchema, FileQueryDtoSchema } from './contracts';

export type FileDto = z.infer<typeof FileDtoSchema>;
export type FileQueryDto = z.infer<typeof FileQueryDtoSchema>;
