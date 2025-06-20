import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { getStyleFromCategory, getIconFromCategory } from '@/entities/file';

export const QuickAccess = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-bold">{t('pages.home.quickAccess')}</div>
      <div className="hidden grid-cols-1 gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {['Images', 'Documents', 'Audios', 'Videos', 'Archives', 'Other'].map(
          (label) => (
            <Link
              to={`/files?category=${label.toLowerCase()}`}
              className="dark:bg-dark-light w-full overflow-hidden rounded-2xl bg-white drop-shadow-xl"
              key={label}
            >
              <div
                className={clsx(
                  `relative min-h-[150px] rounded-b-2xl`,
                  getStyleFromCategory(label.toLowerCase(), 'bg'),
                )}
              >
                <div className="absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/75">
                  {getIconFromCategory(label.toLowerCase())}
                </div>
              </div>
              <div className="py-1.5 text-center text-base font-semibold">
                {t(`common.categories.${label.toLowerCase()}`)}
              </div>
            </Link>
          ),
        )}
      </div>
      <div className="sm:hidden">
        <Swiper slidesPerView={2} spaceBetween={16}>
          {['Images', 'Documents', 'Audios', 'Videos', 'Archives', 'Other'].map(
            (label) => (
              <SwiperSlide key={label}>
                <Link
                  to={`/files?category=${label.toLowerCase()}`}
                  className="dark:bg-dark-light flex h-full w-full flex-col overflow-hidden rounded-2xl"
                >
                  <div
                    className={clsx(
                      `relative min-h-[150px] flex-1 rounded-b-2xl`,
                      getStyleFromCategory(label.toLowerCase(), 'bg'),
                    )}
                  >
                    <div className="absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white/75">
                      {getIconFromCategory(label.toLowerCase())}
                    </div>
                  </div>

                  <div className="flex-shrink-0 py-1.5 text-center text-base font-semibold">
                    {t(`common.categories.${label.toLowerCase()}`)}
                  </div>
                </Link>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </div>
    </div>
  );
};
