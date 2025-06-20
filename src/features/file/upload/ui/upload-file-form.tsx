import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { FaCloudUploadAlt } from 'react-icons/fa';

import { useUploadFileFormMutation } from '../model/mutations';

export const UploadFileForm = () => {
  const { t } = useTranslation();
  const { mutate: uploadFile } = useUploadFileFormMutation();

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files?.[0]) return;

      const file = e.target.files[0];

      if (file.size > 10 * 1024 * 1024) {
        return alert(t('fileLimits.size', { size: 10 }));
      }

      uploadFile(file);
    },
    [uploadFile, t],
  );

  return (
    <form className="border-primary to-primary/10 dark:from-dark-light relative flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed bg-gradient-to-b from-white py-8">
      <FaCloudUploadAlt size={64} color="var(--color-primary)" />
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {t('common.actions.uploadHint')}
      </div>
      <input
        type="file"
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        onChange={handleFileChange}
      />
    </form>
  );
};
