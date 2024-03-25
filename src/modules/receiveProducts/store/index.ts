import { create } from "zustand";
import { ReceiveProductStoreTypes } from "../types";

const useReceiveProduct = create<ReceiveProductStoreTypes>()((set) => ({
  isLoading: false,
  uploadImage: "",
  brandData: [],
  brandProductData: [],
  drawer: {
    isOpen: false,
  },

  setUploadImage: (value) => set({ uploadImage: value }),
  setDrawer: (value) => set({ drawer: value }),
  setIsLoading: (value) => set({ isLoading: value }),
  setBrandData: (value) => set({ brandData: value }),
  setBrandProductData: (value) => set({ brandProductData: value }),
}));

export default useReceiveProduct;
