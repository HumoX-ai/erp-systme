import { FC } from "react";
import icons from "./svg-icon.svg";
import { SvgIconContainerProps } from "./types";

export const SvgIcon: FC<SvgIconContainerProps> = ({
  iconName,
  height,
  fillColor,
  strokeColor,
  width,
  className,
}) => {
  return (
    <svg
      className={className}
      style={{
        width: width ? `${width}px` : "24px",
        height: height ? `${height}px` : "24px",
        stroke: strokeColor || "",
        fill: fillColor || "",
      }}
    >
      <use xlinkHref={`${icons}#${iconName}`} />
    </svg>
  );
};
