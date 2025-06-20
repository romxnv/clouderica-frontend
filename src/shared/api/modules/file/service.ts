import { apiClientWithAuth } from '@/shared/api/api-client';

import type { FileDto, FileQueryDto } from './types';

export const service = {
  async getList(dto: FileQueryDto) {
    return apiClientWithAuth.get<FileDto[]>(`/files`, {
      params: {
        page: dto.page,
        limit: dto.limit,
        sort: dto.sort,
        order: dto.order,
      },
    });
  },
  async upload(file: File) {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await apiClientWithAuth.post('/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload response:', response);
      return response.data;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  },
  async delete(id: string) {
    await apiClientWithAuth.delete(`/files/${id}`);
  },
  async getDownloadUrl(id: string) {
    return apiClientWithAuth.get<string>(`/files/${id}/download`);
  },
};
