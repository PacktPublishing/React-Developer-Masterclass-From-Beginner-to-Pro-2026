import { useAtom } from "jotai";

import {
  countAtom,
  decreaseAtom,
  increaseAtom,
  resetAtom,
} from "../store/counter-atom";

const Counter = () => {
  const [count] = useAtom(countAtom);

  const [, increase] = useAtom(increaseAtom);

  const [, decrease] = useAtom(decreaseAtom);

  const [, reset] = useAtom(resetAtom);

  return (
    <div>
      <h2 className=" text-2xl font-bold text-center mb-4">Counter: {count}</h2>

      <div className="flex items-center justify-center gap-3 mb-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          onClick={() => increase(5)}
        >
          Increase
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          onClick={() => decrease(5)}
        >
          Decrease
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
