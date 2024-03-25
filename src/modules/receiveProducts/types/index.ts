import { ForwardedRef } from "react";
import { FormikProps } from "formik";

import { DrawerTypes } from "../../../types";
import { brandFK, brandProductFK } from "../constants";

export type ProductBrendsFormTypes = {
  id?: string | number;
  [brandFK.key1]: string;
};

export type BrandDataTypes = {
  id: string | number;
  [brandFK.key1]: string;
  [brandFK.key2]?: [];
};

export type BrandProductDataTypes = {
  id?: string | number;
  [brandProductFK.key1]: string | File;
  [brandProductFK.key2]: string;
  [brandProductFK.key3]: number | string;
  [brandProductFK.key4]: string | number;
  [brandProductFK.key5]: string | number;
};

export type PropsRefTypes = ForwardedRef<FormikProps<BrandProductDataTypes>>;

export type ReceiveProductStoreTypes = {
  brandData: BrandDataTypes[];
  uploadImage: string;
  brandProductData: BrandProductDataTypes[];
  isLoading: boolean;
  drawer: DrawerTypes;

  setDrawer: (value: DrawerTypes) => void;
  setIsLoading: (value: boolean) => void;
  setBrandData: (value: BrandDataTypes[]) => void;
  setUploadImage: (value: string) => void;
  setBrandProductData: (value: BrandProductDataTypes[]) => void;
};
