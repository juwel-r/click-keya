import App from "@/App";
import About from "@/pages/About";
import Products from "@/pages/Products";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: About,
        path: "about",
      },{
        Component:Products,
        path:"products"
      }
    ],
  },
]);
