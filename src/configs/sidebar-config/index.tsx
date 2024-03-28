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
    | "warehouse";
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
    role: "admin",
  },
  {
    title: "Yetkazilmagan",
    icon: "undelivered-products",
    path: "/undelivered-products",
    key: "undelivered-product",
    role: "all",
  },
  {
    title: "Yetkazilgan",
    icon: "delivered-products",
    path: "/delivered-products",
    key: "delivered-product",
    role: "all",
  },
];

export default navigationLinks;
