import { ScrollShadow, Spinner } from "@nextui-org/react";
import SetItemsFilial from "../components/set-item-filial";
import { useEffect } from "react"; // useState import qilindi
import AddItemFilial from "../components/add-item-filial";
import FilialTable from "../components/filial-table";
import { getRequest } from "../../../services/getRequest";
import { deleteRequest } from "../../../services/deleteRequest";
import useFilialStore from "../store";
import { HeaderLayout } from "../../../layout/header";

const Filial = () => {
  const { setData, setOpen, setChange, selectItem, setIsLoading, isLoading } =
    useFilialStore();

  const getItems = async () => {
    try {
      getRequest({ path: "manager3/filial", setData: setData });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, [setData]);

  const deleteItem = async (id: number) => {
    try {
      setIsLoading(true); // Loaderning ko'rinishini boshlatish
      await deleteRequest({
        path: `manager3/filial/${id}`,
        setRefresh: setChange,
      });
      getItems();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Loaderning ko'rinishini to'xtatish
    }
  };

  return (
    <div>
      <ScrollShadow className="pt-6 h-[90vh]" visibility="bottom" size={5}>
        <HeaderLayout
          isArrow={true}
          btnText="Filial qo'shish"
          headerTitle="Mavjud filiallar ro'yxati"
          onPress={() => setOpen(true)}
        />
        <AddItemFilial />
        <SetItemsFilial selectItem={selectItem!} />
        <FilialTable deleteItem={deleteItem} />
      </ScrollShadow>
      {isLoading && <Spinner className="absolute top-1/2 left-1/2" />}
    </div>
  );
};

export default Filial;
