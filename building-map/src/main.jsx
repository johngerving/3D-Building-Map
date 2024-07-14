import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as buildingLoader } from "./routes/buildingMap/buildingMap.jsx";
import "./index.css";

import BuildingMap from "./routes/buildingMap/buildingMap.jsx";
import ErrorPage from "./error-page.jsx";
import { ViewPanel } from "./routes/buildingMap/ui/viewPanel.jsx";
import { EditorPanel } from "./routes/buildingMap/ui/editorPanel/editorPanel.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/:buildingName",
    element: <BuildingMap />,
    errorElement: <ErrorPage />,
    loader: buildingLoader,
    children: [
      {
        // At route /:buildingName, show the search bar and sidebar
        index: true,
        element: <ViewPanel />,
      },
      {
        // At route /:buildingName/editor, show the editor panel instead
        path: "/:buildingName/editor",
        element: <EditorPanel />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
