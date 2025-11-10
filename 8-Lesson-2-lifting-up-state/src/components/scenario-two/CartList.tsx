// CartList.tsx
import React from "react";
import type { CartItem } from "./CartParent";

interface CartListProps {
  items: CartItem[];
}

const CartList: React.FC<CartListProps> = ({ items }) => {
  return (
    <div className="border rounded-md p-4">
      <h3 className="text-xl font-semibold mb-2">Items</h3>
      <ul className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="py-2 flex justify-between items-center">
            <span className="text-gray-900">{item.name}</span>
            <span className="text-gray-600">${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
