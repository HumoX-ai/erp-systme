import { useEffect, useState } from "react";
import { IProduct } from "../types";
import { CustomTable } from "../../../components";
import { getRequest } from "../../../services/getRequest";
import { CustomSearch } from "../../../components/shared/Search/Search";
import { Image, Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { useDebounce } from "use-debounce";

const ProductTable = ({ filialName }: { filialName: string }) => {
  const [data, setData] = useState<IProduct[]>([]);
  const [filteredData, setFilteredData] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    onOpen();
  };

  useEffect(() => {
    const getItems = async () => {
      try {
        let path = `products?filialName=${filialName}`;
        if (debouncedSearchTerm)
          path = `products?product=${debouncedSearchTerm}`;
        const response = await getRequest({
          path: path,
          setData: setFilteredData,
        });
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, [filialName, debouncedSearchTerm]);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const columns = [
    { label: "#", dataIndex: "id" },
    {
      label: "Mahsulot rasmi",
      dataIndex: "img",
      render: (item: IProduct) =>
        item?.img ? (
          <Image
            width={50}
            height={50}
            alt="warehouse-product-img"
            src={item?.img as string}
            className="w-14 h-14 object-contain"
            onClick={() => {
              handleImageClick(item?.img as string);
              onOpen();
            }}
          />
        ) : (
          "Rasm mavjud emas"
        ),
    },

    { label: "Mahsulot", dataIndex: "product" },

    { label: "Soni", dataIndex: "quantity" },
    { label: "Narxi", dataIndex: "price" },
    { label: "Sotuv narxi", dataIndex: "sold_price" },
  ];

  return (
    <>
      <CustomSearch onSearch={handleSearch} placeholder="Mahsulot qidirish" />
      <CustomTable
        columns={columns}
        rows={filteredData.length > 0 ? filteredData : data}
        onRowClick={(record, rows) => console.log(record, rows)}
        isPagination={true}
        className="overflow-x-scroll max-w-[calc(100vw-50px)] mt-8"
      />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent>
          <Image
            width={500}
            height={500}
            alt="warehouse-product-img"
            src={selectedImage as string}
            className="w-full h-80 object-contain"
          />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProductTable;
