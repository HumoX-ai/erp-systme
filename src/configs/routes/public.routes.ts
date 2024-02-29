import React from "react";

export const protectedRoutes = [
  {
    key: "Bosh panel",
    path: "/dashboard",
    component: React.lazy(() => import("../../modules/dashboard/index")),
  },
  {
    key: "Mahsulotlar",
    path: "/products",
    component: React.lazy(() => import("../../modules/products/index")),
  },
];
