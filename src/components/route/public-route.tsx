import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/auth";

const PublicRoute = () => {
  const { session } = useAuthStore();

  const accessToken = Cookies.get("accessToken");

  return accessToken && session.signedIn ? (
    <Navigate to={"/dashboard"} />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
