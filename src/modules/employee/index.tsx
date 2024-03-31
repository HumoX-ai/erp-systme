import { useEffect, useState } from "react";
import { CustomTable } from "../../components";
import PageLayout from "../../layout/private-layout";
import { getRequest } from "../../services/getRequest";

const Employee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    try {
      getRequest({
        path: "employees",
        setData: setEmployees,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <PageLayout header="Xodimlar bo'limi">
        <CustomTable
          className="pt-6"
          columns={[
            { label: "ID", dataIndex: "id" },
            { label: "Ism-familiya", dataIndex: "name" },
            { label: "Tug'ilgan sanasi", dataIndex: "birthDate" },
            { label: "Ishga kirish sanasi", dataIndex: "comeDate" },
            { label: "Maosh", dataIndex: "cost" },
          ]}
          rows={employees}
          onRowClick={(record) => console.log("Clicked on row", record)}
          isPagination={true}
        />
      </PageLayout>
    </div>
  );
};

export default Employee;
