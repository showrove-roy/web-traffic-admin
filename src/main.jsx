import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route/Route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { AuthProvider } from "./Contexts/AuthProvider";
axios.defaults.baseURL = "https://new-web-trafice.vercel.app/api/v1";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
