import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import RootLayout from "./routes/RootLayout";
import Info from "./routes/Info";
import Product, { productAction } from "./routes/Product"
import Index from "./routes/Index";
import ProductOverview from "./routes/ProductOverview";
import Titles, { titlesLoader } from "./routes/Titles";
import Error from "./routes/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [  
      { 
        index: true,
        element: <Index />
      },
      {
        path: "/info",
        element: <Info />,
      },
      {
        path: "product",
        children: [
          { 
            index: true,
            element: <ProductOverview />
          },
          {
            path: ":productId",
            element: <Product />,
            action: productAction,
          },
        ]
      },
      {
        path: "titles",
        element: <Titles />,
        loader: titlesLoader
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);