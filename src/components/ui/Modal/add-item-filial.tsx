import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IFilial } from "../../../modules/filial/types";

const notify = () => {
  toast.success("Mahsulot muvaffaqiyatli qo'shildi", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};

export default function AddItemFilial({
  open,
  setOpen,
  setData,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<IFilial[]>>;
}) {
  const [filialName, setFilialName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:8080/filial", {
        filialName,
        address,
        phone,
        quantity,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    if (!filialName || !address || !phone || !quantity) {
      setError("Ma'lumotlarni to'ldiring");
      return;
    }
    fetchData();
    setOpen(false);
    setData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        filialName,
        address,
        phone,
        quantity: Number(quantity),
      },
    ]);
    setFilialName("");
    setAddress("");
    setPhone("");
    setQuantity("");
    notify();
  };
  return (
    <>
      <Modal isOpen={open} onOpenChange={setOpen} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Filial qo'shish</ModalHeader>
              <ModalBody>
                <Input
                  size="sm"
                  placeholder="Filial nomi"
                  type="text"
                  value={filialName}
                  onChange={(e) => setFilialName(e.target.value)}
                />
                <Input
                  size="sm"
                  placeholder="Manzil"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Input
                  size="sm"
                  placeholder="Telefon raqam"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                  size="sm"
                  placeholder="Soni"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />

                {error && <p className="text-red-500">{error}</p>}
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Bekor qilish
                </Button>
                <Button color="primary" onClick={handleSubmit}>
                  Qo'shish
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
