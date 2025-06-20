import type { ReactNode } from 'react';

import { clsx } from 'clsx';
import { IoEye, IoEyeOff } from 'react-icons/io5';

import {
  type File,
  getIconFromCategory,
  getStyleFromCategory,
} from '@/entities/file';

type Props = {
  file: File;
  deleteButton: ReactNode;
  downloadButton: ReactNode;
  onOpenPreview: () => void;
};

export const Card = ({
  file,
  deleteButton,
  downloadButton,
  onOpenPreview,
}: Props) => {
  const isImageOrVideo = ['images', 'videos'].includes(file.category);
  const canPreviewFile =
    ['images', 'videos', 'audios'].includes(file.category) &&
    file.extension.toUpperCase() !== 'SVG';

  return (
    <div
      className="group flex w-full max-w-[200px] flex-col gap-2"
      tabIndex={0}
    >
      <div className="dark:bg-dark-light relative aspect-square h-full w-full overflow-hidden rounded-xl bg-gray-100 transition-all duration-200 group-hover:scale-105 group-hover:drop-shadow-xl">
        {isImageOrVideo && file.extension !== 'SVG' ? (
          <>
            {file.category === 'images' ? (
              <img
                src={`http://127.0.0.1:9000/uploads/${file.storageKey}`}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <video className="absolute inset-0 h-full w-full object-cover">
                <source
                  src={`http://127.0.0.1:9000/uploads/${file.storageKey}`}
                />
              </video>
            )}
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-40"></div>
          </>
        ) : (
          <>
            <div className="dark:bg-dark/75 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-5">
              {getIconFromCategory(file.category)}
            </div>
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-200 group-hover:opacity-40"></div>
          </>
        )}

        <div
          className={clsx(
            'absolute top-2 right-2 rounded-sm px-1.5 py-0.5 text-xs font-semibold text-white',
            getStyleFromCategory(file.category, 'bg'),
          )}
        >
          {file.extension}
        </div>

        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="flex items-center gap-2.5">
            <div className="pointer-events-none hidden md:pointer-events-auto md:block">
              {downloadButton}
            </div>
            {canPreviewFile ? (
              <button
                onClick={onOpenPreview}
                className="group/preview flex cursor-pointer rounded-full p-1.5 hover:bg-white/20 focus:outline-none"
                aria-label="Preview image"
              >
                <IoEye
                  size={28}
                  className="text-white/50 group-hover/preview:text-white"
                />
              </button>
            ) : (
              <IoEyeOff className="h-7 w-7 text-white/50" />
            )}
            <div className="pointer-events-none hidden md:pointer-events-auto md:block">
              {deleteButton}
            </div>
          </div>
        </div>
      </div>

      <div className="truncate text-xs text-gray-600" title={file.name}>
        {file.name}
      </div>
    </div>
  );
};
