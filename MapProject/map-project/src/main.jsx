import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Error from "./components/Error.jsx";
import Header from "./components/Header.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs.jsx";
import Home from "./components/Home.jsx";
import CountryDetail from "./components/CountryDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home/>,
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
    </>
  </React.StrictMode>
);
