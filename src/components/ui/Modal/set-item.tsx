import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Spinner,
} from "@nextui-org/react";
import { IProduct } from "../../../modules/products/types";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";

export default function SetItems({
  open,
  setOpen,
  data,
  setData,
  selectItem,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: IProduct[];
  setData: Dispatch<SetStateAction<IProduct[]>>;
  selectItem: IProduct;
}) {
  const [newProductName, setNewProductName] = useState(selectItem?.product);
  const [newQuantity, setNewQuantity] = useState(selectItem?.quantity);
  const [newPrice, setNewPrice] = useState(selectItem?.price);
  const [newSoldPrice, setNewSoldPrice] = useState(selectItem?.sold_price);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setNewProductName(selectItem?.product || "");
    setNewQuantity(selectItem?.quantity || 0);
    setNewPrice(selectItem?.price || 0);
    setNewSoldPrice(selectItem?.sold_price || 0);
  }, [selectItem]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProductName(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuantity(parseInt(e.target.value));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPrice(parseInt(e.target.value));
  };

  const handleSoldPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSoldPrice(parseInt(e.target.value));
  };

  const changeItem = async () => {
    try {
      setIsLoading(true);
      await axios.put(
        `https://65088b8356db83a34d9c7d66.mockapi.io/api/v1/login/${selectItem.id}`,
        {
          product: newProductName,
          quantity: newQuantity,
          price: newPrice,
          sold_price: newSoldPrice,
        }
      );

      const newData = data.map((item) => {
        if (item.id === selectItem.id) {
          return {
            ...item,
            product: newProductName,
            quantity: newQuantity,
            price: newPrice,
            sold_price: newSoldPrice,
          };
        }
        return item;
      });
      setData(newData);
      setOpen(false);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal isOpen={open} onOpenChange={setOpen} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Tahrirlash
              </ModalHeader>
              <ModalBody>
                <Input value={newProductName} onChange={handleChange} />
                <Input
                  value={newQuantity.toString()}
                  onChange={handleQuantityChange}
                  type="number"
                />
                <Input
                  value={newPrice.toString()}
                  onChange={handlePriceChange}
                  type="number"
                />
                <Input
                  value={newSoldPrice.toString()}
                  onChange={handleSoldPriceChange}
                  type="number"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Bekor qilish
                </Button>
                <Button color="primary" onPress={changeItem}>
                  {isLoading ? <Spinner color="white" size="sm" /> : "Saqlash"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
