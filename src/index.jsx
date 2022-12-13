import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Routes/Home";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import App from "./App";
import { ThemeProvider } from "./hooks/useTheme"
import { LoggedProvider } from "./hooks/useLogged"


const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to='home' />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'dentist/:id',
        element: <Detail />
      }
    ]
  }
])
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LoggedProvider>
        <RouterProvider router={appRouter} />
      </LoggedProvider>
    </ThemeProvider>
  </React.StrictMode>
);
