import { lazy } from "react";

export const protectedRoutes = [
  {
    key: "dashboard",
    path: "/dashboard",
    component: lazy(() => import("../../modules/dashboard/index")),
    children: [],
  },
  {
    key: "products",
    path: "/products",
    component: lazy(() => import("../../modules/products/index")),
    children: [],
  },
  {
    key: "statistics",
    path: "/stats",
    component: lazy(() => import("../../modules/stats/index")),
    children: [],
  },
  {
    key: "receiveProducts",
    path: "/receive-product",
    component: lazy(() => import("../../modules/receiveProducts/index")),
    children: [
      {
        key: "brands",
        childrenPath: "/brands",
        component: lazy(
          () => import("../../modules/receiveProducts/routes/ProductBrends")
        ),
      },
      {
        key: "products",
        childrenPath: "/products",
        component: lazy(
          () => import("../../modules/receiveProducts/routes/BrendProducts")
        ),
      },
    ],
  },
];
