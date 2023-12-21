import { createBrowserRouter } from "react-router-dom";

import { Error404 } from "../Page/Error404/Error404";
import { Login } from "../Page/Login/Login";
import { Main } from "../Layout/Main";
import { Home } from "../Page/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
