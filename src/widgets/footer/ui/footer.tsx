import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router';

import { Button } from '@/shared/ui/button';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="dark:bg-dark-light relative bottom-0 mt-12 w-full bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-2">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="text-sm text-gray-600">
            {t('footer.openSourceCode')}
          </div>
          <Link to="https://github.com/romxnv/clouderica" target="_blank">
            <Button
              size="sm"
              variant="ghost"
              className="dark:hover:!bg-dark !text-gray-600 hover:!bg-gray-200 dark:text-gray-600"
            >
              <FaGithub size={20} />
              romxnv/clouderica
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};
