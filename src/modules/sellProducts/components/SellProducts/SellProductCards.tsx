import { Button, Image } from "@nextui-org/react";
import { WareHouseDataTypes } from "../../../warehouse/types";
import { SvgIcon } from "../../../../components/ui/svgIcon";

export const SellProductCards = ({
  brand_name,
  count,
  image,
  product_name,
  sell_price,
  id
}: WareHouseDataTypes) => {
  return (
    <li key={id} className="flex flex-col gap-3 p-3 bg-white rounded-3xl">
      <div className="bg-[#F5F7FA] p-5 rounded-3xl flex items-center justify-center cursor-pointer">
        <Image
          className="object-contain w-72 h-72 rounded-3xl"
          isZoomed
          src={image as string}
          alt="product img"
          width={300}
          height={300}
        />
      </div>
      <div className="flex items-center justify-between">
        <span>Narxi:</span>
        <span className="font-bold text-lg">{sell_price}$</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Nomi:</span>
        <span className="font-bold text-lg">{product_name}</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Brendi:</span>
        <span className="font-bold text-lg">{brand_name?.label}</span>
      </div>
      <div className="flex items-center justify-between">
        <span>Mavjud:</span>
        <span className="font-bold text-lg">{count} ta</span>
      </div>
      <Button
        size="lg"
        className="p-7"
        color="primary"
        endContent={
          <SvgIcon
            iconName="shopping-cart"
            fillColor="#fff"
            width="30"
            height="30"
          />
        }
      >
        Saqlash
      </Button>
    </li>
  );
};
