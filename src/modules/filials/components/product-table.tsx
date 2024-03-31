import { useEffect, useState } from "react";
import { IProduct } from "../types";
import ProductFilter from "./product-filter";
import { CustomTable } from "../../../components";
import { getRequest } from "../../../services/getRequest";

const ProductTable = ({ filialName }: { filialName: string }) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [filteredData, setFilteredData] = useState<IProduct[]>([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        getRequest({
          path: `products?filialName=${filialName}`,
          setData: setData,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, [filialName]);

  const handleSearch = (searchTerm: string) => {
    const filtered = data.filter((item) =>
      item.product.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const columns = [
    { label: "#", dataIndex: "id" },
    { label: "Mahsulot", dataIndex: "product" },
    { label: "Soni", dataIndex: "quantity" },
    { label: "Narxi", dataIndex: "price" },
    { label: "Sotuv narxi", dataIndex: "sold_price" },
  ];

  return (
    <>
      <ProductFilter onSearch={handleSearch} />
      <CustomTable
        columns={columns}
        rows={filteredData.length > 0 ? filteredData : data}
        onRowClick={(record, rows) => console.log(record, rows)}
        isPagination={true}
        className="overflow-x-scroll max-w-[calc(100vw-50px)] mt-8"
      />
    </>
  );
};

export default ProductTable;
