import { ChangeEvent } from "react";
import { Input } from "@nextui-org/react";
import useSearchparams from "../../../utils/hooks/useSearchParams";
import { SvgIcon } from "../../ui/svgIcon";

export const CustomSearch: React.FC<{
  placeholder: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ placeholder, className, style }): JSX.Element => {
  const { setSearchParams, deleteParams, searchParams } = useSearchparams();

  const changedSearchValue = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.value.length > 0) {
      setSearchParams("search", evt.target.value);
    } else {
      deleteParams("search");
    }
  };

  return (
    <Input
      isClearable
      variant="faded"
      size="sm"
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
