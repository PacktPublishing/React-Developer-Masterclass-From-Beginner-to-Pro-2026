// CartParent.tsx
import React, { useState } from "react";
import CartList from "./CartList";
import CartSummary from "./CartSummary";

// Define a type for a single cart item
export interface CartItem {
  id: number;
  name: string;
  price: number;
}

const CartParent: React.FC = () => {
  // State for the list of cart items
  const [items] = useState<CartItem[]>([
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 },
  ]);

  // Derived State: The total is computed from the 'items' state.
  // This calculation happens only in the parent component.
  const total: number = items.reduce(
    (sum: number, item: CartItem) => sum + item.price,
    0
  );

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg mt-10 space-y-4">
      <h2 className="text-2xl font-bold text-center">Your Shopping Cart</h2>
      {/* Pass the entire items array to CartList */}
      <CartList items={items} />
      {/* Pass the derived 'total' to CartSummary */}
      <CartSummary total={total} />
    </div>
  );
};

export default CartParent;
