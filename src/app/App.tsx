import { selectIsDarkMode } from '@/features/theme/model/themeSlice';
import { MainPage } from '@/pages/main';
import { NewsArticlesPage } from '@/pages/news-articles';
import { useAppSelector } from '@/shared/lib/hooks';
import { ConfigProvider, theme } from 'antd';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from './layouts';

function App() {
  const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme;
  const isDarkMode = useAppSelector(selectIsDarkMode);

  const themeConfig = {
    algorithm: [
      isDarkMode ? darkAlgorithm : defaultAlgorithm,
      compactAlgorithm,
    ],
  };

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
  return (
    <ConfigProvider theme={themeConfig}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
