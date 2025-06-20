import { apiClientWithAuth } from '@/shared/api/api-client';

import type { UpdateUserDto, UpdateUserPasswordDto, UserDto } from './types';

export const service = {
  getCurrent: async () => {
    try {
      const response = await apiClientWithAuth.get<UserDto>('/users/me');
      return response.data;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  },
  update: async (data: UpdateUserDto) => {
    try {
      const response = await apiClientWithAuth.patch('/users/me', data);
      return response.data;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  },
  updatePassword: async (data: UpdateUserPasswordDto) => {
    try {
      const response = await apiClientWithAuth.patch(
        '/users/me/password',
        data,
      );

      return response.data;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  },
  uploadAvatar: async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await apiClientWithAuth.post(
        '/users/me/avatar',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  },
  removeAvatar: async () => {
    try {
      await apiClientWithAuth.delete('/users/me/avatar');
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  },
};
