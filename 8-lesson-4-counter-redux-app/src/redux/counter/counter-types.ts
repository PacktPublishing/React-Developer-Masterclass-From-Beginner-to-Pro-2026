export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export interface IncrementAction {
  type: typeof INCREMENT;
}

export interface DecrementAction {
  type: typeof DECREMENT;
}

export interface ResetAction {
  type: typeof RESET;
}

export type CounterAction = IncrementAction | DecrementAction | ResetAction;
