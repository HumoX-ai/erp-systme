import { useMemo } from "react";
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
import useFilialStore from "../store";

const FilialTable = ({ deleteItem }: { deleteItem: (id: number) => void }) => {
  const { data, setChange, setSelectItem, setOpenModal } = useFilialStore();

  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      { label: "#", dataIndex: "index" },
      { label: "Filial nomi", dataIndex: "name" },
      { label: "Manzil", dataIndex: "address" },
      { label: "Telefon raqam", dataIndex: "phone_number" },
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
                  setOpenModal(true);
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
    [deleteItem, setChange, setSelectItem, setOpenModal]
  );
  return (
    <>
      <CustomTable
        columns={columns}
        rows={data}
        onRowClick={(record) =>
          navigate(`/filials/product-table?filialId=${record.id}`)
        }
        isPagination
      />
    </>
  );
};

export default FilialTable;
