import * as ReactDOM from "react-dom/client";
import * as ReactRouter from "react-router-dom";
import React from "react";
import LandingPage from "./pages/landingPage";
import "./main.css";

const router = ReactRouter.createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <>
    <React.StrictMode>
      <ReactRouter.RouterProvider router={router} />
    </React.StrictMode>
  </>,
);
