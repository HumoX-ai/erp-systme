/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Pagination,
  ScrollShadow,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import { useEffect, useState } from "react";
import axios from "axios";

const AddItem = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  const limit = 15;

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(
          "https://65088b8356db83a34d9c7d66.mockapi.io/api/v1/login"
        );

        setPages(Math.ceil(response.data.length / limit));
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getItems();
  }, []);

  const newData = data.slice((page - 1) * limit, page * limit);

  return (
    <ScrollShadow className="p-6 w-auto h-[90vh]" visibility="bottom">
      asdasd
      {!data ? (
        <Spinner className="h-[90vh] flex items-center justify-center" />
      ) : (
        <>
          <Table
            className="w-full h-full overflow-auto "
            aria-label="Example table with static content"
            selectionMode="multiple"
            bottomContent={
              <div className="flex w-full justify-end">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
            classNames={{
              wrapper: "min-h-[222px]",
            }}
          >
            <TableHeader>
              <TableColumn>#</TableColumn>
              <TableColumn>Mahsulot nomi</TableColumn>
              <TableColumn>Mahsulot soni</TableColumn>
              <TableColumn>Tan narxi</TableColumn>
              <TableColumn>Sotilish narxi</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"Mahsulotlar mavjud emas"}>
              {newData.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.product}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.sold_price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </ScrollShadow>
  );
};

export default AddItem;
