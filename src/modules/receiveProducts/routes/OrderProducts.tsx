import { useEffect } from "react";

import { getRequest } from "../../../services/getRequest";
import useReceiveProduct from "../store";
import useBaseStore from "../../../store/base";
import OrderProductTable from "../components/BrendProducts/OrderProductTable";

const OrderProducts = () => {
  const { setBrandProductData } = useReceiveProduct();
  const { refresh } = useBaseStore();

  useEffect(() => {
    getRequest({
      path: "brand-products",
      setData: setBrandProductData,
    });
  }, [refresh, setBrandProductData]);

  return (
    <div>
      <OrderProductTable />
    </div>
  );
};

export default OrderProducts;
