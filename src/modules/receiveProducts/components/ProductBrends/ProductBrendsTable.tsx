import { useNavigate } from "react-router-dom";

import { CustomTable } from "../../../../components";
import TableDropDown from "../../../../components/shared/TableDropDown/table-drop-down";
import useBaseStore from "../../../../store/base";
import { deleteRequest } from "../../../../services/deleteRequest";
import useReceiveProduct from "../../store";
import { BrandDataTypes } from "../../types";

const ProductBrendsTable = () => {
  const { brandData, setDrawer } = useReceiveProduct();
  const { setRefresh } = useBaseStore();
  const navigate = useNavigate();

  const columns = [
    {
      dataIndex: "number",
      label: "#",
      render: (_item: BrandDataTypes, _rows: BrandDataTypes[], index: number) =>
        index,
    },
    {
      dataIndex: "brand_name",
      label: "Brend Nomlari",
    },
    {
      dataIndex: "children",
      label: "Mahsulot soni",
      render: (values: BrandDataTypes) => values?.children?.length || 0,
    },
    {
      dataIndex: "action",
      label: "Holat",
      render: (values: BrandDataTypes) => {
        return (
          <TableDropDown
            onDelete={() =>
              values?.id &&
              deleteRequest({
                url: `http://localhost:3000/brands/${values?.id}`,
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
    <CustomTable
      columns={columns}
      rows={brandData}
      selectionMode="none"
      onRowClick={(items) =>
        navigate(`/receive-product/products?brand_id=${items?.id}`)
      }
    />
  );
};

export default ProductBrendsTable;
