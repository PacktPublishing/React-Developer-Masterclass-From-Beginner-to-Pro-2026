import type { CounterAction } from "./counter-types";

export const increment = (): CounterAction => ({ type: "INCREMENT" });
export const decrement = (): CounterAction => ({ type: "DECREMENT" });
export const reset = (): CounterAction => ({ type: "RESET" });
