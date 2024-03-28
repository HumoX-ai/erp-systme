import { useEffect } from "react";

import ProductBrendsTable from "../components/ProductBrends/ProductBrendsTable";
import ProductBrendsModal from "../container/ProductBrendsModal";
import useReceiveProduct from "../store";
import useBaseStore from "../../../store/base";
import { getRequest } from "../../../services/getRequest";
import { HeaderLayout } from "../../../layout/header";

const ProductBrends = () => {
  const { setBrandData, setDrawer } = useReceiveProduct();
  const { refresh } = useBaseStore();

  useEffect(() => {
    getRequest({
      path: "brands",
      setData: setBrandData,
    });
  }, [refresh, setBrandData]);

  return (
    <div>
      <HeaderLayout
        btnText="Brend qo'shish"
        headerTitle="Mavjud brend nomlari"
        onPress={() => setDrawer({ isOpen: true })}
      />

      <ProductBrendsTable />
      <ProductBrendsModal />
    </div>
  );
};

export default ProductBrends;
