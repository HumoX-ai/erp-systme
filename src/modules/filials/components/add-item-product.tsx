import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IProduct } from "../types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/products`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, []);

  const filteredProducts = data.filter((product) =>
    product.product.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const navigate = useNavigate();

  const handleAddProduct = async () => {
    if (selectedProduct && productQuantity > 0) {
      try {
        await axios.put(
          `http://localhost:8080/products/${selectedProduct.id}`,
          {
            filialName,
            product: selectedProduct.product,
            quantity: productQuantity,
            sold_price: selectedProduct.sold_price,
            price: selectedProduct.price,
          }
        );
        const response = await axios.get(
          `http://localhost:8080/products?filialName=${filialName}`
        );
        setData(response.data);
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
                Modal Title
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
                <div className="w-full bg-default-400/20 dark:bg-default-500/20 rounded-md p-4">
                  {searchTerm.trim() === ""
                    ? "Mahsulotlar topilmadi"
                    : filteredProducts.map((product) => (
                        <div
                          key={product.id}
                          onClick={() => setSelectedProduct(product)}
                          className={`p-2 rounded-md cursor-pointer ${
                            selectedProduct?.id === product.id
                              ? "bg-primary-500 text-white"
                              : ""
                          }`}
                        >
                          {product.product}
                        </div>
                      ))}
                </div>
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
