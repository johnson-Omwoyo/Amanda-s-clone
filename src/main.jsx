import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./Routes";

const routes = createBrowserRouter(Routes);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes}></RouterProvider>
);
