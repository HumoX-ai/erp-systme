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
import { IFilial } from "./types";
import SetItemFilial from "../../components/ui/Modal/set-item-filial";
import AddItemFilial from "../../components/ui/Modal/add-item-filial";

const FilialPage = () => {
  const [data, setData] = useState<IFilial[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(false);
  const [selectItem, setSelectItem] = useState<IFilial | undefined>();

  const limit = 15;

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/filial");

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
      await axios.delete(`http://localhost:8080/filial/${id}`);

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
              Filial qo'shish
            </Button>
            <AddItemFilial open={open} setOpen={setOpen} setData={setData} />
            <SetItemFilial
              open={change}
              setOpen={setChange}
              data={data}
              setData={setData}
              selectItem={selectItem!}
            />
          </div>
          <div>
            <Table
              className="overflow-x-scroll max-w-[calc(100vw-50px)] "
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
                <TableColumn>Filial nomi</TableColumn>
                <TableColumn>Manzil</TableColumn>
                <TableColumn>Telefon raqam</TableColumn>
                <TableColumn>Mahsulot soni</TableColumn>
                <TableColumn>Amallar</TableColumn>
              </TableHeader>
              <TableBody
                emptyContent={"Mahsulotlar mavjud emas"}
                isLoading={!newData?.length ? true : false}
              >
                {newData.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.filialName}</TableCell>
                    <TableCell>{item.address}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
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

export default FilialPage;
