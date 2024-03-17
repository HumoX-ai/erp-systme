import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { BsThreeDotsVertical } from "react-icons/bs";

const TableDropDown = ({
  onEdit,
  onDelete,
}: {
  onEdit: () => void;
  onDelete: () => void;
}) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" isIconOnly>
          <BsThreeDotsVertical />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          onClick={onEdit}
          key="edit"
          color="warning"
          className="text-warning"
        >
          Tahrirlash
        </DropdownItem>
        <DropdownItem
          onClick={onDelete}
          key="delete"
          className="text-danger"
          color="danger"
        >
          O'chirish
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default TableDropDown;
