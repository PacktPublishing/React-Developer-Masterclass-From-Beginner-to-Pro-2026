import React, { useState } from "react";

const SelectExample = () => {
  const allFruits = ["Apple", "Mango", "Orange", "Banana"];
  const [fruit, setFruit] = useState("");

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700">
        Select Favorite Fruit
      </label>

      <select
        className="border border-gray-500 focus:border-blue-500"
        value={fruit}
        onChange={(e) => setFruit(e.target.value)}
      >
        {allFruits.map((fruitItem, idx) => (
          <option key={idx} value={fruitItem}>
            {fruitItem}
          </option>
        ))}
      </select>

      <p>Your favorite fruit is: {fruit}</p>
    </div>
  );
};

export default SelectExample;
