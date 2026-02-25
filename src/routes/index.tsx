import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component:Home,
        index:true
      },
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
