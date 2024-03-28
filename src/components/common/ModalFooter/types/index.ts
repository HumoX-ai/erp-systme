type ButtonColorTypes =
  | "danger"
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning";

type ButtonVariantTypes =
  | "bordered"
  | "faded"
  | "flat"
  | "ghost"
  | "light"
  | "shadow"
  | "solid";

export interface Option {
  value: string | number;
  label: string;
}

export interface DropdownProps {
  options: Option[];
  onSelect?: (value: Option) => void;
  errorName?: string;
  className?: string;
  initialValue?: Option;
}

export type CustomModalFooterTypes = {
  closeButtonColor?: ButtonColorTypes;
  openButtonColor?: ButtonColorTypes;
  closeButtonVariant?: ButtonVariantTypes;
  openButtonVariant?: ButtonVariantTypes;
  closeText?: string;
  openText?: string;
  type?: "submit" | "button" | "reset";
  isOpenBtn?: boolean;
  isCloseBtn?: boolean;

  onClose?: () => void;
  onSubmit?: () => void;
};
