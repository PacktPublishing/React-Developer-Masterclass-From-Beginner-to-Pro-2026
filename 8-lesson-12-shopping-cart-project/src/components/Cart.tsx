import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  selectCartItems,
  selectCartTotal,
} from "../features/cart/cartSlice";
import { type AppDispatch } from "../app/store";
import type { CartItem, Product } from "../types";

const Cart = () => {
  const items = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const dispatch = useDispatch<AppDispatch>();

  const handleAddItem = (item: CartItem) => {
    const productPayload: Product = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      description: "", // Assuming description is not needed for cart operations
      image: "", // Assuming image is not needed for cart operations
    };
    dispatch(addItem(productPayload));
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  const btnClasses =
    "text-sm font-semibold rounded-md transition-colors duration-150 p-1 w-6 h-6 flex items-center justify-center";

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-xl w-full max-w-md sticky top-4 h-fit">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-4">
        Shopping Cart
      </h2>

      {items.length === 0 ? (
        <p className="text-gray-500 italic">Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-2">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2 last:border-b-0"
              >
                {/* Item Details */}
                <div className="flex flex-col flex-grow">
                  <span className="font-semibold text-gray-700">
                    {item.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {item.price.toFixed(2)} x {item.cartQuantity}
                  </span>
                </div>

                {/* Control Buttons */}
                <div className="flex space-x-2 items-center ml-4">
                  <button
                    onClick={() => handleAddItem(item)}
                    className={`${btnClasses} bg-green-100 text-green-700 hover:bg-green-200`}
                  >
                    +
                  </button>

                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className={`${btnClasses} bg-yellow-100 text-yellow-700 hover:bg-yellow-200`}
                  >
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t-2 border-gray-200">
            <h3 className="flex justify-between text-xl font-bold text-gray-900">
              <span>Cart Total:</span>
              <span className="text-indigo-600">${cartTotal.toFixed(2)}</span>
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
