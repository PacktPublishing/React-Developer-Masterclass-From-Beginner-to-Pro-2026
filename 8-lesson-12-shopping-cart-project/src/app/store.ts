import { configureStore } from "@reduxjs/toolkit";
import cartRedcuer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartRedcuer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
