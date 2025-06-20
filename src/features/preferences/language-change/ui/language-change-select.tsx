import { useState } from 'react';

import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { FaCheck, FaChevronDown } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';

export const ChangeLanguageSelect = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = async (lang: 'en' | 'ru') => {
    await i18n.changeLanguage(lang);
    toast.success(t('toasts.languageChanged'));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="group hover:bg-primary/5 flex w-full cursor-pointer items-center gap-2 px-3 py-2"
      >
        <MdLanguage size={20} color="var(--color-primary)" />
        <div className="text-sm">{t('preferences.language.label')}</div>
        <FaChevronDown
          className={`ml-auto transition-transform duration-200 ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
          size={12}
          color="var(--color-gray-400)"
        />
      </button>
      {open && (
        <div className="flex flex-col">
          <button
            onClick={() => changeLanguage('en')}
            className="group hover:bg-primary/5 flex w-full cursor-pointer items-center gap-2 py-2 pr-3 pl-6"
          >
            <div className="h-5 w-5">🇺🇸</div>
            <div className="text-sm">
              {t('preferences.language.options.en')}
            </div>
            {i18n.language === 'en' && (
              <FaCheck
                className="ml-auto"
                size={12}
                color="var(--color-primary)"
              />
            )}
          </button>
          <button
            onClick={() => changeLanguage('ru')}
            className="group hover:bg-primary/5 flex w-full cursor-pointer items-center gap-2 py-2 pr-3 pl-6"
          >
            <div className="h-5 w-5">🇷🇺</div>
            <div className="text-sm">
              {t('preferences.language.options.ru')}
            </div>
            {i18n.language === 'ru' && (
              <FaCheck
                className="ml-auto"
                size={12}
                color="var(--color-primary)"
              />
            )}
          </button>
        </div>
      )}
    </div>
  );
};
