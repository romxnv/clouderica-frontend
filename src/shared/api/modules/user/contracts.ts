import { z } from 'zod';

export const UserDtoSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  avatar: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const UpdateUserDtoSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3),
});

export const UpdateUserPasswordDtoSchema = z.object({
  currentPassword: z.string().min(8),
  newPassword: z.string().min(8),
});
