import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import { queryClient } from '@/shared/api/query-client';
import { getSystemTheme } from '@/shared/theme';

import { ThemeProvider } from './providers/theme-provider';
import { Router } from './routing/router';

export const Entry = () => {
  const theme = getSystemTheme();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Router />
          <Toaster
            position="bottom-right"
            gutter={8}
            toastOptions={{
              style: {
                background: theme === 'dark' ? '#212121' : '#ffffff',
                color: '#ffffff',
              },
            }}
          />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};
