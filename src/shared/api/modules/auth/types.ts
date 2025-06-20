import type { z } from 'zod';

import type { LoginDtoSchema, RegisterDtoSchema } from './contracts';

export type LoginDto = z.infer<typeof LoginDtoSchema>;
export type RegisterDto = z.infer<typeof RegisterDtoSchema>;
