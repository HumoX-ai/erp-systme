import { ChangeEvent } from "react";
import { Input } from "@nextui-org/react";
import useSearchparams from "../../../utils/hooks/useSearchParams";
import { SvgIcon } from "../../ui/svgIcon";

export const CustomSearch: React.FC<{
  placeholder: string;
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  onSearch: (value: string) => void;
}> = ({ placeholder, className, style, size, onSearch }): JSX.Element => {
  const { setSearchParams, deleteParams, searchParams } = useSearchparams();

  const changedSearchValue = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    onSearch(value);

    if (value.length > 0) {
      setSearchParams("search", value);
    } else {
      deleteParams("search");
    }
  };

  return (
    <Input
      isClearable
      variant="faded"
      size={size}
      type="search"
      style={style}
      className={className}
      placeholder={placeholder}
      value={searchParams?.search}
      onChange={changedSearchValue}
      startContent={<SvgIcon iconName="search" strokeColor="#8F8F96" />}
    />
  );
};
