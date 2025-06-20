import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  token: string | null;
};

type Actions = {
  setToken: (token: string) => void;
  clearToken: () => void;
};

export const useTokenStorageStore = create<State & Actions>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token: token }),
      clearToken: () => set({ token: null }),
    }),
    {
      name: 'token-storage',
    },
  ),
);

export const useAuth = () => useTokenStorageStore((state) => state.token);
