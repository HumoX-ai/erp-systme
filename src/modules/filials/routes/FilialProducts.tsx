import { ScrollShadow, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IFilial } from "../types";
import ProductTable from "../components/product-table";
import AddItemProduct from "../components/add-item-product";
import useSearchparams from "../../../utils/hooks/useSearchParams";
import { getRequest } from "../../../services/getRequest";
import { HeaderLayout } from "../../../layout/header";

const FilialProductPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { searchParams } = useSearchparams();
  const [data, setData] = useState<IFilial | null>(null);

  useEffect(() => {
    const getItems = async () => {
      try {
        getRequest({
          path: `manager3/filial/${searchParams?.filialId}/`,
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
    <ScrollShadow className="pt-6 h-[90vh]" visibility="bottom" size={5}>
      <HeaderLayout
        isArrow={true}
        btnText="Mahsulot biriktirish"
        headerTitle={`${data?.address}dagi mavjud mahsulotlar`}
        onPress={() => onOpen()}
      />
      <ProductTable filialName={data?.name as string} />
      <AddItemProduct
        filialName={data?.name as string}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </ScrollShadow>
  );
};

export default FilialProductPage;
