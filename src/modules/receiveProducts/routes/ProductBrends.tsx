import { Button } from "@nextui-org/react";
import ProductBrendsTable from "../components/ProductBrends/ProductBrendsTable";
import ProductBrendsModal from "../container/ProductBrendsModal";
import { useEffect } from "react";
import useReceiveProduct from "../store";
import useBaseStore from "../../../store/base";
import { getRequest } from "../../../services/getRequest";

const ProductBrends = () => {
  const { setBrandData, setDrawer } = useReceiveProduct();
  const { setRefresh, refresh } = useBaseStore();

  useEffect(() => {
    getRequest({
      url: "http://localhost:3000/brands",
      setData: setBrandData,
    });
  }, [refresh, setBrandData, setRefresh]);

  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <div className="text-xl font-semibold">Mavjud Brend nomlari</div>
        <Button
          onPress={() => setDrawer({ isOpen: true })}
          color="primary"
          className="bg-[#1814F3]"
        >
          Brend yaratish
        </Button>
      </div>

      <ProductBrendsTable />
      <ProductBrendsModal />
    </div>
  );
};

export default ProductBrends;
