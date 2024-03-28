import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { IFilialFormProps } from "../types";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, Input } from "@nextui-org/react";
import { validationSchema } from "../scheme";
import CustomModal from "../../../components/common/Modal/Modal";
import "react-toastify/dist/ReactToastify.css";
import {
  notifyError,
  notifySuccess,
} from "../../../components/common/ModalFooter/Toast/react-toast";

export default function AddItem({ open, setOpen, setData }: IFilialFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const initialValues = {
    filialName: "",
    address: "",
    phone: "",
  };

  const handleSubmit = async (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    values: any,
    {
      resetForm,
    }: {
      resetForm: () => void;
    }
  ) => {
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:8080/filial", {
        filialName: values.filialName,
        address: values.address,
        phone: values.phone,
      });

      console.log(response);
      setOpen(false);
      setData((prev) => [...prev, response.data]);
      resetForm();
      setIsLoading(false);
      notifySuccess({ message: "Filial muvaffaqiyatli qo'shildi" });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      notifyError({ message: "Filial qo'shishda xatolik yuz berdi" });
    }
  };

  const modalBody = (
    <Form className="flex flex-col gap-2">
      <div>
        <Field
          type="text"
          name="filialName"
          as={Input}
          size="sm"
          placeholder="Filial nomi"
        />
        <ErrorMessage
          name="filialName"
          className="text-red-500 text-sm"
          component="p"
        />
      </div>
      <div>
        <Field
          type="text"
          name="address"
          as={Input}
          size="sm"
          placeholder="Manzil"
        />
        <ErrorMessage
          name="address"
          className="text-red-500 text-sm"
          component="p"
        />
      </div>
      <div>
        <Field
          type="text"
          name="phone"
          as={Input}
          size="sm"
          placeholder="Telefon raqam"
        />
        <ErrorMessage
          name="phone"
          className="text-red-500 text-sm"
          component="p"
        />
      </div>
    </Form>
  );

  const modalFooter = (
    <Form>
      <Button color="danger" variant="light" onPress={() => setOpen(false)}>
        Bekor qilish
      </Button>
      <Button type="submit" color="primary" isLoading={isLoading}>
        Qo'shish
      </Button>
    </Form>
  );

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <CustomModal
            isOpen={open}
            setIsOpen={() => setOpen(false)}
            modalHeaderTitle="Filial qo'shish"
            modalBodyChildren={modalBody}
            modalFooterChildren={modalFooter}
          />
        )}
      </Formik>
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
    </div>
  );
}
