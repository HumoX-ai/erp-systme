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
    key: "filials",
    path: "/filials",
    component: lazy(() => import("../../modules/filials/index")),
    children: [
      {
        key: "productTable",
        childrenPath: "/product-table",
        component: lazy(
          () => import("../../modules/filials/routes/FilialProducts")
        ),
      },
      {
        key: "filialTable",
        childrenPath: "/filial-table",
        component: lazy(() => import("../../modules/filials/routes/Filial")),
      },
    ],
  },
  {
    key: "filialId",
    path: "/filials/:id",
    component: lazy(
      () => import("../../modules/filials/routes/FilialProducts")
    ),
  },
  {
    key: "employee",
    path: "/employee",
    component: lazy(() => import("../../modules/employee/index")),
  },
  {
    key: "undeliveredProducts",
    path: "/undelivered-products",
    component: lazy(
      () => import("../../modules/cashier/undelivered-products.tsx")
    ),
  },
  {
    key: "deliveredProducts",
    path: "/delivered-products",
    component: lazy(
      () => import("../../modules/cashier/delivered-products.tsx")
    ),
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
