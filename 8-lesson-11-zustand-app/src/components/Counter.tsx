import React from "react";
import { useCounterStore } from "../store/counter-store";

const Counter = () => {
  const count = useCounterStore((s) => s.count);
  const increment = useCounterStore((s) => s.increment);
  const decrement = useCounterStore((s) => s.decrement);
  const reset = useCounterStore((s) => s.reset);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">Counter: {count}</h1>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => increment(5)}
        >
          +
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => decrement(2)}
        >
          -
        </button>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
