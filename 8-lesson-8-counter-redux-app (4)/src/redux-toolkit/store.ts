import { configureStore } from "@reduxjs/toolkit";
import reducer from "./counter/reducer";
import userReducer from "./users/user-slice";
//import { usersAPI } from "./users/users-api";

export const store = configureStore({
  reducer: {
    counter: reducer,
    users: userReducer,
    //[usersAPI.reducerPath]: usersAPI.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(usersAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
