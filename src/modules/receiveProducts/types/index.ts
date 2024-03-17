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

export type ReceiveProductStoreTypes = {
  brandData: BrandDataTypes[];
  isLoading: boolean;
  drawer: DrawerTypes<ProductBrendsFormTypes>;

  setDrawer: (value: DrawerTypes<ProductBrendsFormTypes>) => void;
  setIsLoading: (value: boolean) => void;
  setBrandData: (value: BrandDataTypes[]) => void;
};
