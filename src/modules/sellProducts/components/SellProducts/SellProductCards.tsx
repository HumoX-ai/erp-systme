/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { SvgIcon } from "../../../../components/ui/svgIcon";
import useSellProductStore from "../../store";

type WareHouseDataTypes = {
  id: number;
  [key: string]: any;
};

const wareHouseFK = {
  key2: "count",
  key3: "price",
  key4: "total",
  key5: "count",
  key6: "model",
  key7: "color",
};

export const SellProductCards = ({ products }: { products: any }) => {
  const { selectBrandId } = useSellProductStore();

  const filteredProducts = selectBrandId
    ? products.filter(
        (product: WareHouseDataTypes) =>
          product.brand_name?.value === selectBrandId
      )
    : products;

  const saveProduct = (product: WareHouseDataTypes) => {
    const savedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    const existingProduct = savedProducts.find(
      (p: WareHouseDataTypes) => p.id === product.id
    );

    if (existingProduct) {
      existingProduct.count += 1;
      localStorage.setItem("products", JSON.stringify(savedProducts));
    } else {
      const newProduct = {
        ...product,
        count: 1,
        [wareHouseFK.key2]: 0,
        [wareHouseFK.key6]: "",
        [wareHouseFK.key7]: "",
      };
      savedProducts.push(newProduct);
      localStorage.setItem("products", JSON.stringify(savedProducts));
    }
  };
  return (
    <div className="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredProducts?.map(
        ({
          id,
          brand_name,
          count,
          image,
          product_name,
          sell_price,
          [wareHouseFK.key2]: key2Value,
          [wareHouseFK.key6]: key6Value,
          [wareHouseFK.key7]: key7Value,
        }: WareHouseDataTypes) => (
          <Card shadow="sm" key={id} className="w-full dark:bg-[#282828]">
            <CardBody>
              <Image
                className="w-full object-contain h-[250px]"
                src={image as string}
                alt={product_name}
                width="100%"
              />
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center justify-between">
                  <span>Nomi:</span>
                  <span className="font-semibold text-lg">{product_name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Narxi:</span>
                  <span className="font-semibold text-lg">{sell_price}$</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Brendi:</span>
                  <span className="font-semibold text-lg">
                    {brand_name?.label}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Soni:</span>
                  <span className="font-semibold text-lg">{count}</span>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <Button
                size="lg"
                fullWidth
                className="p-5"
                color="primary"
                onClick={() =>
                  saveProduct({
                    id,
                    brand_name,
                    count,
                    image,
                    product_name,
                    sell_price,
                    [wareHouseFK.key2]: key2Value,
                    [wareHouseFK.key6]: key6Value,
                    [wareHouseFK.key7]: key7Value,
                  })
                }
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
            </CardFooter>
          </Card>
        )
      )}
    </div>
  );
};
