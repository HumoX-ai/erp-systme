import { useRef } from "react";
import { FormikProps } from "formik";
import {
  BrendsProductFormTypes,
  WareHouseDataTypes,
} from "../../../warehouse/types";
import { ProductForm } from "./ProductForm";
import { ProductModalCard } from "./ProductModalCards";

export const ProductModal = () => {
  const formRef = useRef<FormikProps<BrendsProductFormTypes>>(null);

  const products: WareHouseDataTypes[] = [
    {
      id: 1,
      product_name: "Iphone 11",
      brand_name: {
        label: "Apple",
        value: "apple",
      },
      sell_price: "$555.99",
      count: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e82ce7fb5821c5a67a79e53e585c589b8185e10a5ba6cc7b8a6746f01345bae6?apiKey=45fcf846ed7b420b8f2dae4e2433ee18&",
      color: "",
      description: "",
      price: 1121,
    },
  ];

  return (
    // <div className="">
    <div className="p-8 flex flex-col gap-10 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col gap-5 max-md:ml-0 max-md:w-full">
        <h1 className="text-3xl text-stone-900 font-semibold max-md:flex-wrap max-md:max-w-full">
          Xarid qilishni davom etish
        </h1>
        <hr className="shrink-0 h-0.5 border-2 border-solid bg-stone-300 border-stone-300 max-md:max-w-full" />
        <h2 className="text-2xl font-medium text-stone-900 max-md:max-w-full">
          Xarid qilish savati
        </h2>
        <p className="text-xl font-medium text-stone-900 max-md:max-w-full">
          Sizning savatingizda {products.length} ta mahsulot mavjud
        </p>
        <ul>
          {products.map((product: WareHouseDataTypes) => (
            <ProductModalCard {...product} />
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-5 grow justify-center px-6 py-4 w-full rounded-2xl bg-slate-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-2xl font-semibold text-black max-md:max-w-full">
          Mijoz ma'lumotlari
        </h2>
        <ProductForm innerRef={formRef} />
      </div>
    </div>
    /* </div> */
  );
};
