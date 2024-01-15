import { createBrowserRouter } from "react-router-dom";
import { Error404 } from "../Page/Error404/Error404";
import { Login } from "../Page/Login/Login";
import { Main } from "../Layout/Main";
import { Home } from "../Page/Home/Home";
import { Blog } from "../Page/Blog/Blog";
import { AddFAQ } from "../Page/AddFAQ/AddFAQ";
import { AddService } from "../Page/AddService/AddService";
import { EditHeroSection } from "../Page/EditHeroSection/EditHeroSection";
import { AddBlog } from "../Page/AddBlog/AddBlog";
import { ServiceDetails } from "../Components/ServiceDetails/ServiceDetails";
import { AddSubService } from "../Components/AddSubService/AddSubService";
import axios from "axios";
import { AddFeaturedBlog } from "../Page/AddFeaturedBlog/AddFeaturedBlog";
import { EditService } from "../Components/EditService/EditService";
import { EditBlog } from "../Components/EditBlog/EditBlog";
import { EditSubService } from "../Components/EditSubService/EditSubService";
import { EditFaq } from "../Components/EditFaq/EditFaq";
import { PrivateRoute } from "./PrivateRoute";
import { EditFeaturedBlog } from "../Components/EditFeaturedBlog/EditFeaturedBlog";
import { ForgetPassword } from "../Page/ForgetPassword/ForgetPassword";
import { Contact } from "../Components/Contact/Contact";
import { Video } from "../Components/Video/Video";
import { WhyWeb } from "../Components/WhyWeb/WhyWeb";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Main></Main>
      </PrivateRoute>
    ),
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
      {
        path: "/edit-featured-blog/:id",
        loader: ({ params }) => axios.get(`/single-blogs/${params.id}`),
        element: <EditFeaturedBlog></EditFeaturedBlog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/video",
        element: <Video></Video>
      },
      {
        path: "/why-web",
        element: <WhyWeb></WhyWeb>
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword></ForgetPassword>,
  },
]);
