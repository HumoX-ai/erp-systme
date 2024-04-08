import { Button } from "@nextui-org/react";
import { SvgIcon } from "../../../../components/ui/svgIcon";

type WareHouseDataTypes = {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};
export const ProductModalCard = ({
  id,
  image,
  product_name,
  brand_name,
  count,
  sell_price,
}: WareHouseDataTypes) => (
  <li
    key={id}
    className="flex gap-5 items-center justify-between p-2.5 bg-white rounded-2xl shadow-lg max-md:max-w-full"
  >
    <div className="flex gap-5 justify-center self-stretch font-medium text-stone-900">
      <img
        src={image as string}
        alt={"product-img"}
        className="shrink-0 w-20 aspect-[0.98]"
      />
      <div className="flex flex-col py-1.5 my-auto">
        <h3 className="text-lg">{product_name}</h3>
        <span className="block mt-2.5 text-sm">{brand_name?.label}</span>
      </div>
    </div>
    <div className="grid grid-cols-3 items-center justify-center h-full">
      <Button
        startContent={
          <SvgIcon
            iconName="minus-icon"
            width="25"
            height="25"
            fillColor="#FF0000"
          />
        }
        variant="light"
        color="danger"
      />
      <p className="text-2xl leading-6 whitespace-nowrap text-neutral-700 text-center">
        {count}
      </p>
      <Button
        startContent={
          <SvgIcon
            iconName="plus-icon"
            width="25"
            height="25"
            fillColor="#0070F0"
          />
        }
        variant="light"
      />
    </div>
    <div className="self-stretch my-auto text-lg text-right text-zinc-700">
      {sell_price}
    </div>
    <Button
      startContent={
        <SvgIcon
          iconName="remove-icon"
          width="26"
          height="26"
          fillColor="#FF0000"
        />
      }
      variant="light"
      color="danger"
    />
  </li>
);
