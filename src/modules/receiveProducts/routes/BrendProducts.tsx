import { useEffect } from "react";
import { Button } from "@nextui-org/react";

import BrendProductTable from "../components/BrendProducts/BrendProductTable";
import { getRequest } from "../../../services/getRequest";
import useReceiveProduct from "../store";
import useBaseStore from "../../../store/base";
import BrendProductModal from "../container/BrendProductModal";

const BrendProducts = () => {
  const { setBrandProductData, setDrawer } = useReceiveProduct();
  const { setRefresh, refresh } = useBaseStore();

  useEffect(() => {
    getRequest({
      url: "http://localhost:3000/brand-products",
      setData: setBrandProductData,
    });
  }, [refresh, setBrandProductData, setRefresh]);

  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <div className="text-xl font-semibold">Mavjud Brend nomlari</div>
        <Button
          onPress={() => setDrawer({ isOpen: true })}
          color="primary"
          className="bg-[#1814F3]"
        >
          Mahsulot qo'shish
        </Button>
      </div>

      <BrendProductTable />
      <BrendProductModal />
    </div>
  );
};

export default BrendProducts;
