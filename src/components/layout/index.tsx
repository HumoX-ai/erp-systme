import { memo, useMemo, lazy, Suspense } from "react";
import Cookies from "js-cookie";
import { useAuthStore } from "../../store/auth";

const PrivateLayout = lazy(
  () => import("../../components/layout/PrivateLayout")
);
const PublicLayout = lazy(() => import("../../components/layout/PublicLayout"));

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
    <Suspense fallback={"...loading"}>
      <AppLayout />
    </Suspense>
  );
});

export default Layout;
