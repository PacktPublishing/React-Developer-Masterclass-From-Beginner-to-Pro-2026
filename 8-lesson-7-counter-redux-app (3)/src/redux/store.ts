import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counter/counter-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
