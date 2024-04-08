/* eslint-disable @typescript-eslint/no-explicit-any */
import { ToastContainer } from "react-toastify";
import CustomModal from "../../../components/common/Modal/Modal";
import "react-toastify/dist/ReactToastify.css";

import useFilialStore from "../store";
import FilialForm from "./filial-form";
import { CustomModalFooter } from "../../../components";
import { useRef } from "react";
import { FormikProps } from "formik";

export default function AddItem() {
  const { open, setOpen } = useFilialStore();
  const formRef = useRef<FormikProps<any>>(null);

  return (
    <div>
      <CustomModal
        isOpen={open}
        setIsOpen={() => setOpen(false)}
        modalHeaderTitle="Filial qo'shish"
        modalBodyChildren={<FilialForm ref={formRef} />}
        modalFooterChildren={
          <CustomModalFooter
            onSubmit={() => formRef.current?.handleSubmit()}
            openText="Filial qo'shish"
            closeText="Bekor qilish"
            onClose={() => setOpen(false)}
          />
        }
      />

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
