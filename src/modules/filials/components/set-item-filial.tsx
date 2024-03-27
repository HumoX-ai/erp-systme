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
import { IFilialsSetProps } from "../types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useState } from "react";
import { validationSchema } from "../scheme";

export default function SetItemsFilial({
  open,
  setOpen,
  data,
  setData,
  selectItem,
}: IFilialsSetProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal isOpen={open} onOpenChange={setOpen} placement="center">
      <ModalContent>
        <Formik
          initialValues={{
            filialName: selectItem?.filialName || "",
            address: selectItem?.address || "",
            phone: selectItem?.phone || "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              setIsLoading(true);
              await axios.put(`http://localhost:8080/filial/${selectItem.id}`, {
                ...values,
              });

              const newData = data.map((item) => {
                if (item.id === selectItem.id) {
                  return {
                    ...item,
                    ...values,
                  };
                }
                return item;
              });
              setData(newData);
              setOpen(false);
              resetForm();
              setIsLoading(false);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <ModalHeader className="flex flex-col gap-1">
                Tahrirlash
              </ModalHeader>
              <ModalBody>
                <Field type="text" name="filialName" as={Input} />
                <ErrorMessage
                  name="filialName"
                  component="div"
                  className="text-red-500"
                />
                <Field type="text" name="address" as={Input} />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500"
                />
                <Field type="text" name="phone" as={Input} />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => setOpen(false)}
                >
                  Bekor qilish
                </Button>
                <Button color="primary" type="submit" disabled={isSubmitting}>
                  {isLoading ? <Spinner color="white" size="sm" /> : "Saqlash"}
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
}
