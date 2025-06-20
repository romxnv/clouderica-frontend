import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';

import { authService } from './modules/auth';
import { useTokenStorageStore } from './token-storage';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  withCredentials: true,
});

const apiClientWithAuth = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  withCredentials: true,
});

apiClientWithAuth.interceptors.request.use(
  (config) => {
    const { token } = useTokenStorageStore.getState();

    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

let isRefreshing = false;
const failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (error: AxiosError) => void;
}> = [];

const processQueue = (error?: AxiosError, token?: string) => {
  failedQueue.forEach((promise) =>
    error ? promise.reject(error) : promise.resolve(token!),
  );
  failedQueue.length = 0;
};

apiClientWithAuth.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (!error.config) return Promise.reject(error);

    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    originalRequest.headers = originalRequest.headers || {};

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          const timer = setTimeout(() => {
            reject(new Error('Refresh token timeout'));
          }, 30000);

          failedQueue.push({
            resolve: (token: string) => {
              clearTimeout(timer);
              originalRequest.headers.Authorization = `Bearer ${token}`;
              resolve(apiClientWithAuth(originalRequest));
            },
            reject: (err: AxiosError) => {
              clearTimeout(timer);
              reject(err);
            },
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const { data } = await authService.refresh();
        const newToken = data.access_token;

        useTokenStorageStore.getState().setToken(newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        processQueue(undefined, newToken);

        return apiClientWithAuth(originalRequest);
      } catch (refreshError) {
        useTokenStorageStore.getState().clearToken();
        processQueue(refreshError as AxiosError);

        if (window.location.pathname !== '/auth/login') {
          window.location.replace('/auth/login');
        }

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export { apiClient, apiClientWithAuth };
