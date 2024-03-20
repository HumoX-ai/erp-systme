import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { IFilialSetProps } from "../types";
import { useNavigate } from "react-router-dom";

const FilialTable = ({
  data,
  page,
  pages,
  setPage,
  deleteItem,
  setChange,
  setSelectItem,
}: IFilialSetProps) => {
  const navigate = useNavigate();
  return (
    <Table
      className="overflow-x-scroll max-w-[calc(100vw-50px)] "
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
        <TableColumn>Filial nomi</TableColumn>
        <TableColumn>Manzil</TableColumn>
        <TableColumn>Telefon raqam</TableColumn>
        <TableColumn>Mahsulot soni</TableColumn>
        <TableColumn>Amallar</TableColumn>
      </TableHeader>
      <TableBody
        emptyContent={"Mahsulotlar mavjud emas"}
        isLoading={!data?.length ? true : false}
      >
        {data.map((item, index) => (
          <TableRow
            key={item.id}
            onClick={() => navigate(`/filials/${item.id}`)}
            className="cursor-pointer"
          >
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
                      deleteItem(item.id!);
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
  );
};

export default FilialTable;
