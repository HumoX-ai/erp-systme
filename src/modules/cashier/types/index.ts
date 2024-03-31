export interface Product {
  id: string | number;
  orderDate: string;
  name: string;
  productName: string;
  quantity: number;
  address: string;
  status: "delivered" | "undelivered";
}
