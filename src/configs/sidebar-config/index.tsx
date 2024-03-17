const navigationLinks: {
  key: string;
  path: string;
  icon?: "home" | "product" | "statistics" | "receive-product";
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
];

export default navigationLinks;
