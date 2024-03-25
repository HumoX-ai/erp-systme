import { useEffect } from "react";
import { Button } from "@nextui-org/react";

import BrendProductTable from "../components/BrendProducts/BrendProductTable";
import { getRequest } from "../../../services/getRequest";
import useReceiveProduct from "../store";
import useBaseStore from "../../../store/base";
import BrendProductModal from "../container/BrendProductModal";
import { BackArrow } from "../../../components/shared/BackArrow/back-arrow";

const BrendProducts = () => {
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
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center gap-5">
          <BackArrow route={-1} />
          <div className="text-xl font-semibold">Mavjud Brend nomlari</div>
        </div>
        <Button onPress={() => setDrawer({ isOpen: true })} color="primary">
          Mahsulot qo'shish
        </Button>
      </div>

      <BrendProductTable />
      <BrendProductModal />
    </div>
  );
};

export default BrendProducts;
