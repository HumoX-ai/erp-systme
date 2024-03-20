import { CustomTable } from "../../../../components";
import TableDropDown from "../../../../components/shared/TableDropDown/table-drop-down";
import useBaseStore from "../../../../store/base";
import { deleteRequest } from "../../../../services/deleteRequest";
import useReceiveProduct from "../../store";
import { BrandProductDataTypes } from "../../types";
import { Image } from "@nextui-org/react";

const BrendProductTable = () => {
  const { brandProductData, setDrawer } = useReceiveProduct();
  const { setRefresh } = useBaseStore();

  const columns = [
    {
      dataIndex: "number",
      label: "#",
      render: (
        _item: BrandProductDataTypes,
        _rows: BrandProductDataTypes[],
        index: number
      ) => index,
    },
    {
      dataIndex: "image",
      label: "Mahsulot rasmi",
      render: (item: BrandProductDataTypes) =>
        item?.image ? (
          <Image
            width={50}
            alt="Does not upload!"
            src={item?.image as string}
          />
        ) : (
          "Rasm yuklanmadi!"
        ),
    },
    {
      dataIndex: "product_name",
      label: "Mahsulot nomi",
    },
    {
      dataIndex: "price",
      label: "Tan narxi",
    },
    {
      dataIndex: "sell_price",
      label: "Sotuv narxi",
    },
    {
      dataIndex: "brand_name",
      label: "Mahsulot brandi",
    },
    {
      dataIndex: "count",
      label: "Mahsulot soni",
    },
    {
      dataIndex: "action",
      label: "Holat",
      render: (values: BrandProductDataTypes) => {
        return (
          <TableDropDown
            onDelete={() =>
              values?.id &&
              deleteRequest({
                url: `http://localhost:3000/brand-products/${values?.id}`,
                setRefresh: setRefresh,
              })
            }
            onEdit={() => {
              setDrawer({
                isOpen: true,
                initialValues: values,
              });
            }}
          />
        );
      },
    },
  ];

  return (
    <CustomTable columns={columns} rows={brandProductData} isStriped={true} />
  );
};

export default BrendProductTable;
