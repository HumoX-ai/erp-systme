import { lazy } from "react";

export const protectedRoutes = [
  {
    key: "Bosh panel",
    path: "/dashboard",
    component: lazy(() => import("../../modules/dashboard/index")),
  },
  {
    key: "Mahsulotlar",
    path: "/products",
    component: lazy(() => import("../../modules/products/index")),
  },
  {
    key: "Statistika",
    path: "/stats",
    component: lazy(() => import("../../modules/stats/index")),
  },
  {
    key: "Filiallar",
    path: "/filials",
    component: lazy(() => import("../../modules/filial/index")),
  },
];
