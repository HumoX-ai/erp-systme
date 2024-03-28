import { FC, useMemo } from "react";
import { IFilialSetProps } from "../types";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { CustomTable } from "../../../components";

const FilialTable: FC<IFilialSetProps> = ({
  data,
  deleteItem,
  setChange,
  setSelectItem,
}) => {
  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      { label: "#", dataIndex: "index" },
      { label: "Filial nomi", dataIndex: "filialName" },
      { label: "Manzil", dataIndex: "address" },
      { label: "Telefon raqam", dataIndex: "phone" },
      {
        label: "Amallar",
        dataIndex: "actions",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        render: (record: any) => (
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" isIconOnly>
                <BsThreeDotsVertical />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem
                onClick={() => {
                  setSelectItem(record);
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
                  deleteItem(record.id);
                }}
                key="delete"
                className="text-danger"
                color="danger"
              >
                O'chirish
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ),
      },
    ],
    [deleteItem, setChange, setSelectItem]
  );
  return (
    <CustomTable
      columns={columns}
      rows={data}
      onRowClick={(record) =>
        navigate(`/filials/product-table?filialId=${record.id}`)
      }
      isPagination
    />
  );
};

export default FilialTable;
