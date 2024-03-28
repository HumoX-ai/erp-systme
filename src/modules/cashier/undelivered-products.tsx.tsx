// UndeliveredProducts.tsx
import { useEffect, useState } from "react";
import PageLayout from "../../layout/private-layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Product } from "./types";
import DeliveredModal from "./components/delivered-modal";
import UndeliveredTable from "./components/undelivered-table";

const UndeliveredProducts = () => {
  const [undeliveredProducts, setUndeliveredProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const response = axios.get<Product[]>(
      "http://localhost:8080/undelivered-products"
    );
    response.then((data) => setUndeliveredProducts(data.data));
    response.catch((error) => console.log(error));
  }, []);

  const filteredUndeliveredProducts = undeliveredProducts.filter(
    (product) => product.status === "undelivered"
  );

  const handleStatusChange = (value: Product) => {
    setSelectedProduct(value);
    setIsModalOpen(true);
  };
  const handleConfirmDelivery = async () => {
    if (selectedProduct) {
      await axios.patch<Product>(
        `http://localhost:8080/undelivered-products/${selectedProduct.id}`,
        { status: "delivered" }
      );
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
