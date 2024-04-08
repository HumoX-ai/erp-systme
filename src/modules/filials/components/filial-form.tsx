/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@nextui-org/react";
import { ErrorMessage, Field, Formik } from "formik";
import useBaseStore from "../../../store/base";
import useFilialStore from "../store";
import { postRequest } from "../../../services/postRequest";
import {
  notifyError,
  notifySuccess,
} from "../../../components/common/ModalFooter/Toast/react-toast";
import { validationSchema } from "../scheme";
import { forwardRef } from "react";
import { PropsRefTypes } from "../types";

const FilialForm = forwardRef((_props, innerRef: PropsRefTypes) => {
  const { setRefresh } = useBaseStore();
  const { setOpen, addFilial, setIsLoading } = useFilialStore();

  const initialValues = {
    filialName: "",
    address: "",
    phone: "",
  };

  const handleSubmit = async (
    values: any,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      setIsLoading(true);
      postRequest({
        path: "filial",
        values: {
          filialName: values.filialName,
          address: values.address,
          phone: values.phone,
        },
        setRefresh,
      });
      setOpen(false);
      addFilial(values);
      resetForm();
      setIsLoading(false);
      notifySuccess({ message: "Filial muvaffaqiyatli qo'shildi" });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      notifyError({ message: "Filial qo'shishda xatolik yuz berdi" });
    }
  };

  return (
    <div>
      <Formik
        innerRef={innerRef}
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
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
        </div>
      </Formik>
    </div>
  );
});

export default FilialForm;
