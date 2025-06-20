import type { z } from 'zod';

import type { UpdateUserPasswordSchema } from './contracts';

export type UpdateUserPassword = z.infer<
  ReturnType<typeof UpdateUserPasswordSchema>
>;
