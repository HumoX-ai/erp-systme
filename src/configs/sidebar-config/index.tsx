const navigationLinks: {
  key: string;
  path: string;
  icon?:
    | "home"
    | "product"
    | "statistics"
    | "receive-product"
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
    title: "Mahsulotlar",
    icon: "product",
    path: "/products",
    key: "products",
    role: "customer",
  },
  {
    title: "Statistikalar",
    icon: "statistics",
    path: "/stats",
    key: "stats",
    role: "admin",
  },
  {
    title: "Mahsulotni Qabul qilish",
    icon: "receive-product",
    path: "/receive-product",
    key: "receive-product",
    role: "admin",
  },
  {
    title: "Omborxona",
    icon: "warehouse",
    path: "/warehouse",
    key: "warehouse",
    role: "admin",
  },
  {
    title: "Mahsulotlar",
    icon: "receive-product",
    path: "/sell-products",
    key: "products",
    role: "admin",
  },
  {
    title: "Arxiv",
    icon: "archive",
    path: "/archive",
    key: "archive",
    role: "admin",
  },
];

export default navigationLinks;
