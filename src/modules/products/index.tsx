import { useEffect, useState } from "react";
import axios from "axios";
import { BsThreeDotsVertical } from "react-icons/bs";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
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
import ModalComponent from "../../components/ui/Modal/DeleteItem";
import { IProduct } from "./types";
import SetItems from "../../components/ui/Modal/SetItems";

const Product = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(false);
  const [selectItem, setSelectItem] = useState<IProduct>();

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

  const deleteItem = async (id: number) => {
    try {
      await axios.delete(
        `https://65088b8356db83a34d9c7d66.mockapi.io/api/v1/login/${id}`
      );

      const newData = data.filter((item) => item.id !== id);
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  const newData = data.slice((page - 1) * limit, page * limit);

  return (
    <ScrollShadow className="p-6 h-[90vh]" visibility="bottom">
      {!data ? (
        <Spinner className="h-[90vh] flex items-center justify-center" />
      ) : (
        <>
          <div className="flex justify-end pb-4">
            <Button color="primary" onClick={() => setOpen(true)}>
              Maishiy texnika qo'shish
            </Button>
            <SetItems
              open={change}
              setOpen={setChange}
              data={data}
              setData={setData}
              selectItem={selectItem!}
            />
            <ModalComponent open={open} setOpen={setOpen} setData={setData} />
          </div>
          <div className="overflow-x-scroll w-96">
            <Table
              aria-label="table"
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
            >
              <TableHeader>
                <TableColumn>#</TableColumn>
                <TableColumn>Mahsulot nomi</TableColumn>
                <TableColumn>Mahsulot soni</TableColumn>
                <TableColumn>Tan narxi</TableColumn>
                <TableColumn>Sotilish narxi</TableColumn>
                <TableColumn>Amallar</TableColumn>
              </TableHeader>
              <TableBody
                emptyContent={"Mahsulotlar mavjud emas"}
                isLoading={!newData?.length ? true : false}
              >
                {newData.map((item: IProduct, index) => (
                  <TableRow key={item.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.product}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.price}$</TableCell>
                    <TableCell>{item.sold_price}$</TableCell>
                    <TableCell>
                      <Dropdown>
                        <DropdownTrigger>
                          <Button variant="bordered" isIconOnly>
                            <BsThreeDotsVertical />
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                          <DropdownItem
                            onClick={() => {
                              setSelectItem(item);
                              setChange(true);
                            }}
                            key="edit"
                            color="warning"
                            className="text-warning"
                          >
                            Tahrirlash
                          </DropdownItem>
                          <DropdownItem
                            onClick={() => {
                              deleteItem(item.id);
                            }}
                            key="delete"
                            className="text-danger"
                            color="danger"
                          >
                            O'chirish
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </>
      )}
    </ScrollShadow>
  );
};

export default Product;
