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
  position = "center",
  isOpen,
  setIsOpen,
  size,
}: CustomModalTypes) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      placement={position}
      scrollBehavior="outside"
      size={size}
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
