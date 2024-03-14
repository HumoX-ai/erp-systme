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
import { IProduct } from "../../../modules/products/types";
import "react-toastify/dist/ReactToastify.css";

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

export default function AddItemProduct({
  open,
  setOpen,
  setData,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
}) {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [soldPrice, setSoldPrice] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/products",
        {
          product,
          quantity,
          price,
          sold_price: soldPrice,
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    if (!product || !quantity || !price || !soldPrice) {
      setError("Ma'lumotlarni to'ldiring");
      return;
    }
    fetchData();
    setOpen(false);
    setData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        product,
        quantity: Number(quantity),
        price: Number(price),
        sold_price: Number(soldPrice),
      },
    ]);
    setProduct("");
    setQuantity("");
    setPrice("");
    setSoldPrice("");
    notify();
  };
  return (
    <>
      <Modal isOpen={open} onOpenChange={setOpen} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Maishiy texnikalar qo'shish</ModalHeader>
              <ModalBody>
                <Input
                  size="sm"
                  placeholder="Mahsulot nomi"
                  type="text"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                />
                <Input
                  size="sm"
                  placeholder="Mahsulot soni"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <Input
                  size="sm"
                  placeholder="Tan narxi"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <Input
                  size="sm"
                  placeholder="Sotilish narxi"
                  type="number"
                  value={soldPrice}
                  onChange={(e) => setSoldPrice(e.target.value)}
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
