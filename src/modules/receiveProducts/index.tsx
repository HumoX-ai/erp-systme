import { Outlet } from "react-router-dom";
import PageLayout from "../../layout/private-layout";
import { InitialRoute } from "../../utils/initialRoute";

const ReceiveProduct = () => {
  return (
    <PageLayout header="Mahsulotlarni qabul qilish">
      <Outlet />

      <InitialRoute path="/receive-product/brands" />
    </PageLayout>
  );
};

export default ReceiveProduct;
