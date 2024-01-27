import { createBrowserRouter } from "react-router-dom";

import Home from "../shared/pages/Home";

const pagesRoutes = [
  {
    path: "/",
    element: <Home />,
  },
];

const routers = createBrowserRouter(pagesRoutes);

export default routers;
