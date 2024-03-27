export interface IFilial {
  id: number;
  filialName: string;
  address: string;
  phone: string;
  quantity: number;
}

export interface IFilialFormProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<IFilial[]>>;
}

export interface IFilialSetProps {
  data: IFilial[];
  deleteItem: (id: number) => void;
  setChange: (change: boolean) => void;
  setSelectItem: (item: IFilial) => void;
}

export interface IFilialsSetProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: IFilial[];
  setData: React.Dispatch<React.SetStateAction<IFilial[]>>;
  selectItem: IFilial;
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
