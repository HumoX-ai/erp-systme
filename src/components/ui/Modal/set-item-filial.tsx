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
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { IFilial } from "../../../modules/filial/types";

export default function SetItemFilial({
  open,
  setOpen,
  data,
  setData,
  selectItem,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: IFilial[];
  setData: Dispatch<SetStateAction<IFilial[]>>;
  selectItem: IFilial;
}) {
  const [filialName, setFilialName] = useState(selectItem?.name);
  const [address, setAddress] = useState(selectItem?.address);
  const [phone, setPhone] = useState(selectItem?.phone);
  const [newQuantity, setNewQuantity] = useState(selectItem?.quantity);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFilialName(selectItem?.name || "");
    setAddress(selectItem?.address || "");
    setPhone(selectItem?.phone || "");
    setNewQuantity(selectItem?.quantity || 0);
  }, [selectItem]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilialName(e.target.value);
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewQuantity(parseInt(e.target.value));
  };

  const changeItem = async () => {
    try {
      setIsLoading(true);
      await axios.put(`http://localhost:8080/filial/${selectItem.id}`, {
        name: filialName,
        address: selectItem.address,
        phone: selectItem.phone,
        quantity: newQuantity,
      });

      const newData = data.map((item) => {
        if (item.id === selectItem.id) {
          return {
            ...item,
            name: filialName,
            address,
            phone,
            quantity: newQuantity,
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
                <Input value={filialName} onChange={handleChange} />
                <Input
                  value={address}
                  onChange={handleAddressChange}
                  type="text"
                />
                <Input value={phone} onChange={handlePhoneChange} type="text" />
                <Input
                  value={newQuantity.toString()}
                  onChange={handleQuantityChange}
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
