import { useEffect } from "react";

import BrendProductTable from "../components/BrendProducts/BrendProductTable";
import { getRequest } from "../../../services/getRequest";
import useReceiveProduct from "../store";
import useBaseStore from "../../../store/base";
import BrendProductModal from "../container/BrendProductModal";
import { HeaderLayout } from "../../../layout/header";

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
      <HeaderLayout
        isArrow={true}
        btnText="Mahsulot qo'shish"
        headerTitle="Mavjud mahsulot nomlari"
        onPress={() => setDrawer({ isOpen: true })}
      />

      <BrendProductTable />
      <BrendProductModal />
    </div>
  );
};

export default BrendProducts;
