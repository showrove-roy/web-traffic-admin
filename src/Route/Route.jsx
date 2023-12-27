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
import { ServiceDetails } from "../Components/ServiceDetails/ServiceDetails";
import { AddSubService } from "../Components/AddSubService/AddSubService";
import axios from "axios";

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
        path: "/add-faq/:id",
        loader: ({ params }) => axios.get(`/single-category/${params.id}`),
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
      {
        path: "/add-sub-service/:id",
        loader: ({ params }) => axios.get(`/single-category/${params.id}`),
        element: <AddSubService></AddSubService>,
      },
      {
        path: "/service/:id",
        loader: ({ params }) => axios.get(`/single-category/${params.id}`),
        element: <ServiceDetails></ServiceDetails>,
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
