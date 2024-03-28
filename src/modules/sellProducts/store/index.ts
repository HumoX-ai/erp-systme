import { create } from "zustand";
import { SellProductStoreTypes } from "../types";

const useSellProductStore = create<SellProductStoreTypes>()((set) => ({
  brandSelectData: [],
  productData: [],
  drawer: {
    isOpen: false,
  },

  setDrawer: (value) => set({ drawer: value }),
  setBrandSelectData: (value) => set({ brandSelectData: value }),
  setProductData: (value) => set({ productData: value }),
}));

export default useSellProductStore;
