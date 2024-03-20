import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuthStore } from "../../store/auth";

const ProtectedRoute = () => {
  const { session } = useAuthStore();

  const accessToken = Cookies.get("accessToken");

  if (!accessToken || !session.signedIn) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
