import { useState } from "react";

const CounterFunctionalComponent = () => {
  const [count, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(count + 1);
  };

  const handleDecrement = () => {
    setCounter(count - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterFunctionalComponent;
