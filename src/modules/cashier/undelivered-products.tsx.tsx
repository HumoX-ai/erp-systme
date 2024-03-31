// UndeliveredProducts.tsx
import { useEffect } from "react";
import PageLayout from "../../layout/private-layout";
import { Product } from "./types";
import DeliveredModal from "./components/delivered-modal";
import UndeliveredTable from "./components/undelivered-table";
import { getRequest } from "../../services/getRequest";
import { putRequest } from "../../services/putRequest";
import useBaseStore from "../../store/base";
import useUndeliveredProductsStore from "./store";
import { useNavigate } from "react-router-dom";

const UndeliveredProducts = () => {
  const {
    isModalOpen,
    setIsModalOpen,
    undeliveredProducts,
    setUndeliveredProducts,
    selectedProduct,
    setSelectedProduct,
  } = useUndeliveredProductsStore();

  const navigate = useNavigate();
  const { setRefresh } = useBaseStore();

  useEffect(() => {
    getRequest({
      path: "undelivered-products",
      setData: setUndeliveredProducts,
    });
  }, [setUndeliveredProducts]);

  const filteredUndeliveredProducts = undeliveredProducts.filter(
    (product) => product.status === "undelivered"
  );

  const handleStatusChange = (value: Product) => {
    setSelectedProduct(value);
    setIsModalOpen(true);
  };
  const handleConfirmDelivery = async () => {
    if (selectedProduct) {
      // await axios.patch<Product>(
      //   `http://localhost:3000/undelivered-products/${selectedProduct.id}`,
      //   { status: "delivered" }
      // );
      putRequest({
        path: `undelivered-products/${selectedProduct.id}`,
        values: {
          id: selectedProduct.id,
          orderDate: selectedProduct.orderDate,
          name: selectedProduct.name,
          productName: selectedProduct.productName,
          quantity: selectedProduct.quantity,
          address: selectedProduct.address,
          status: "delivered",
        },
        setRefresh,
      });
      const updatedProducts: Product[] = undeliveredProducts.filter(
        (product) => product.id !== selectedProduct.id
      );
      setUndeliveredProducts(updatedProducts);
      setIsModalOpen(false);
      navigate(0);
    }
  };

  return (
    <div>
      <PageLayout header="Yetkazilmagan mahsulotlar">
        <UndeliveredTable
          handleStatusChange={handleStatusChange}
          filteredUndeliveredProducts={filteredUndeliveredProducts}
        />
        <DeliveredModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedProduct={selectedProduct}
          handleConfirmDelivery={handleConfirmDelivery}
        />
      </PageLayout>
    </div>
  );
};

export default UndeliveredProducts;
