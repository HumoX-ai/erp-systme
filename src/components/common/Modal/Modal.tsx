import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { CustomModalTypes } from "./types";

const CustomModal = ({
  modalBodyChildren,
  modalHeaderTitle,
  modalFooterChildren,
  position = "top-center",
  isOpen,
  setIsOpen,
}: CustomModalTypes) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      placement={position}
      scrollBehavior="outside"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          {modalHeaderTitle}
        </ModalHeader>
        <ModalBody>{modalBodyChildren}</ModalBody>
        <ModalFooter>{modalFooterChildren}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
