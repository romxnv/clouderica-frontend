import { useTranslation } from 'react-i18next';

import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';

import { useLoginMutation } from '../model/mutation';

export const LoginForm = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, isLoading, errors } = useLoginMutation();

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <TextField
        type="email"
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
      <Button
        className="w-full"
        type="submit"
        disabled={isLoading}
        isLoading={isLoading}
      >
        {t('common.actions.login')}
      </Button>
    </form>
  );
};
