import statsIcon from "../../../public/icons/stats.svg";
import home from "../../../public/icons/home.svg";
import product from "../../../public/icons/product.svg";
const navigationLinks = [
  {
    title: "Bosh sahifa",
    icon: home,
    path: "/dashboard",
    key: "dashboard",
    role: "all",
  },
  {
    title: "Mahsulotlar",
    icon: product,
    path: "/products",
    key: "products",
    role: "customer",
  },
  {
    title: "Statistikalar",
    icon: statsIcon,
    path: "/stats",
    key: "stats",
    role: "admin",
  },
];

export default navigationLinks;
