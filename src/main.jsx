import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import TeachersPage from './Pages/TeachersPage.jsx';
import NoticePage from './Pages/NoticePage.jsx';
import StaffsPage from './Pages/StaffsPage.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Page not found</div>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/teachers',
        element: <TeachersPage />,
      },
      {
        path: '/notices',
        element: <NoticePage />,
      },
      {
        path: '/staffs',
        element: <StaffsPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
