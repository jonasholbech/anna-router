import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./routes/home";
import Product, { loader as productLoader } from "./routes/product";

export default function App() {
  const [products, setProducts] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home products={products} />,
    },
    {
      path: "product/:productId",
      element: <Product products={products} />,
      loader: productLoader,
    },
  ]);

  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);
  return <RouterProvider router={router} />;
}
