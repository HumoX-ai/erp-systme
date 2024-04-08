/* eslint-disable @typescript-eslint/no-explicit-any */
import { DrawerTypes } from "../../../types";
import { BrandDataTypes } from "../../receiveProducts/types";

type WareHouseDataTypes = {
  id: number;
  [key: string]: any;
};
export type SellProductStoreTypes = {
  selectBrandId: any;
  brandSelectData: BrandDataTypes[];
  productData: WareHouseDataTypes[];
  drawer: DrawerTypes;

  setSelectedBrandId: (value: any) => void;
  setDrawer: (value: DrawerTypes) => void;
  setProductData: (value: WareHouseDataTypes[]) => void;
  setBrandSelectData: (value: BrandDataTypes[]) => void;
};
