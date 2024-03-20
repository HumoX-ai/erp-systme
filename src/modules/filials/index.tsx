import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Button, ScrollShadow } from "@nextui-org/react";
import { IFilial } from "./types";
import AddItemFilial from "./components/add-item-filial";
import PageLayout from "../../layout/private-layout";
import FilialTable from "./components/filial-table";
import SetItemsFilial from "./components/set-item-filial";

const FilialPage = () => {
  const [data, setData] = useState<IFilial[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(false);
  const [selectItem, setSelectItem] = useState<IFilial>();

  const limit = 10;

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/filial");

        setPages(Math.ceil(response.data.length / limit));
        setData(response.data);
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

  const newData = data.slice((page - 1) * limit, page * limit);

  return (
    <PageLayout header="Filiallar">
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
              data={newData}
              page={page}
              pages={pages}
              setPage={setPage}
              deleteItem={deleteItem}
              setChange={setChange}
              setSelectItem={setSelectItem}
            />
          </>
        )}
      </ScrollShadow>
    </PageLayout>
  );
};

export default FilialPage;
