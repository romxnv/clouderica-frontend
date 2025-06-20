import { useState } from 'react';

import {
  CloseButton,
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { FaUpload } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

import {
  useUserFilesQuery,
  FileCard,
  type File as FileModel,
  FileCardSkeleton,
} from '@/entities/file';
import { DeleteFileButton } from '@/features/file/delete';
import { DownloadFileButton } from '@/features/file/download';
import { UploadFileForm } from '@/features/file/upload';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import { EmptyState } from '@/shared/ui/empty-state';
import { FilePreview } from '@/widgets/file-preview';

import { QuickAccess } from './quick-access/quick-access';

export const HomePage = () => {
  const { t } = useTranslation();

  const { data: files, isLoading } = useUserFilesQuery({ page: 1, limit: 10 });
  const [isOpen, setIsOpen] = useState(false);
  const [previewFile, setPreviewFile] = useState<FileModel | null>(null);

  return (
    <>
      <Container>
        <div className="flex flex-col gap-8 sm:gap-16">
          <div className="flex items-center justify-between gap-2.5">
            <div className="flex flex-col gap-2 sm:gap-1.5">
              <div className="text-3xl font-bold sm:text-4xl">
                {t('pages.home.title')}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t('pages.home.description')}
              </div>
            </div>
            <Button size="lg" onClick={() => setIsOpen(true)}>
              <FaUpload size={20} color="var(--color-white)" />
              {t('common.actions.upload')}
            </Button>
          </div>
          <QuickAccess />
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-bold">
              {t('pages.home.recentFiles')}
            </div>
            {isLoading || !files ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] sm:justify-center">
                {Array.from({ length: 6 }).map((_, index) => (
                  <FileCardSkeleton key={index} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] sm:justify-center">
                {files.map((file) => (
                  <FileCard
                    key={file.id}
                    file={file}
                    onOpenPreview={() => setPreviewFile(file)}
                    deleteButton={
                      <DeleteFileButton id={file.id} display="icon" />
                    }
                    downloadButton={
                      <DownloadFileButton id={file.id} display="icon" />
                    }
                  />
                ))}
              </div>
            )}
            {files?.length === 0 && <EmptyState />}
          </div>
        </div>
      </Container>

      <FilePreview
        file={previewFile}
        isOpen={!!previewFile}
        setIsOpen={(open) => !open && setPreviewFile(null)}
      />

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="dark:bg-dark-light w-full max-w-md rounded-xl bg-white backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <div className="border-b border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="text-lg font-semibold">File Upload</div>
                  <CloseButton
                    as="button"
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <IoClose className="h-7 w-7 text-gray-400 transition-all duration-200 ease-in-out hover:text-gray-200" />
                  </CloseButton>
                </div>
              </div>
              <div className="px-6 py-8">
                <UploadFileForm />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
