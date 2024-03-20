import { DrawerTypes } from "../../../types";

export type ProductBrendsFormTypes = {
  id?: string | number;
  brand_name: string;
};

export type BrandDataTypes = {
  id: string | number;
  brand_name: string;
  children?: [];
};

export type BrandProductDataTypes = {
  id?: string | number;
  image: string | File;
  product_name: string;
  price: number | string;
  sell_price: string | number;
  count: string | number;
};

export type ReceiveProductStoreTypes = {
  brandData: BrandDataTypes[];
  uploadImage: string;
  brandProductData: BrandProductDataTypes[];
  isLoading: boolean;
  drawer: DrawerTypes;

  setDrawer: (
    value: DrawerTypes
  ) => void;
  setIsLoading: (value: boolean) => void;
  setBrandData: (value: BrandDataTypes[]) => void;
  setUploadImage: (value: string) => void;
  setBrandProductData: (value: BrandProductDataTypes[]) => void;
};
