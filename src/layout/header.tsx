import { ReactElement, ReactNode } from "react";
import { Button } from "@nextui-org/react";

export const HeaderLayout = ({
  headerTitle,
  content = <></>,
  onPress,
  position = "between",
  btnText,
  parentClass,
}: {
  headerTitle?: string | ReactNode;
  content?: ReactElement;
  onPress?: () => void;
  position?: "between" | "center" | "start" | "end";
  btnText?: string;
  parentClass?: string;
}) => {
  return (
    <div
      className={`flex items-center justify-${position} py-3.5 ${parentClass}`}
    >
      <div
        className="text-xl font-semibold"
        hidden={headerTitle ? false : true}
      >
        {headerTitle}
      </div>
      <div hidden={content ? false : true}>{content}</div>
      {btnText && (
        <Button onPress={onPress} color="primary" size="lg">
          {btnText}
        </Button>
      )}
    </div>
  );
};
