// CartSummary.tsx
import React from "react";

interface CartSummaryProps {
  total: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ total }) => {
  return (
    <div className="border rounded-md p-4 bg-gray-100">
      <h3 className="text-xl font-semibold mb-2">Cart Summary</h3>
      <div className="flex justify-between items-center text-lg font-bold">
        <span>Total:</span>
        <span className="text-green-600">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartSummary;
