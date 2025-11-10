import { atom, selector } from "recoil";

export const counterState = atom<number>({
  key: "counterState",
  default: 0,
});

// * Actions (selectors) for our counter state

export const increaseSelector = selector<number>({
  key: "increaseSelector",
  get: ({ get }) => get(counterState),
  set: ({ get, set }) => {
    set(counterState, get(counterState) + 1);
  },
});

export const decreaseSelector = selector<number>({
  key: "decreaseSelector",
  get: ({ get }) => get(counterState),
  set: ({ get, set }) => {
    set(counterState, get(counterState) - 1);
  },
});

export const resetSelector = selector<number>({
  key: "resetSelector",
  get: ({ get }) => get(counterState),
  set: ({ set }) => {
    set(counterState, 0);
  },
});
