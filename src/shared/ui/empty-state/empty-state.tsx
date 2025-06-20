import { useTranslation } from 'react-i18next';
import { IoCloudUploadOutline } from 'react-icons/io5';

export const EmptyState = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="dark:bg-dark-light mb-4 rounded-full bg-gray-100 p-3">
        <IoCloudUploadOutline size={40} className="text-gray-600" />
      </div>
      <h3 className="text-lg font-medium dark:text-white">
        {t('common.emptyState.title')}
      </h3>
      <p className="mt-1 text-sm text-gray-600">
        {t('common.emptyState.description')}
      </p>
    </div>
  );
};
