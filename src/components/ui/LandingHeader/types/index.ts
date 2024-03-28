import { ReactNode } from "react";

export type LandingHeaderTypes = {
  isArrow: boolean;
  titleText?: string;
  component?: ReactNode;
  onBtnClick?: () => void;
  btnText?: string;
};
