import type { z } from 'zod';

import { LoginSchema } from './contracts';

export type Login = z.infer<ReturnType<typeof LoginSchema>>;
