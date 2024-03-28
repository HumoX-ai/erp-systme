import { Button } from "@nextui-org/react";
import { CustomTable } from "../../../components";
import { Product } from "../types";

const UndeliveredTable = ({
  handleStatusChange,
  filteredUndeliveredProducts,
}: {
  handleStatusChange: (value: Product) => void;
  filteredUndeliveredProducts: Product[];
}) => {
  return (
    <div>
      <CustomTable
        className="pt-6"
        columns={[
          { label: "ID", dataIndex: "id" },
          { label: "Buyurtma berilgan sana", dataIndex: "orderDate" },
          { label: "Mijoz ism-familiyasi", dataIndex: "name" },
          { label: "Mahsulot nomi", dataIndex: "productName" },
          { label: "Mahsulot soni", dataIndex: "quantity" },
          { label: "Yetkaziladigan manzil", dataIndex: "address" },
          {
            label: "Holat",
            dataIndex: "status",
            render: (value) => (
              <Button
                variant="light"
                color="primary"
                onClick={() => handleStatusChange(value)}
              >
                Faol
              </Button>
            ),
          },
        ]}
        rows={filteredUndeliveredProducts}
        onRowClick={(record) => console.log("Clicked on row", record)}
        isPagination={true}
      />
    </div>
  );
};

export default UndeliveredTable;
