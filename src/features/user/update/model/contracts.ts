import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export const UpdateUserDtoSchema = () => {
  const { t } = useTranslation();

  return z.object({
    name: z.string().min(3, {
      message: t('common.validation.min', { field: 'name', min: 3 }),
    }),
    email: z.string().email({
      message: t('common.validation.emailFormat'),
    }),
  });
};
