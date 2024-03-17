import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/route/protected-route";
import PublicRoute from "../components/route/public-route";
import { protectedRoutes } from "../configs/routes/public.routes";
import publicRoutes from "../configs/routes/private.routes";
import Page404 from "./404";
import { CustomLoading } from "../components";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute />}>
        <Route path="/" element={<Navigate replace to={"/login"} />} />
        {publicRoutes.map(({ path, component: Component }, index) => (
          <Route path={path} element={<Component />} key={index} />
        ))}
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate replace to={"/dashboard"} />} />
        {protectedRoutes.map(
          ({ component: Component, key, path, children }, index) => {
            if (children?.length) {
              return (
                <Route key={key + index} path={path} element={<Component />}>
                  {children.map(
                    ({ childrenPath, component: Component }, index) => {
                      return (
                        <Route
                          path={`${path}${childrenPath}`}
                          element={<Component />}
                          key={index}
                        />
                      );
                    }
                  )}
                </Route>
              );
            } else {
              return (
                <Route key={key + index} path={path} element={<Component />} />
              );
            }
          }
        )}
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

const Views = () => {
  return (
    <Suspense fallback={<CustomLoading loading={true} />}>
      <AllRoutes />
    </Suspense>
  );
};

export default Views;
