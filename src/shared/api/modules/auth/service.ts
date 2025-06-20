import { apiClient, apiClientWithAuth } from '@/shared/api/api-client';

import { LoginDtoSchema, RegisterDtoSchema } from './contracts';
import type { LoginDto, RegisterDto } from './types';

export const service = {
  async login(dto: LoginDto) {
    const data = LoginDtoSchema.parse(dto);
    return apiClient.post('/auth/login', data);
  },
  async register(dto: RegisterDto) {
    const data = RegisterDtoSchema.parse(dto);
    return apiClient.post('/auth/register', data);
  },
  async refresh() {
    return apiClient.post('/auth/refresh');
  },
  async logout() {
    return apiClientWithAuth.post('/auth/logout');
  },
};
