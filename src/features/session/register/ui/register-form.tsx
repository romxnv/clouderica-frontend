import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';

import { useRegisterMutation } from '../model/mutation';

export const RegisterForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, isLoading, errors } = useRegisterMutation();

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <TextField
        type="text"
        label={t('common.fields.name')}
        placeholder="John Doe"
        error={errors.name?.message}
        {...register('name')}
      />
      <TextField
        label={t('common.fields.email')}
        placeholder="johndoe@mail.com"
        error={errors.email?.message}
        {...register('email')}
      />
      <TextField
        type="password"
        label={t('common.fields.password')}
        placeholder="••••••••"
        error={errors.password?.message}
        {...register('password')}
      />
      <TextField
        type="password"
        label={t('common.fields.confirmPassword')}
        placeholder="••••••••"
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />
      <Button
        className="w-full"
        type="submit"
        disabled={isLoading}
        isLoading={isLoading}
      >
        {t('common.actions.register')}
      </Button>
    </form>
  );
};
