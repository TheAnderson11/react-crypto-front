import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AuthRootComponent from './components/auth';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './store';
import PrivateRoute from './utils/router/privateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute />,
    children: [{ path: '/', element: <App /> }],
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
