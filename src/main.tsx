import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import AuthRootComponent from './pages/auth';
import Home from './pages/home';
import NewsComponent from './pages/news';
import SettingsComponent from './pages/settings';
import WatchListComponent from './pages/watchlist';
import reportWebVitals from './reportWebVitals';
import store from './store';
import PrivateRoute from './utils/router/privateRoute';

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        element: <App />,
        children: [
          { path: '/', element: <Home /> },
          { path: '/watchlist', element: <WatchListComponent /> },
          { path: '/news', element: <NewsComponent /> },
          { path: '/settings', element: <SettingsComponent /> },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <AuthRootComponent />,
  },
  {
    path: '/register',
    element: <AuthRootComponent />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
