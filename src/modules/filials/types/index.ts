export interface IFilial {
  id: number;
  filialName: string;
  address: string;
  phone: string;
  quantity: number;
}

export interface IProduct {
  id: number;
  filialName: string;
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
