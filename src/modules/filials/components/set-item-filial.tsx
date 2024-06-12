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
import { useNavigate } from "react-router-dom";

export default function SetItemsFilial({
  selectItem,
}: {
  selectItem: IFilial;
}) {
  const { isLoading, setIsLoading, openModal, setOpenModal } = useFilialStore();
  const navigate = useNavigate();

  const { setRefresh } = useBaseStore();

  return (
    <Modal isOpen={openModal} onOpenChange={setOpenModal} placement="center">
      <ModalContent>
        <Formik
          initialValues={{
            name: selectItem?.name || "",
            address: selectItem?.address || "",
            phone_number: selectItem?.phone_number || "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              setIsLoading(true);

              putRequest({
                path: `manager3/filial/${selectItem.id}/`,
                values,
                setRefresh,
              });

              setOpenModal(false);
              resetForm();
              setIsLoading(false);
              navigate("/filials");
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
                <Field type="text" name="name" as={Input} />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
                <Field type="text" name="address" as={Input} />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500"
                />
                <Field type="text" name="phone_number" as={Input} />
                <ErrorMessage
                  name="phone_number"
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
