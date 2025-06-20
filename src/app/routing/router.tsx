import { createBrowserRouter, RouterProvider } from 'react-router';

import { FilesPage } from '@/pages/(app)/files';
import { HomePage } from '@/pages/(app)/home';
import { SettingsPage } from '@/pages/(app)/settings';
import { LoginPage } from '@/pages/(auth)/login';
import { RegisterPage } from '@/pages/(auth)/register';
import { NotFoundPage } from '@/pages/(error)/not-found';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { AppLayout, EmptyLayout } from '@/widgets/layout';

import { PrivateRoute } from './private-route';
import { PublicRoute } from './public-route';

const router = createBrowserRouter([
  {
    path: 'auth',
    element: (
      <PublicRoute>
        <EmptyLayout />
      </PublicRoute>
    ),
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '',
    element: (
      <PrivateRoute>
        <AppLayout header={<Header />} footer={<Footer />} />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'files',
        element: <FilesPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <EmptyLayout />,
    children: [
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
