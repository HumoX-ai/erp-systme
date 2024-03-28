import { CustomTable } from "../../../components";
import { WareHouseDataTypes } from "../../warehouse/types";

export const ArchiveProductTable = () => {
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
      dataIndex: "",
      label: "Mijoz ism va familasi",
    },
    {
      dataIndex: "",
      label: "Telefon raqami",
    },
    {
      dataIndex: "",
      label: "Manzili",
    },
    {
      dataIndex: "",
      label: "Mahsulot turi",
    },
    {
      dataIndex: "",
      label: "Mahsulot nomi",
    },
    {
      dataIndex: "",
      label: "Mahsulot soni",
    },
    {
      dataIndex: "",
      label: "Umumiy narxi",
    },
  ];

  return <CustomTable columns={columns} rows={[]} selectionMode="none" />;
};
