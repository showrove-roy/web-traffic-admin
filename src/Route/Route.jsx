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
import { ServiceDetails } from "../Components/ServiceDetails/ServiceDetails";
import { AddSubService } from "../Components/AddSubService/AddSubService";
import axios from "axios";
import { AddFeaturedBlog } from "../Page/AddFeaturedBlog/AddFeaturedBlog";
import { EditService } from "../Components/EditService/EditService";
import { EditBlog } from "../Components/EditBlog/EditBlog";
import { EditSubService } from "../Components/EditSubService/EditSubService";
import { EditFaq } from "../Components/EditFaq/EditFaq";

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
        path: "/edit-blog/:id",
        loader: ({ params }) => axios.get(`/single-blog/${params.id}`),
        element: <EditBlog></EditBlog>,
      },
      {
        path: "/add-faq/:id",
        loader: ({ params }) => axios.get(`/single-category/${params.id}`),
        element: <AddFAQ></AddFAQ>,
      },
      {
        path: "/edit-faq/:id",
        loader: ({ params }) => axios.get(`/single-FAQ/${params.id}`),
        element: <EditFaq></EditFaq>,
      },
      {
        path: "/add-service",
        element: <AddService></AddService>,
      },
      {
        path: "/edit-service/:id",
        loader: ({ params }) => axios.get(`/single-category/${params.id}`),
        element: <EditService></EditService>,
      },
      {
        path: "/edit-hero-section/:id",
        loader: ({ params }) => axios.get(`/single-category/${params.id}`),
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
        path: "/edit-sub-service/:id",
        loader: ({ params }) => axios.get(`/single-Subcategory/${params.id}`),
        element: <EditSubService></EditSubService>,
      },
      {
        path: "/service/:id",
        loader: ({ params }) => axios.get(`/single-category/${params.id}`),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/add-featured-blog/:id",
        loader: ({ params }) => axios.get(`/single-category/${params.id}`),
        element: <AddFeaturedBlog></AddFeaturedBlog>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
