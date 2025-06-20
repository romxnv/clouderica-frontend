import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';

import { useUpdateUserPasswordFormMutation } from '../model/mutations';

export const UpdateUserPasswordForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, isLoading, errors } =
    useUpdateUserPasswordFormMutation();

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <TextField
        type="password"
        label={t('common.fields.currentPassword')}
        placeholder={t('common.fields.currentPassword')}
        error={errors.currentPassword?.message}
        {...register('currentPassword')}
      />
      <TextField
        type="password"
        label={t('common.fields.newPassword')}
        placeholder={t('common.fields.newPassword')}
        error={errors.newPassword?.message}
        {...register('newPassword')}
      />
      <TextField
        type="password"
        label={t('common.fields.confirmPassword')}
        placeholder={t('common.fields.confirmPassword')}
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      <div className="flex justify-end">
        <Button type="submit" disabled={isLoading} isLoading={isLoading}>
          {t('common.actions.save')}
        </Button>
      </div>
    </form>
  );
};
