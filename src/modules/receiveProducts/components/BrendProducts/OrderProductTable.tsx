import { Image } from "@nextui-org/react";
import { CustomTable } from "../../../../components";
import TableDropDown from "../../../../components/shared/TableDropDown/table-drop-down";
import useBaseStore from "../../../../store/base";
import { deleteRequest } from "../../../../services/deleteRequest";
import useReceiveProduct from "../../store";
import { BrandProductDataTypes } from "../../types";
import { brandProductFK } from "../../constants";

const OrderProductTable = () => {
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
      dataIndex: brandProductFK.key1,
      label: "Mahsulot rasmi",
      render: (item: BrandProductDataTypes) =>
        item?.background_img ? (
          <Image
            className="w-14 h-14 object-contain"
            width={50}
            alt="Receive-product-img!"
            src={item?.background_img as string}
          />
        ) : (
          "Rasm yuklanmadi!"
        ),
    },
    {
      dataIndex: brandProductFK.key2,
      label: "Mahsulot nomi",
    },
    {
      dataIndex: brandProductFK.key3,
      label: "Tan narxi",
    },
    {
      dataIndex: brandProductFK.key4,
      label: "Sotuv narxi",
    },
    {
      dataIndex: brandProductFK.key5,
      label: "Mahsulot soni",
    },
    {
      dataIndex: brandProductFK.key6,
      label: "Mahsulot brandi",
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
                path: `brand-products/${values?.id}`,
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

export default OrderProductTable;
