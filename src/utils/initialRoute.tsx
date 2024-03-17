import { Navigate, Route, Routes } from "react-router-dom";

export const InitialRoute = ({ path }: { path: string }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate replace={true} to={path} />}
      />
    </Routes>
  );
};
