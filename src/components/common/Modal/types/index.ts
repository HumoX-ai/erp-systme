import { ReactNode } from "react";

export interface CustomModalTypes {
  isOpen?: boolean;
  modalBodyChildren: ReactNode;
  modalHeaderTitle: string;
  modalFooterChildren: ReactNode;
  position?:
    | "auto"
    | "bottom"
    | "bottom-center"
    | "center"
    | "top"
    | "top-center";

  setIsOpen?: () => void;
}
