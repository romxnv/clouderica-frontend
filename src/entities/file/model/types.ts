export type File = {
  id: string;
  name: string;
  size: number;
  mimeType: string;
  category: string;
  isDeleted: boolean;
  extension: string;
  storageKey: string;
  uploadedAt: Date;
  ownerId: string;
};

export type FileQuery = {
  page: number;
  limit: number;
  sort: string;
  order: 'asc' | 'desc';
};
