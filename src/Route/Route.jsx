import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layout/Main";
import { Error404 } from "../Page/Error404/Error404";
import { Login } from "../Page/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        element: <div>this is home</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
