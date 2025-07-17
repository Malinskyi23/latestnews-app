import { MainPage } from '@/pages/main';
import { NewsArticlesPage } from '@/pages/news-articles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from './layouts';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/news-articles', element: <NewsArticlesPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
