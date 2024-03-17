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

export type DrawerTypes<T> = {
  initialValues: T;
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
