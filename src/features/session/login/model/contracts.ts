import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export const LoginSchema = () => {
  const { t } = useTranslation();

  return z.object({
    email: z.string().email({
      message: t('common.validation.emailFormat'),
    }),
    password: z.string().min(8, {
      message: t('common.validation.min', { field: 'password', min: 8 }),
    }),
  });
};
