import { Button, ScrollShadow, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IFilial } from "../types";
import ProductTable from "../components/product-table";
import AddItemProduct from "../components/add-item-product";
import useSearchparams from "../../../utils/hooks/useSearchParams";
import { getRequest } from "../../../services/getRequest";

const FilialProductPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { setSearchParams, searchParams } = useSearchparams();
  const [data, setData] = useState<IFilial | null>(null);

  useEffect(() => {
    const getItems = async () => {
      try {
        getRequest({
          path: `filial/${searchParams?.filialId}`,
          setData,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, [searchParams?.filialId]);
  console.log();

  return (
    <ScrollShadow className="pt-6 h-[90vh]" visibility="bottom">
      <div className="block md:flex space-y-2 items-center justify-between">
        <h1
          className="text-lg font-medium"
          onClick={() => setSearchParams("name", "Ibrohim")}
        >
          {data?.filialName}dagi mavjud mahsulotlar
        </h1>
        <Button color="primary" onPress={onOpen}>
          Mahsulot biriktirish
        </Button>
      </div>
      <ProductTable filialName={data?.filialName as string} />
      <AddItemProduct
        filialName={data?.filialName as string}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </ScrollShadow>
  );
};

export default FilialProductPage;
