import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Opening from './Routes/Opening'; 
import Main from './Routes/Main'; 
import About from './Routes/About';
import Error from './Routes/Error';
import Contact from './Routes/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Opening/>,
    errorElement: <Error/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/main',
    element: <Main/>,
  },
  {
    path: '/contact',
    element: <Contact/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
