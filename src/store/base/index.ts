import { create } from "zustand";
import { BaseStoretypes } from "../../types";

const useBaseStore = create<BaseStoretypes>()((set) => ({
  isLoading: false,
  refresh: false,
  drawer: false,

  setDrawer: (value) => set({ drawer: value }),
  setIsLoading: (value) => set({ isLoading: value }),
  setRefresh: (value) => set({ refresh: value }),
}));

export default useBaseStore;
