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
  {
    key: "warehouse",
    path: "/warehouse",
    component: lazy(() => import("../../modules/warehouse/index")),
    children: [
      {
        key: "main",
        childrenPath: "/",
        component: lazy(
          () => import("../../modules/warehouse/routes/WareHouse")
        ),
      },
      {
        key: "form",
        childrenPath: "/form",
        component: lazy(
          () => import("../../modules/warehouse/routes/WareHouseForm")
        ),
      },
    ],
  },
  {
    key: "products",
    path: "/sell-products",
    component: lazy(() => import("../../modules/sellProducts/index")),
    children: [],
  },
  {
    key: "archive",
    path: "/archive",
    component: lazy(() => import("../../modules/archive/index")),
    children: [],
  },
];
