import React from "react";
import type { Product } from "../types";
import { useDispatch } from "react-redux";
import { type AppDispatch } from "../app/store";
import { addItem } from "../features/cart/cartSlice";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="w-24 h-24 mb-4 overflow-hidden rounded-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-lg font-bold text-gray-900 text-center mb-1">
        {product.name}
      </h3>

      <p className="text-sm text-gray-500 text-center mb-3 line-clamp-2">
        {product.description}
      </p>

      <p className="text-xl font-extrabold text-indigo-600 mb-2">
        {product.price.toFixed(2)}
      </p>

      <button
        onClick={handleAddToCart}
        className="w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
