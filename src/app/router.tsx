import { useMemo } from 'react';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const ROUTERS = [
  {
    path: '/',
    lazy: async () => {
      const { HomeRoute } = await import('./routes/home');
      return { Component: HomeRoute };
    },
  },
  {
    path: '*',
    lazy: async () => {
      const { NotFoundRoute } = await import('./routes/not-found');
      return { Component: NotFoundRoute };
    },
  },
];

export const createAppRouter = (_queryClient: QueryClient) => createBrowserRouter(ROUTERS);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
