import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Layout from './pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);

export default router;
