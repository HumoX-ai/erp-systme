import { Button, ScrollShadow } from "@nextui-org/react";
import SetItemsFilial from "../components/set-item-filial";
import { useEffect } from "react";
import AddItemFilial from "../components/add-item-filial";
import FilialTable from "../components/filial-table";
import { getRequest } from "../../../services/getRequest";
import { deleteRequest } from "../../../services/deleteRequest";
import useFilialStore from "../store";

const Filial = () => {
  const { data, setData, setOpen, setChange, selectItem } = useFilialStore();

  useEffect(() => {
    const getItems = async () => {
      try {
        getRequest({
          path: "filial",
          setData: setData,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getItems();
  }, [setData]);

  const deleteItem = async (id: number) => {
    try {
      deleteRequest({
        path: `filial/${id}`,
        setRefresh: setChange,
      });
      const newData = data.filter((item) => item.id !== id);
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ScrollShadow className="pt-6 h-[90vh]" visibility="bottom">
        <div className="flex justify-end pb-4">
          <Button color="primary" onClick={() => setOpen(true)}>
            Filial qo'shish
          </Button>
          <AddItemFilial />
          <SetItemsFilial selectItem={selectItem!} />
        </div>

        <FilialTable deleteItem={deleteItem} />
      </ScrollShadow>
    </div>
  );
};

export default Filial;
