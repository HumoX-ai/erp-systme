import { create } from "zustand";
import { WareHouseStoreTypes } from "../types";
import { brandProductIV } from "../constants";

const useWareHouseStore = create<WareHouseStoreTypes>()((set) => ({
  isLoading: false,
  uploadImage: "",
  wareHouseData: [],
  wareHouseFormData: brandProductIV,
  brandSelectData: [],
  drawer: {
    isOpen: false,
  },

  setUploadImage: (value) => set({ uploadImage: value }),
  setDrawer: (value) => set({ drawer: value }),
  setBrandSelectData: (value) => set({ brandSelectData: value }),
  setIsLoading: (value) => set({ isLoading: value }),
  setWareHouseFormData: (value) => set({ wareHouseFormData: value }),
  setWareHouseData: (value) => set({ wareHouseData: value }),
}));

export default useWareHouseStore;
