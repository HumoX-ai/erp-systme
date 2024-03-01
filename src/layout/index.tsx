import { memo, useMemo, lazy, Suspense } from "react";
import Cookies from "js-cookie";
import { useAuthStore } from "../store/auth";
import CustomLoading from "../components/ui/Loading/Loading";

const PrivateLayout = lazy(() => import("./PrivateLayout"));
const PublicLayout = lazy(() => import("./PublicLayout"));

const Layout = memo(() => {
  useAuthStore();
  const accessToken = Cookies.get("accessToken");
  const { session } = useAuthStore();

  const AppLayout = useMemo(
    () => (accessToken && session.signedIn ? PrivateLayout : PublicLayout),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [accessToken, session.signedIn]
  );

  return (
    <Suspense fallback={<CustomLoading loading={true} />}>
      <AppLayout />
    </Suspense>
  );
});

export default Layout;
