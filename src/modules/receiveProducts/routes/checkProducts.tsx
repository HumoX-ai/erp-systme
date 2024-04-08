import { useEffect } from "react";

import useReceiveProduct from "../store";
import useBaseStore from "../../../store/base";
import { getRequest } from "../../../services/getRequest";
import CheckProductTable from "../components/BrendProducts/CheckProductTable";
import { Button } from "@nextui-org/react";
import CheckProductModal from "../container/CheckProductModal";
import { ToastContainer } from "react-toastify";

const CheckProducts = () => {
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
          Mahsulot qo'shish
        </Button>
      </div>
      <CheckProductTable />
      <CheckProductModal />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default CheckProducts;
