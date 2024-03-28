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
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "full";

  setIsOpen?: () => void;
}
