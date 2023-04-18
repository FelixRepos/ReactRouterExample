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
import CatPicture, { catPictureLoader } from "./routes/CatPicture";
import CatPictures, { catPicturesLoader } from "./routes/CatPictures";
import CatPictureError from "./routes/CatPictureError";
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
        path: "product/:productId",
        element: <Product />,
        action: productAction,
      },
      {
        path: "product/",
        element: <ProductOverview />,
      },
      {
        path: "catPicture/:catPictureId",
        element: <CatPicture />,
        loader: catPictureLoader,
        errorElement: <CatPictureError />,
      },
      {
        path: "catPictures/",
        element: <CatPictures />,
        loader: catPicturesLoader
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);