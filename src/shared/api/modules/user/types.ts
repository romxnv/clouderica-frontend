import { z } from 'zod';

import type {
  UpdateUserDtoSchema,
  UpdateUserPasswordDtoSchema,
  UserDtoSchema,
} from './contracts';

export type UserDto = z.infer<typeof UserDtoSchema>;
export type UpdateUserDto = z.infer<typeof UpdateUserDtoSchema>;
export type UpdateUserPasswordDto = z.infer<typeof UpdateUserPasswordDtoSchema>;
