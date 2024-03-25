import { useNavigate } from "react-router-dom";
import { Image, Switch } from "@nextui-org/react";

import { CustomTable } from "../../../../components";
import TableDropDown from "../../../../components/shared/TableDropDown/table-drop-down";
import useBaseStore from "../../../../store/base";
import { deleteRequest } from "../../../../services/deleteRequest";
import useWareHouseStore from "../../store";
import { WareHouseDataTypes } from "../../types";
import { wareHouseFK } from "../../constants";

const WareHouseTable = () => {
  const { wareHouseData } = useWareHouseStore();
  const { setRefresh } = useBaseStore();
  const navigate = useNavigate();

  const columns = [
    {
      dataIndex: "number",
      label: "#",
      render: (
        _item: WareHouseDataTypes,
        _rows: WareHouseDataTypes[],
        index: number
      ) => index,
    },
    {
      dataIndex: wareHouseFK.key8,
      label: "Mahsulot rasmi",
      render: (item: WareHouseDataTypes) =>
        item?.image ? (
          <Image
            width={50}
            height={50}
            alt="Does not upload!"
            src={item?.image as string}
            className="w-14 h-14"
          />
        ) : (
          "Rasm yuklanmadi!"
        ),
    },
    {
      dataIndex: wareHouseFK.key1,
      label: "Mahsulot nomi",
    },
    {
      dataIndex: wareHouseFK.key2,
      label: "Tan narxi",
    },
    {
      dataIndex: wareHouseFK.key3,
      label: "Sotuv narxi",
    },
    {
      dataIndex: wareHouseFK.key4,
      label: "Mahsulot brandi",
      render: () => "BREND",
    },
    {
      dataIndex: wareHouseFK.key5,
      label: "Mahsulot soni",
    },
    {
      dataIndex: wareHouseFK.key6,
      label: "Rangi",
    },
    {
      dataIndex: wareHouseFK.key7,
      label: "Izoh",
    },
    {
      dataIndex: wareHouseFK.key9,
      label: "Muzlatish",
      render: (item: WareHouseDataTypes) => (
        <Switch defaultSelected={item?.status} aria-label="Automatic updates" />
      ),
    },
    {
      dataIndex: "action",
      label: "Holat",
      render: (item: WareHouseDataTypes) => {
        return (
          <TableDropDown
            onDelete={() =>
              item?.id &&
              deleteRequest({
                path: `warehouse/${item?.id}`,
                setRefresh: setRefresh,
              })
            }
            onEdit={() => {
              navigate(`/warehouse/form?editId=${item?.id}`);
            }}
          />
        );
      },
    },
  ];

  return (
    <CustomTable columns={columns} rows={wareHouseData} isStriped={true} />
  );
};

export default WareHouseTable;
