export interface Product {
  id: string;
  name: string;
  farm: string;
  quantity: string;
  unitPrice: number;
  totalPrice: number;
  image: string;
}

export type OrderStatus = 'PENDING' | 'PROCESSING' | 'SHIPPING' | 'COMPLETED' | 'CANCELLED';

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  customerType: string;
  address: string;
  products: string;
  totalAmount: number;
  paymentMethod: string;
  status: OrderStatus;
  time: string;
  subtotal?: number;
  shippingFee?: number;
  discount?: number;
  items?: Product[];
}