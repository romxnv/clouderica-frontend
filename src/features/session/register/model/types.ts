import type { z } from 'zod';

import type { RegisterSchema } from './contracts';

export type Register = z.infer<ReturnType<typeof RegisterSchema>>;
