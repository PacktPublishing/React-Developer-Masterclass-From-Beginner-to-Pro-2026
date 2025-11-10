import { configureStore } from "@reduxjs/toolkit";
import reducer from "./counter/reducer";
import userReducer from "./users/user-slice";

export const store = configureStore({
  reducer: {
    counter: reducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
