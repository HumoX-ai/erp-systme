import { Outlet } from "react-router-dom";
import PageLayout from "../../layout/private-layout";

const WareHouse = () => {
  return (
    <PageLayout header="Omborxona">
      <Outlet />
    </PageLayout>
  );
};

export default WareHouse;
