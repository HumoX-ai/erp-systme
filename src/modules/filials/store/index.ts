import { create } from "zustand";
import { IFilial } from "../types";

interface FilialState {
  data: IFilial[];
  setData: (data: IFilial[]) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  change: boolean;
  setChange: (change: boolean) => void;
  selectItem?: IFilial;
  setSelectItem: (item: IFilial) => void;
}

const useFilialStore = create<FilialState>()((set) => ({
  data: [],
  setData: (data) => set({ data }),

  open: false,
  setOpen: (open) => set({ open }),
  openModal: false,
  setOpenModal: (openModal) => set({ openModal }),
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  change: false,
  setChange: (change) => set({ change }),
  selectItem: undefined,
  setSelectItem: (item) => set({ selectItem: item }),
}));

export default useFilialStore;
