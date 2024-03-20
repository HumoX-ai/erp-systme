import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../types";
import ProductFilter from "./product-filter";

const ProductTable = ({ filialName }: { filialName: string }) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [filteredData, setFilteredData] = useState<IProduct[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const limit = 10;

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/products?filialName=${filialName}`
        );
        setData(response.data);
        setFilteredData(response.data);
        setPages(Math.ceil(response.data.length / limit));
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
    setPages(Math.ceil(filtered.length / limit));
    setPage(1);
  };

  const newData = filteredData.slice((page - 1) * limit, page * limit);

  return (
    <>
      <ProductFilter onSearch={handleSearch} />
      <Table
        className="overflow-x-scroll max-w-[calc(100vw-50px)] mt-8"
        aria-label="table"
        isStriped
        bottomContent={
          <div className="flex w-full justify-end">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              initialPage={page}
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
      >
        <TableHeader>
          <TableColumn>#</TableColumn>
          <TableColumn>Mahsulot</TableColumn>
          <TableColumn>Soni</TableColumn>
          <TableColumn>Narxi</TableColumn>
          <TableColumn>Sotuv narxi</TableColumn>
        </TableHeader>
        <TableBody
          emptyContent={"Mahsulotlar mavjud emas"}
          isLoading={!data?.length ? true : false}
        >
          {newData.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.product}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.sold_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ProductTable;
