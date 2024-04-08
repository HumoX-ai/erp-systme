import { Tab, Tabs } from "@nextui-org/react";
import WarehouseOrder from "./WarehouseOrder";
import RecieveProducts from "./RecieveProducts";

const RecieveLayout = () => {
  return (
    <div className="py-3.5">
      <Tabs color="primary" radius="full">
        <Tab key="orders" title="Buyurtmalar">
          <WarehouseOrder />
        </Tab>
        <Tab key="checkProducts" title="Olib kelingan buyurtmalar">
          <RecieveProducts />
        </Tab>
      </Tabs>
    </div>
  );
};

export default RecieveLayout;
