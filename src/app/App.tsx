import { MainPage } from '@/pages/main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from './layouts';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: '/', element: <MainPage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
