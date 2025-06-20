import { useTranslation } from 'react-i18next';
import { IoCloudDownload } from 'react-icons/io5';

import { useFileDownloadUrlQuery } from '../model/queries';

type Display = 'button' | 'icon';

type Props = {
  id: string;
  display?: Display;
};

export const DownloadFileButton = ({ id, display = 'button' }: Props) => {
  const { t } = useTranslation();
  const { refetch } = useFileDownloadUrlQuery(id);

  const handleClick = async () => {
    const { data: url } = await refetch();
    if (url) window.open(url, '_blank');
  };

  if (display === 'icon') {
    return (
      <button
        className="group/download flex cursor-pointer rounded-full p-1.5 hover:bg-white/20 focus:outline-none"
        aria-label="Preview image"
        onClick={() => handleClick()}
      >
        <IoCloudDownload
          size={28}
          className="text-white/50 group-hover/download:text-white"
        />
      </button>
    );
  }

  return (
    <button
      className="hover:bg-primary/5 flex w-full cursor-pointer items-center gap-2 px-3 py-2"
      onClick={() => handleClick()}
    >
      <IoCloudDownload size={20} color="var(--color-primary)" />
      <div className="text-sm">{t('common.actions.download')}</div>
    </button>
  );
};
