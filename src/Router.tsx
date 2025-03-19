import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {AISStream} from "@/pages/AISStream";
import React from "react";

const router = createBrowserRouter([
  {
    path: '/ui',
    element: <AISStream />,
  },
  ],
    {basename: "/api/plugins/ots_aisstream_plugin"}
  );

export function Router() {
  return <RouterProvider router={router} />;
}
