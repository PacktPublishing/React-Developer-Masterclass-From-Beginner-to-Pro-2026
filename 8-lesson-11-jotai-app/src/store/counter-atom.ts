import { atom } from "jotai";

export const countAtom = atom(0);

export const increaseAtom = atom(null, (get, set, by: number = 1) =>
  set(countAtom, get(countAtom) + by)
);

export const decreaseAtom = atom(null, (get, set, by: number = 1) =>
  set(countAtom, get(countAtom) - by)
);

export const resetAtom = atom(null, (_get, set) => set(countAtom, 0));
