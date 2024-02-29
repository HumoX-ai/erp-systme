import React from "react";

const publicRoutes = [
  {
    path: "/login",
    component: React.lazy(() => import("../../modules/login/index")),
  },
];

export default publicRoutes;
