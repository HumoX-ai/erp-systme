import { DrawerTypes } from "../../../types";
import { BrandDataTypes } from "../../receiveProducts/types";
import { WareHouseDataTypes } from "../../warehouse/types";

export type SellProductStoreTypes = {
  brandSelectData: BrandDataTypes[];
  productData: WareHouseDataTypes[];
  drawer: DrawerTypes;

  setDrawer: (value: DrawerTypes) => void;
  setProductData: (value: WareHouseDataTypes[]) => void;
  setBrandSelectData: (value: BrandDataTypes[]) => void;
};
