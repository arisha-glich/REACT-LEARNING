// src/route.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/ErrorPage/Error";
import ContactUs from "../pages/ContactPage/ContactUs";
import Home from "../pages/HomePage/Home";
import CountryDetail from "../components/CountryDetail";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/country",
        element: <CountryDetail />,
      },
    ],
  },
]);

export default router;
