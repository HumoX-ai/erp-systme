import { Button } from "@nextui-org/react";
import ProductBrendsTable from "../components/ProductBrends/ProductBrendsTable";
import ProductBrendsModal from "../container/ProductBrendsModal";
import { useEffect } from "react";
import useReceiveProduct from "../store";
import useBaseStore from "../../../store/base";
import { getRequest } from "../../../services/getRequest";

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
      <div className="flex items-center justify-between py-5">
        <div className="text-xl font-semibold">Mavjud Brend nomlari</div>
        <Button
          onPress={() => setDrawer({ isOpen: true })}
          color="primary"
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
