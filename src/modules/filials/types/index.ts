/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from "formik";
import { ForwardedRef } from "react";

export interface IFilial {
  id: number;
  name: string;
  address: string;
  phone_number: string;
  quantity: number;
}
export interface DataState {
  results: IFilial[];
}

export interface IProduct {
  id: number;
  filialName: string;
  img: string;
  product: string;
  quantity: number;
  price: number;
  sold_price: number;
}

export interface IProductProps {
  data: IProduct[];
  setChange: (change: boolean) => void;
  setSelectItem: (item: IProduct) => void;
  deleteItem: (id: number) => void;
  page: number;
  pages: number;
  setPage: (page: number) => void;
}

export interface IProductFormProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export type PropsRefTypes = ForwardedRef<FormikProps<any>>;
