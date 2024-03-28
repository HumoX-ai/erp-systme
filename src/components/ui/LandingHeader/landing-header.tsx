import { FC } from "react";
import { Button } from "@nextui-org/react";

import { BackArrow } from "../../shared/BackArrow/back-arrow";
import { LandingHeaderTypes } from "./types";

export const LandingHeader: FC<LandingHeaderTypes> = ({
  isArrow,
  titleText,
  component,
  onBtnClick,
  btnText,
}) => {
  return (
    <div className="flex items-center justify-between py-5">
      {titleText && (
        <div className="flex items-center gap-5">
          {isArrow && <BackArrow route={-1} />}
          <div className="text-xl font-semibold">{titleText}</div>
        </div>
      )}
      {component}
      {btnText && (
        <Button onPress={onBtnClick} color="primary">
          {btnText}
        </Button>
      )}
    </div>
  );
};
