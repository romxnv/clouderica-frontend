import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export const RegisterSchema = () => {
  const { t } = useTranslation();

  return z
    .object({
      name: z.string().min(3, {
        message: t('validation.min', { field: 'name', min: 3 }),
      }),
      email: z.string().email({
        message: t('validation.emailFormat'),
      }),
      password: z.string().min(8, {
        message: t('validation.min', { field: 'password', min: 8 }),
      }),
      confirmPassword: z.string(),
    })
    .superRefine(({ password, confirmPassword }, ctx) => {
      if (password !== confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: t('validation.passwordsMismatch'),
          path: ['confirmPassword'],
        });
      }
    });
};
