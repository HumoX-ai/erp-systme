/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableProps } from "@nextui-org/react";
import { PropsWithChildren } from "react";
import { StateCreator } from "zustand";
import { PersistOptions } from "zustand/middleware";

export interface UserInfo {
  id: string | number;
  email: string;
  name: string;
  avatar: string;
  role: string;
}

export type AuthStoreType = {
  session: {
    signedIn?: boolean;
    theme: "light" | "dark";
  };
  user: UserInfo;
  setUser: (value: UserInfo) => void;
  onSignInSuccess: (user: UserInfo) => void;
  onSignOutSuccess: () => void;
  setToken: (value: { signedIn: boolean; theme: "light" | "dark" }) => void;
};

export type AuthPersistType = (
  config: StateCreator<AuthStoreType>,
  options: PersistOptions<AuthStoreType>
) => StateCreator<AuthStoreType>;

export type DrawerTypes = {
  initialValues?: any;
  isOpen: boolean;
};

export type BaseStoretypes = {
  isLoading: boolean;
  refresh: boolean;
  drawer: boolean;

  setDrawer: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  setRefresh: (value: boolean) => void;
};

export interface CustomTableTypes extends PropsWithChildren<TableProps> {
  columns: {
    dataIndex: string;
    label: string;
    render?: (items: any, rows: any, index: number) => void;
  }[];
  rows: any[];
  loading?: boolean;
  isPagination?: boolean;

  onRowClick?: (items: any, rows: any) => void;
}
