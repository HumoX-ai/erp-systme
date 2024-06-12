/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@nextui-org/react";
import { ErrorMessage, Field, Formik } from "formik";
import useBaseStore from "../../../store/base";
import useFilialStore from "../store";
import { postRequest } from "../../../services/postRequest";
import { validationSchema } from "../scheme";
import { forwardRef } from "react";
import { PropsRefTypes } from "../types";
import { notifySuccess } from "../../../components/common/ModalFooter/Toast/react-toast";
import { useNavigate } from "react-router-dom";

const FilialForm = forwardRef((_props, innerRef: PropsRefTypes) => {
  const { setRefresh } = useBaseStore();
  const { setOpen, setIsLoading } = useFilialStore();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    address: "",
    phone_number: "",
  };

  const handleSubmit = async (
    values: any,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      setIsLoading(true);
      postRequest({
        path: "manager3/filial/",
        values,
        setRefresh,
      });
      setOpen(false);
      resetForm();
      setIsLoading(false);
      notifySuccess({ message: "Filial muvaffaqiyatli qo'shildi" });
      navigate("/filials");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
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
              name="name"
              as={Input}
              size="sm"
              placeholder="Filial nomi"
            />
            <ErrorMessage
              name="name"
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
              name="phone_number"
              as={Input}
              size="sm"
              placeholder="Telefon raqam"
            />
            <ErrorMessage
              name="phone_number"
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
