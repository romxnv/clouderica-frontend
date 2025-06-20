import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router';

import {
  FileCard,
  FileCardSkeleton,
  useUserFilesQuery,
  type File as FileModel,
  useFileQuery,
} from '@/entities/file';
import { DeleteFileButton } from '@/features/file/delete';
import { DownloadFileButton } from '@/features/file/download';
import { Button } from '@/shared/ui/button';
import { Container } from '@/shared/ui/container';
import { EmptyState } from '@/shared/ui/empty-state';
import { FilePreview } from '@/widgets/file-preview';

export const FilesPage = () => {
  const query = useFileQuery();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { data: files, isLoading } = useUserFilesQuery(query);
  const [previewFile, setPreviewFile] = useState<FileModel | null>(null);
  const [searchParams] = useSearchParams();

  const category = searchParams.get('category');

  const filteredFiles = category
    ? files?.filter((file) => file.category === category)
    : files;

  return (
    <>
      <Container>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
              <FaChevronLeft size={16} />
            </Button>
            <div className="text-2xl font-bold">
              {category
                ? t(`common.categories.${category}`)
                : t('pages.files.title')}
            </div>
          </div>
          {isLoading || !files ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] sm:justify-center">
              {Array.from({ length: 6 }).map((_, index) => (
                <FileCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] sm:justify-center">
              {filteredFiles?.map((file) => (
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
          {filteredFiles?.length === 0 && <EmptyState />}
        </div>
      </Container>

      <FilePreview
        file={previewFile}
        isOpen={!!previewFile}
        setIsOpen={(open) => !open && setPreviewFile(null)}
      />
    </>
  );
};
