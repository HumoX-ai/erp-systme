import PageLayout from "../../layout/private-layout";
import { InitialRoute } from "../../utils/initialRoute";
import RecieveLayout from "./routes";

const ReceiveProduct = () => {
  return (
    <PageLayout header="Mahsulotlarni qabul qilish">
      <RecieveLayout />

      <InitialRoute path="/receive-product/products" />
    </PageLayout>
  );
};

export default ReceiveProduct;
