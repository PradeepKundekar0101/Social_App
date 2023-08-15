import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/profile/:id",
      element: <Profile/>
    },
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

