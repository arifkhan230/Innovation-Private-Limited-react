import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './Pages/Home/Home/Home.jsx'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import { Toaster } from 'react-hot-toast';
import Cart from './Pages/Cart/Cart.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PrivateRoute><Home></Home></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "/cart",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      }
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
