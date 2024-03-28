import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { CustomSearch } from "../../../components/shared/Search/Search";
import { HeaderLayout } from "../../../layout/header";
import WareHouseTable from "../components/WareHouse/WareHouseTable";
import useBaseStore from "../../../store/base";
import { getRequest } from "../../../services/getRequest";
import useWareHouseStore from "../store";

const WareHouse = () => {
  const { setWareHouseData, drawer } = useWareHouseStore();
  const { refresh } = useBaseStore();
  const navigate = useNavigate();

  useEffect(() => {
    getRequest({
      path: "warehouse",
      setData: setWareHouseData,
    });
  }, [refresh, setWareHouseData]);

  return (
    <div>
      <HeaderLayout
        content={
          <CustomSearch placeholder="Qidirish..." size="sm" className="w-1/6" />
        }
        btnText="Mahsulot qo'shish"
        onPress={() => {
          const id = drawer?.initialValues?.id;
          if (id) navigate(`/warehouse/form?id=${id}`);
          navigate("/warehouse/form");
        }}
      />
      <WareHouseTable />
    </div>
  );
};

export default WareHouse;
