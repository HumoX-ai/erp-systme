/* eslint-disable @typescript-eslint/no-explicit-any */
import { Spinner } from "@nextui-org/react";
import { CustomLoadingType } from "./types";

export const CustomLoading = (props: CustomLoadingType) => {
  const {
    loading,
    children,
    spinnerClass,
    className,
    asElement: Component,
  } = props;

  return loading ? (
    <Component
      className={`flex items-center justify-center h-full ${className}`}
    >
      <Spinner className={spinnerClass} color="white" />
    </Component>
  ) : (
    <>{children}</>
  );
};

CustomLoading.defaultProps = {
  loading: false,
  asElement: "div",
};

