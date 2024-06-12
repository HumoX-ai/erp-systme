import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Image,
  ScrollShadow,
} from "@nextui-org/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IProduct } from "../types";
import { useNavigate } from "react-router-dom";
import { putRequest } from "../../../services/putRequest";
import useBaseStore from "../../../store/base";
import { getRequest } from "../../../services/getRequest";

export default function AddItemProduct({
  filialName,
  isOpen,
  onOpenChange,
}: {
  filialName: string;
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}) {
  const [data, setData] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [productQuantity, setProductQuantity] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const { setRefresh } = useBaseStore();

  useEffect(() => {
    getRequest({
      path: `products`,
      setData: setData,
    });
  }, []);

  const filteredProducts = data.filter((product) =>
    product.product.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const navigate = useNavigate();

  const handleAddProduct = async () => {
    if (selectedProduct && productQuantity > 0) {
      try {
        putRequest({
          path: `products/${selectedProduct.id}`,
          values: {
            filialName,
            product: selectedProduct.product,
            img: selectedProduct.img,
            quantity: productQuantity,
            sold_price: selectedProduct.sold_price,
            price: selectedProduct.price,
          },
          setRefresh,
        });
        getRequest({
          path: `products?filialName=${filialName}`,
          setData: setData,
        });
        navigate(0);
        onOpenChange(false);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Mahsulot biriktirish
              </ModalHeader>
              <ModalBody>
                <Input
                  classNames={{
                    base: "w-full h-10",
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper:
                      "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                  }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Qidirish uchun mahsulot nomini yozing"
                  size="sm"
                  endContent={<IoSearch size={18} />}
                  type="search"
                />
                <ScrollShadow
                  className={`w-full ${
                    searchTerm.trim() === "" ? "h-0" : "h-[400px]"
                  }`}
                  visibility="bottom"
                  size={5}
                >
                  <div className="w-full bg-default-400/20 dark:bg-default-500/20 rounded-md p-2">
                    {searchTerm.trim() === ""
                      ? "Mahsulotlar topilmadi"
                      : filteredProducts.map((product) => (
                          <div
                            key={product.id}
                            onClick={() => setSelectedProduct(product)}
                            className={`p-2 rounded-md cursor-pointer ${
                              selectedProduct?.id === product.id
                                ? "bg-[#7b7b7b] text-white"
                                : ""
                            }`}
                          >
                            <div className="flex gap-2">
                              <Image src={product.img} width={50} />
                              <div>
                                <span className="text-sm text-[#c3c3c3]">
                                  Nomi
                                </span>
                                :{" "}
                                <span className="text-md">
                                  {product.product}
                                </span>
                                <br />
                                <span className="text-sm text-[#c3c3c3]">
                                  Mavjud
                                </span>
                                :{" "}
                                <span className="text-md">
                                  {product.quantity} ta
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                  </div>
                </ScrollShadow>
                <Input
                  size="sm"
                  value={productQuantity.toString()}
                  onChange={(e) => setProductQuantity(Number(e.target.value))}
                  placeholder="Mahsulot soni"
                  type="number"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Yopish
                </Button>
                <Button color="primary" onPress={handleAddProduct}>
                  Biriktirish
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
