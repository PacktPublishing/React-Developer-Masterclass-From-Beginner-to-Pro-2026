export interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  description: string;
  image: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  cartQuantity: number;
}

export interface CartState {
  items: CartItem[];
}
