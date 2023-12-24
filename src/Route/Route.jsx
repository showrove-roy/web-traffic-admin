import { createBrowserRouter } from "react-router-dom";

import { Error404 } from "../Page/Error404/Error404";
import { Login } from "../Page/Login/Login";
import { Main } from "../Layout/Main";
import { Home } from "../Page/Home/Home";
import { Blog } from "../Page/Blog/Blog";
import { AddFAQ } from "../Page/AddFAQ/AddFAQ";
import { AddService } from "../Page/AddService/AddService";
import { EditHeroSection } from "../Page/EditHeroSection/EditHeroSection";
import { EditProfile } from "../Page/EditProfile/EditProfile";
import { AddBlog } from "../Page/AddBlog/AddBlog";
import { TestComponent } from "../Components/TestComponent/TestComponent";

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
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/add-blog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/add-faq",
        element: <AddFAQ></AddFAQ>,
      },
      {
        path: "/add-service",
        element: <AddService></AddService>,
      },
      {
        path: "/edit-hero-section",
        element: <EditHeroSection></EditHeroSection>,
      },
      {
        path: "/edit-profile",
        element: <EditProfile></EditProfile>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/test",
    element: <TestComponent></TestComponent>,
  },
]);
