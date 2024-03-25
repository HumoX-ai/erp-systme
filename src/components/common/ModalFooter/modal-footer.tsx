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
  isCloseBtn = true,
  isOpenBtn = true,
}) => {
  const { isLoading } = useBaseStore();

  return (
    <div className="flex gap-3">
      {isCloseBtn && closeText && (
        <Button
          color={closeButtonColor}
          variant={closeButtonVariant}
          onPress={onClose}
        >
          {closeText}
        </Button>
      )}
      {(isOpenBtn || openText) && (
        <Button
          color={openButtonColor}
          variant={openButtonVariant}
          onPress={onSubmit}
          isLoading={isLoading}
          type={type}
        >
          {openText}
        </Button>
      )}
    </div>
  );
};

export default CustomModalFooter;
