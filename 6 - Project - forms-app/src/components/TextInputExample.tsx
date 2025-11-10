import React, { useState } from "react";

const TextInputExample = () => {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-gray-700">Your Name</label>
      <input
        id="textInput"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter your name here.."
        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"
      />

      <p className="text-black">Welcome {name}</p>
    </div>
  );
};

export default TextInputExample;
