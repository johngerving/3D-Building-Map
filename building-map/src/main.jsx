import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as buildingLoader } from "./routes/buildingMap/buildingMap.jsx";
import "./index.css";
import BuildingMap from "./routes/buildingMap/buildingMap.jsx";
import ErrorPage from "./error-page.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/:buildingName",
    element: <BuildingMap />,
    errorElement: <ErrorPage />,
    loader: buildingLoader(queryClient),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
