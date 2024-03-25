import { useEffect } from "react";

import { HeaderLayout } from "../../../layout/header";
import WareHouseFormComponent from "../components/WareHouseForm/WareHouseForm";
import useWareHouseStore from "../store";
import { getRequest } from "../../../services/getRequest";
import useSearchparams from "../../../utils/hooks/useSearchParams";
import { brandProductIV } from "../constants";
import { BackArrow } from "../../../components/shared/BackArrow/back-arrow";

const WareHouseForm = () => {
  const { setBrandSelectData, setWareHouseFormData, wareHouseFormData } =
    useWareHouseStore();
  const { searchParams } = useSearchparams();

  useEffect(() => {
    getRequest({
      path: "brands",
      setData: setBrandSelectData,
    });

    if (searchParams?.editId) {
      getRequest({
        path: `warehouse/${searchParams?.editId}`,
        setData: setWareHouseFormData,
      });
    } else {
      setWareHouseFormData(brandProductIV);
    }
  }, [searchParams?.editId, setBrandSelectData, setWareHouseFormData]);

  return (
    <>
      <HeaderLayout
        headerTitle={
          <div className="flex items-center gap-5">
            <BackArrow route={-1} />
            {wareHouseFormData?.id
              ? "Mahsulot tahrirlash"
              : "Mahsulot qo’shish"}
          </div>
        }
      />

      <WareHouseFormComponent />
    </>
  );
};

export default WareHouseForm;
