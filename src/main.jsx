import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';
import Register from './Components/Register/Register.jsx';
import Services from './Components/Services/Services.jsx';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ErrorPage from './Components/ErrorPage/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path : "/",
        element : <Home></Home>,
        loader : ()=>fetch('/events.json')
      },
      {
        path : "/login",
        element: <LogIn></LogIn>
      },
      {
        path : "/register",
        element : <Register></Register>
      },
      {
        path : "/services",
        element : <PrivateRoute>
          <Services></Services>
        </PrivateRoute>,
        loader : () =>fetch('./events.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
       

  </React.StrictMode>,
)
