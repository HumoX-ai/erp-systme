import { useEffect } from "react";

import useReceiveProduct from "../store";
import useBaseStore from "../../../store/base";
import { getRequest } from "../../../services/getRequest";
import { Button } from "@nextui-org/react";
import RecieveProductTable from "../components/BrendProducts/RecieveProductTable";

const RecieveProducts = () => {
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
      <div className="flex justify-end">
        <Button className="mb-4" color="primary">
          Tasdiqlash
        </Button>
      </div>
      <RecieveProductTable />
    </div>
  );
};

export default RecieveProducts;
