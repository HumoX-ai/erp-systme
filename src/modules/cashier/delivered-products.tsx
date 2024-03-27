// DeliveredProducts.tsx
import { useEffect, useState } from "react";
import PageLayout from "../../layout/private-layout";
import axios from "axios";
import { Product } from "./types";
import DeliveredTable from "./components/delivered-table";

const DeliveredProducts = () => {
  const [deliveredProducts, setDeliveredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const response = axios.get<Product[]>(
      "http://localhost:8080/undelivered-products"
    );
    response.then((data) => setDeliveredProducts(data.data));
    response.catch((error) => console.log(error));
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
