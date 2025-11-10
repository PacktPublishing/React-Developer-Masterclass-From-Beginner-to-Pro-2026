import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type CartState, type Product } from "../../types";
import type { RootState } from "../../app/store";

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const productToAdd = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === productToAdd.id
      );

      if (existingItem) {
        existingItem.cartQuantity += 1;
      } else {
        state.items.push({
          id: productToAdd.id,
          name: productToAdd.name,
          price: productToAdd.price,
          cartQuantity: 1,
        });
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;

      const existingItem = state.items.find((item) => item.id === idToRemove);

      if (existingItem) {
        if (existingItem.cartQuantity > 1) {
          existingItem.cartQuantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== idToRemove);
        }
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );

export default cartSlice.reducer;
