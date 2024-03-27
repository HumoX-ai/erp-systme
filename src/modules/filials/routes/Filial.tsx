import { Button, ScrollShadow, Spinner } from "@nextui-org/react";
import SetItemsFilial from "../components/set-item-filial";
import { useEffect, useState } from "react";
import axios from "axios";
import { IFilial } from "../types";
import AddItemFilial from "../components/add-item-filial";
import FilialTable from "../components/filial-table";
import { getRequest } from "../../../services/getRequest";

const Filial = () => {
  const [data, setData] = useState<IFilial[]>([]);
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(false);
  const [selectItem, setSelectItem] = useState<IFilial>();

  useEffect(() => {
    const getItems = async () => {
      try {
        getRequest({
          url: "http://localhost:8080/filial",
          setData: setData,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getItems();
  }, []);

  const deleteItem = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/filial/${id}`);
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
          <AddItemFilial open={open} setOpen={setOpen} setData={setData} />
          <SetItemsFilial
            data={data}
            setData={setData}
            setOpen={setChange}
            open={change}
            selectItem={selectItem!}
          />
        </div>
        {data.length === 0 ? (
          <Spinner className="h-[90vh] flex items-center justify-center" />
        ) : (
          <>
            <FilialTable
              data={data}
              deleteItem={deleteItem}
              setChange={setChange}
              setSelectItem={setSelectItem}
            />
          </>
        )}
      </ScrollShadow>
    </div>
  );
};

export default Filial;
