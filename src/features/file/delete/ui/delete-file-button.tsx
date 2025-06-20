import { useTranslation } from 'react-i18next';
import { IoTrash } from 'react-icons/io5';

import { useDeleteFileMutation } from '../model/mutations';

type Display = 'button' | 'icon';

type Props = {
  id: string;
  display?: Display;
};

export const DeleteFileButton = ({ id, display = 'button' }: Props) => {
  const { t } = useTranslation();
  const { mutate } = useDeleteFileMutation(id);

  const handleDelete = () => {
    if (window.confirm(t('common.confirmDialog.deleteFile'))) {
      mutate();
    }
  };

  if (display === 'icon') {
    return (
      <button className="group/remove flex cursor-pointer rounded-full p-1.5 hover:bg-white/20 focus:outline-none">
        <IoTrash
          size={28}
          className="text-white/50 group-hover/remove:text-white"
          onClick={handleDelete}
        />
      </button>
    );
  }

  return (
    <button
      className="hover:bg-primary/5 flex w-full cursor-pointer items-center gap-2 px-3 py-2"
      onClick={handleDelete}
    >
      <IoTrash size={20} color="var(--color-danger)" />
      <div className="text-danger text-sm">{t('common.actions.delete')}</div>
    </button>
  );
};
