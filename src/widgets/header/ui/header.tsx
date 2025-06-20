import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaStar } from 'react-icons/fa';
import { RiUserSettingsLine } from 'react-icons/ri';
import { Link } from 'react-router';

import { useCurrentUserQuery } from '@/entities/user';
import { ChangeLanguageSelect } from '@/features/preferences/language-change';
import { ThemeChangeSelect } from '@/features/preferences/theme-change';
import { LogoutButton } from '@/features/session/logout';
import { Avatar } from '@/shared/ui/avatar';
import { Logo } from '@/shared/ui/logo';

export const Header = () => {
  const { t } = useTranslation();
  const { data: user, isLoading } = useCurrentUserQuery();

  return (
    <header className="dark:bg-dark w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between">
          <Logo isLink />
          <Menu>
            <MenuButton className="flex cursor-pointer items-center gap-2">
              {({ open }) => (
                <>
                  <Avatar avatar={user?.avatar || null} isLoading={isLoading} />
                  <FaChevronDown
                    className={`transition-transform duration-200 ${
                      open ? 'rotate-180' : 'rotate-0'
                    }`}
                    size={12}
                    color="var(--color-gray-400)"
                  />
                </>
              )}
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className="dark:bg-dark-light z-20 w-64 origin-top-right rounded-lg bg-white py-3 drop-shadow-xl transition duration-200 ease-in-out outline-none data-closed:scale-95 data-closed:opacity-0"
            >
              <MenuItem>
                <div className="group mb-4 flex w-full items-center gap-2.5 px-3">
                  <Avatar avatar={user?.avatar ?? null} />
                  <div className="flex flex-col items-start">
                    <div className="text-md font-medium">{user?.name}</div>
                    <div className="text-sm text-gray-600">{user?.email}</div>
                  </div>
                </div>
              </MenuItem>
              <MenuItem>
                <Link
                  to="/settings"
                  className="group hover:bg-primary/5 flex w-full items-center gap-2 px-3 py-2"
                >
                  <RiUserSettingsLine size={20} color="var(--color-primary)" />
                  <div className="text-sm">{t('header.accountSettings')}</div>
                </Link>
              </MenuItem>
              <ChangeLanguageSelect />
              <ThemeChangeSelect />
              <LogoutButton />
              <MenuItem>
                <Link
                  to="https://github.com/romxnv/cloudplace"
                  className="group hover:bg-primary/5 flex w-full items-center gap-2 px-3 py-2"
                >
                  <FaStar size={20} color="var(--color-amber-300)" />
                  <div className="text-sm">{t('header.starOnGithub')}</div>
                </Link>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </header>
  );
};
