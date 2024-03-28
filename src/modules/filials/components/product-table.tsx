import { useEffect, useState } from "react";
import { IProduct } from "../types";
import axios from "axios";
import ProductFilter from "./product-filter";
import { CustomTable } from "../../../components";

const ProductTable = ({ filialName }: { filialName: string }) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [filteredData, setFilteredData] = useState<IProduct[]>([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/products?filialName=${filialName}`
        );
        setData(response.data);
        setFilteredData(response.data);
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
    setPage(1);
  };

  const newData = filteredData.slice((page - 1) * limit, page * limit);

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
        rows={newData}
        onRowClick={(record, rows) => console.log(record, rows)}
        isPagination={true}
        className="overflow-x-scroll max-w-[calc(100vw-50px)] mt-8"
      />
    </>
  );
};

export default ProductTable;
