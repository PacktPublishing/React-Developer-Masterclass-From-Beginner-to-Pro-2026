import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "./redux/store";
import { decrement, increment, reset } from "./redux/counter/counter-actions";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center">
      <h1 className="text-3xl font-bold">Redux based Counter</h1>
      <p className="text-xl">Count: {count}</p>

      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
