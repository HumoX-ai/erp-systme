import { useEffect } from "react";

import { getRequest } from "../../../services/getRequest";
import useReceiveProduct from "../store";
import useBaseStore from "../../../store/base";
import OrderProductTable from "../components/BrendProducts/OrderProductTable";
import { Button } from "@nextui-org/react";
import CheckProductModal from "../container/CheckProductModal";

const WarehouseOrder = () => {
  const { setBrandProductData, setDrawer } = useReceiveProduct();
  const { refresh } = useBaseStore();

  useEffect(() => {
    getRequest({
      path: "brand-products",
      setData: setBrandProductData,
    });
  }, [refresh, setBrandProductData]);

  return (
    <div>
      <div className="flex justify-end">
        <Button
          className="mb-4"
          color="primary"
          onPress={() => setDrawer({ isOpen: true })}
        >
          Buyurtma qo'shish
        </Button>
      </div>
      <OrderProductTable />
      <CheckProductModal />
    </div>
  );
};

export default WarehouseOrder;
