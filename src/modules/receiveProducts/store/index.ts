import { create } from "zustand";
import { ReceiveProductStoreTypes } from "../types";

const useReceiveProduct = create<ReceiveProductStoreTypes>()((set) => ({
  isLoading: false,
  brandData: [],
  drawer: {
    initialValues: {
      brand_name: "",
    },
    isOpen: false,
  },

  setDrawer: (value) => set({ drawer: value }),
  setIsLoading: (value) => set({ isLoading: value }),
  setBrandData: (value) => set({ brandData: value }),
}));

export default useReceiveProduct;
