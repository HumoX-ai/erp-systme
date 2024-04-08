import { Tab, Tabs } from "@nextui-org/react";
import OrderProducts from "./OrderProducts";
import CheckProducts from "./checkProducts";

const RecieveLayout = () => {
  return (
    <div className="py-3.5">
      <Tabs color="primary" radius="full" >
        <Tab key="orders" title="Buyurtmalar">
          <OrderProducts />
        </Tab>
        <Tab key="checkProducts" title="Tekshiruv">
          <CheckProducts />
        </Tab>
      </Tabs>
    </div>
  );
};

export default RecieveLayout;
