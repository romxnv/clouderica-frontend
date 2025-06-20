import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';

import { useUpdateUserFormMutation } from '../model/mutations';

export const UpdateUserForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, isLoading, errors } =
    useUpdateUserFormMutation();

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <TextField
        label={t('common.fields.name')}
        error={errors.name?.message}
        {...register('name')}
      />
      <TextField
        label={t('common.fields.email')}
        error={errors.email?.message}
        {...register('email')}
      />
      <div className="flex justify-end">
        <Button type="submit" disabled={isLoading} isLoading={isLoading}>
          {t('common.actions.save')}
        </Button>
      </div>
    </form>
  );
};
