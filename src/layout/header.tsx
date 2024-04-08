import { ReactElement, ReactNode } from "react";
import { Button } from "@nextui-org/react";
import { BackArrow } from "../components/shared/BackArrow/back-arrow";

export const HeaderLayout = ({
  headerTitle,
  content = <></>,
  onPress,
  position = "between",
  btnText,
  parentClass,
  isArrow = false,
}: {
  headerTitle?: string | ReactNode;
  content?: ReactElement;
  onPress?: () => void;
  position?: "between" | "center" | "start" | "end";
  btnText?: string;
  parentClass?: string;
  isArrow?: boolean;
}) => {
  return (
    <div
      className={`flex items-center justify-${position} py-3.5 ${parentClass}`}
    >
      {headerTitle ? (
        <div className="flex items-center gap-5">
          {isArrow && <BackArrow route={-1} />}
          <div className="text-lg font-medium">{headerTitle}</div>
        </div>
      ) : null}

      {content && content}

      {btnText ? (
        <Button onPress={onPress} color="primary" size="md">
          {btnText}
        </Button>
      ) : null}
    </div>
  );
};
