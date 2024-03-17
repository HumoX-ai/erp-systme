import { FC } from "react";
import { Button } from "@nextui-org/react";
import { CustomModalFooterTypes } from "./types";
import useBaseStore from "../../../store/base";

const CustomModalFooter: FC<CustomModalFooterTypes> = ({
  onSubmit,
  closeButtonColor = "danger",
  closeButtonVariant = "light",
  openButtonColor = "primary",
  openButtonVariant = "solid",
  closeText,
  openText,
  type = "submit",
  onClose,
}) => {
  const { isLoading } = useBaseStore();

  return (
    <>
      <Button
        color={closeButtonColor}
        variant={closeButtonVariant}
        onPress={onClose}
      >
        {closeText}
      </Button>
      <Button
        color={openButtonColor}
        variant={openButtonVariant}
        onPress={onSubmit}
        isLoading={isLoading}
        type={type}
      >
        {openText}
      </Button>
    </>
  );
};

export default CustomModalFooter;
