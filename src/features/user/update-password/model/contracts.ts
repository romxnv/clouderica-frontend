import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export const UpdateUserPasswordSchema = () => {
  const { t } = useTranslation();

  return z
    .object({
      currentPassword: z.string().min(1, {
        message: t('common.validation.required', {
          field: t('common.fields.password'),
        }),
      }),
      newPassword: z.string().min(8, {
        message: t('common.validation.min', {
          field: t('common.fields.password').toLowerCase(),
          min: 8,
        }),
      }),
      confirmPassword: z.string(),
    })
    .superRefine(({ newPassword, confirmPassword }, ctx) => {
      if (newPassword !== confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: t('common.validation.passwordsMismatch'),
          path: ['confirmPassword'],
        });
      }
    });
};
