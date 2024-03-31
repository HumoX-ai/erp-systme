import create from "zustand";
import { Product } from "../types";

interface UndeliveredProductsState {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  undeliveredProducts: Product[];
  setUndeliveredProducts: (products: Product[]) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
}

const useUndeliveredProductsStore = create<UndeliveredProductsState>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (value) => set({ isModalOpen: value }),
  undeliveredProducts: [],
  setUndeliveredProducts: (products) => set({ undeliveredProducts: products }),
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));

export default useUndeliveredProductsStore;
