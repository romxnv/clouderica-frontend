import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  theme: 'light' | 'dark' | 'system';
};

type Actions = {
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
};

export const useThemeStore = create<State & Actions>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (newTheme) => set({ theme: newTheme }),
    }),
    {
      name: 'theme-storage',
      partialize: (state) => ({
        theme: state.theme,
      }),
    },
  ),
);
