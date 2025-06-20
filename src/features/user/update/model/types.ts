import type { z } from 'zod';

import type { UpdateUserDtoSchema } from './contracts';

export type UpdateUserDto = z.infer<ReturnType<typeof UpdateUserDtoSchema>>;
