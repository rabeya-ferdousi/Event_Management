import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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
import Profile from './Components/Profile/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path : "/",
        element : <Home></Home>
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
        element : <Services></Services>
      },
      {
        path : "profile",
        element : <Profile></Profile>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
