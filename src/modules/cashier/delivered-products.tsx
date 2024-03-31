// DeliveredProducts.tsx
import { useEffect, useState } from "react";
import PageLayout from "../../layout/private-layout";
import { Product } from "./types";
import DeliveredTable from "./components/delivered-table";
import { getRequest } from "../../services/getRequest";

const DeliveredProducts = () => {
  const [deliveredProducts, setDeliveredProducts] = useState<Product[]>([]);

  useEffect(() => {
    getRequest({
      path: "undelivered-products",
      setData: setDeliveredProducts,
    });
  }, []);

  const filteredDeliveredProducts = deliveredProducts.filter(
    (product) => product.status === "delivered"
  );

  return (
    <div>
      <PageLayout header="Yetkazilgan mahsulotlar">
        <DeliveredTable filteredDeliveredProducts={filteredDeliveredProducts} />
      </PageLayout>
    </div>
  );
};

export default DeliveredProducts;
