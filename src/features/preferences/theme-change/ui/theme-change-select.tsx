import { useState } from 'react';

import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { FaCheck, FaChevronDown } from 'react-icons/fa';
import { GoSun } from 'react-icons/go';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { IoMoonOutline } from 'react-icons/io5';
import { WiMoonAltThirdQuarter } from 'react-icons/wi';

import { useThemeStore } from '@/shared/theme';

export const ThemeChangeSelect = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useThemeStore();
  const [open, setOpen] = useState(false);

  const changeTheme = (theme: 'light' | 'dark' | 'system') => {
    setTheme(theme);
    toast.success(t('toasts.themeChanged'));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="group hover:bg-primary/5 flex w-full cursor-pointer items-center gap-2 px-3 py-2"
      >
        <WiMoonAltThirdQuarter size={20} color="var(--color-primary)" />
        <div className="text-sm">{t('preferences.theme.label')}</div>
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
            onClick={() => changeTheme('dark')}
            className="group hover:bg-primary/5 flex w-full cursor-pointer items-center gap-2 py-2 pr-3 pl-6"
          >
            <IoMoonOutline size={20} color="var(--color-primary)" />
            <div className="text-sm">{t('preferences.theme.options.dark')}</div>
            {theme === 'dark' && (
              <FaCheck
                className="ml-auto"
                size={12}
                color="var(--color-primary)"
              />
            )}
          </button>
          <button
            onClick={() => changeTheme('light')}
            className="group hover:bg-primary/5 flex w-full cursor-pointer items-center gap-2 py-2 pr-3 pl-6"
          >
            <GoSun size={20} color="var(--color-primary)" />
            <div className="text-sm">
              {t('preferences.theme.options.light')}
            </div>
            {theme === 'light' && (
              <FaCheck
                className="ml-auto"
                size={12}
                color="var(--color-primary)"
              />
            )}
          </button>
          <button
            onClick={() => changeTheme('system')}
            className="group hover:bg-primary/5 flex w-full cursor-pointer items-center gap-2 py-2 pr-3 pl-6"
          >
            <HiOutlineComputerDesktop size={20} color="var(--color-primary)" />
            <div className="text-sm">
              {t('preferences.theme.options.system')}
            </div>
            {theme === 'system' && (
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
