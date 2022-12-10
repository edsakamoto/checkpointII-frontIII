import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Footer from "./Components/Footer";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";



 const root = ReactDOM.createRoot(document.getElementById("root"));

 const appRouter = createBrowserRouter([
  {
    path:'',
    element: <Home />  ,
    children:[
      {
        path:'/home',
        element: <Home />
      }    
    ]    
  },
  {
    path: '/login',
    element:<Login />
  },
  {
    path: '/detail',
    element:<Detail />
  }
])
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    
    <Navbar />    
    <RouterProvider router={appRouter} />    
    <Footer />
    
  </React.StrictMode>
);