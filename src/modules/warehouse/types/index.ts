import { DrawerTypes } from "../../../types";
import { BrandDataTypes } from "../../receiveProducts/types";
import { wareHouseFK } from "../constants";

export type BrendsProductFormTypes = Omit<WareHouseDataTypes, wareHouseFK.key9>;

export type WareHouseDataTypes = {
  id?: string | number;
  [wareHouseFK.key1]: string;
  [wareHouseFK.key2]: number | string;
  [wareHouseFK.key3]: string | number;
  [wareHouseFK.key4]: string | null;
  [wareHouseFK.key5]: string | number;
  [wareHouseFK.key6]: string;
  [wareHouseFK.key7]: string;
  [wareHouseFK.key8]: string | File;
  [wareHouseFK.key9]?: boolean;
};

export type WareHouseStoreTypes = {
  wareHouseData: WareHouseDataTypes[];
  wareHouseFormData: WareHouseDataTypes;
  uploadImage: string;
  isLoading: boolean;
  brandSelectData: BrandDataTypes[];
  drawer: DrawerTypes;

  setDrawer: (value: DrawerTypes) => void;
  setIsLoading: (value: boolean) => void;
  setBrandSelectData: (value: BrandDataTypes[]) => void;
  setWareHouseFormData: (value: WareHouseDataTypes) => void;
  setWareHouseData: (value: WareHouseDataTypes[]) => void;
  setUploadImage: (value: string) => void;
};
