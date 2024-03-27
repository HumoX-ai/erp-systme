import { CustomTable } from "../../../components";
import { Product } from "../types";

const DeliveredTable = ({
  filteredDeliveredProducts,
}: {
  filteredDeliveredProducts: Product[];
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
            render: () => <h1 className="text-green-500">Yetkazilgan</h1>,
          },
        ]}
        rows={filteredDeliveredProducts}
        onRowClick={(record) => console.log("Clicked on row", record)}
        isPagination={true}
      />
    </div>
  );
};

export default DeliveredTable;
