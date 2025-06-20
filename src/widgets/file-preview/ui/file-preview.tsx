import {
  CloseButton,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItems,
} from '@headlessui/react';
import { IoClose } from 'react-icons/io5';
import { RiMoreLine } from 'react-icons/ri';

import type { File } from '@/entities/file';
import { DeleteFileButton } from '@/features/file/delete';
import { DownloadFileButton } from '@/features/file/download';

type Props = {
  file: File | null;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const FilePreview = ({ file, isOpen, setIsOpen }: Props) => {
  const renderFile = () => {
    const filePath = `${import.meta.env.VITE_S3_ENDPOINT}/uploads/${file?.storageKey}`;

    if (file?.category === 'videos') {
      return (
        <video controls className="max-h-full max-w-full object-contain">
          <source src={filePath} type="video/webm" />
        </video>
      );
    }

    if (file?.category === 'images') {
      return (
        <img
          src={filePath}
          alt={file?.name}
          className="max-h-full max-w-full object-contain"
        />
      );
    }

    if (file?.category === 'audios') {
      return (
        <audio controls className="w-full max-w-lg">
          <source src={filePath} />
        </audio>
      );
    }

    return null;
  };

  return (
    <Dialog open={isOpen && !!file} className="relative z-50" onClose={close}>
      <DialogBackdrop className="fixed inset-0 bg-black/80" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel
            transition
            className="h-screen w-full overflow-hidden duration-200 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
          >
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <CloseButton
                  as="button"
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <IoClose
                    size={28}
                    className="text-gray-400 transition-all duration-200 ease-in-out hover:text-gray-200"
                  />
                </CloseButton>
                <div className="text-base font-medium text-gray-400">
                  {file?.name}
                </div>
              </div>
              <Menu>
                <MenuButton className="cursor-pointer">
                  <RiMoreLine
                    size={28}
                    className="text-gray-400 transition-all duration-200 ease-in-out hover:text-gray-200"
                  />
                </MenuButton>
                <MenuItems
                  transition
                  anchor="bottom end"
                  className="dark:bg-dark-light z-20 w-38 origin-top-right rounded-lg bg-white drop-shadow-xl transition duration-200 ease-in-out data-closed:scale-95 data-closed:opacity-0"
                >
                  <DownloadFileButton id={file?.id ?? ''} />
                  <DeleteFileButton id={file?.id ?? ''} />
                </MenuItems>
              </Menu>
            </div>

            <div className="flex h-[calc(100%-60px)] items-center justify-center px-8 py-4">
              {renderFile()}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
