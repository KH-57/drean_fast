import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import AuthLayout from "../AuthLayout/AuthLayout";
import Login from "../Pages/Authintation/Login/Login";
import Register from "../Pages/Authintation/Register/Register";
import Covarege from "../Pages/Covarege/Covarege";



export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
          path :'/home',
          Component:Home,
        },
         {
          path :'/covarege',
          Component:Covarege,
        },
       
    ]
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
    {
     path:'login',
     Component:Login
    },
    {
     path:'register',
     Component:Register
    },
  ]
  }
]);
