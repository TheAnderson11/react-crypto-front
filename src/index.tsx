import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AuthRootComponent from './components/auth';
import Home from './components/home';
import NewsComponent from './components/news';
import SettingsComponent from './components/settings';
import WatchListComponent from './components/watchlist';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store';
import PrivateRoute from './utils/router/privateRoute';

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '',
        element: <App />,
        children: [
          { path: '', element: <Home /> },
          { path: 'watchlist', element: <WatchListComponent /> },
          { path: 'news', element: <NewsComponent /> },
          { path: 'settings', element: <SettingsComponent /> },
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
