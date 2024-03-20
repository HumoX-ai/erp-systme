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

export type CustomModalFooterTypes = {
  closeButtonColor?: ButtonColorTypes;
  openButtonColor?: ButtonColorTypes;
  closeButtonVariant?: ButtonVariantTypes;
  openButtonVariant?: ButtonVariantTypes;
  closeText: string;
  openText: string;
  type?: "submit" | "button" | "reset";
  onClose?: () => void;
  onSubmit: () => void;
};
