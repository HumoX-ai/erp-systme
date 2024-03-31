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
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../scheme";
import useBaseStore from "../../../store/base";
import { putRequest } from "../../../services/putRequest";
import useFilialStore from "../store";
import { IFilial } from "../types";

export default function SetItemsFilial({
  selectItem,
}: {
  selectItem: IFilial;
}) {
  const { data, setData, isLoading, setIsLoading, openModal, setOpenModal } =
    useFilialStore();
  console.log(open);

  const { setRefresh } = useBaseStore();

  return (
    <Modal isOpen={openModal} onOpenChange={setOpenModal} placement="top">
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

              putRequest({
                path: `filial/${selectItem.id}`,
                values,
                setRefresh,
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
              setOpenModal(false);
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
                  onPress={() => setOpenModal(false)}
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
