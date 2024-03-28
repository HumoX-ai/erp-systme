export interface Product {
  id: string;
  orderDate: string;
  name: string;
  productName: string;
  quantity: number;
  address: string;
  status: "delivered" | "undelivered";
}
