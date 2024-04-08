const navigationLinks: {
  key: string;
  path: string;
  icon?:
    | "home"
    | "product"
    | "statistics"
    | "receive-product"
    | "filials"
    | "employee"
    | "undelivered-products"
    | "delivered-products"
    | "warehouse"
    | "archive";
  title: string;
  role: string;
}[] = [
  {
    title: "Bosh sahifa",
    icon: "home",
    path: "/dashboard",
    key: "dashboard",
    role: "all",
  },
  {
    title: "Statistikalar",
    icon: "statistics",
    path: "/stats",
    key: "stats",
    role: "all",
  },
  {
    title: "Mahsulotni Qabul qilish",
    icon: "receive-product",
    path: "/receive-product",
    key: "receive-product",
    role: "all",
  },
  {
    title: "Omborxona",
    icon: "warehouse",
    path: "/warehouse",
    key: "warehouse",
    role: "all",
  },
  {
    title: "Filiallar",
    icon: "filials",
    path: "/filials",
    key: "filials",
    role: "all",
  },
  {
    title: "Xodimlar",
    icon: "employee",
    path: "/employee",
    key: "employee",
    role: "all",
  },
  {
    title: "Mahsulotlar",
    icon: "receive-product",
    path: "/sell-products",
    key: "products",
    role: "all",
  },
  {
    title: "Arxiv",
    icon: "archive",
    path: "/archive",
    key: "archive",
    role: "all",
  },
];

export default navigationLinks;
