import { ScrollShadow } from "@nextui-org/react";
import PageLayout from "../../layout/private-layout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IFilial } from "./types";
import ProductTable from "./components/product-table";

const FilialProductPage = () => {
  const [data, setData] = useState<IFilial | null>(null);
  const params = useParams();

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/filial/${params.id}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, [params.id]);
  console.log(data);

  return (
    <PageLayout header="Mahsulotlar">
      <ScrollShadow className="pt-6 h-[90vh]" visibility="bottom">
        <h1 className="text-lg font-medium">
          {data?.filialName}dagi mavjud mahsulotlar
        </h1>
        <ProductTable filialName={data?.filialName as string} />
      </ScrollShadow>
    </PageLayout>
  );
};

export default FilialProductPage;
