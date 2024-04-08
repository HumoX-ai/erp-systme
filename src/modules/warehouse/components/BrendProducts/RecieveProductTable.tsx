import { Image } from "@nextui-org/react";
import { CustomTable } from "../../../../components";
import useReceiveProduct from "../../store";
import { BrandProductDataTypes } from "../../types";
import { brandProductFK } from "../../constants";


const RecieveProductTable = () => {
  const { brandProductData } = useReceiveProduct();


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
        item?.image ? (
          <Image
            className="w-14 h-14 object-contain"
            width={50}
            alt="Receive-product-img!"
            src={item?.image as string}
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
      label: "Modeli",
    },
  ];

  return (
    <CustomTable columns={columns} rows={brandProductData} isStriped={true} />
  );
};

export default RecieveProductTable;
