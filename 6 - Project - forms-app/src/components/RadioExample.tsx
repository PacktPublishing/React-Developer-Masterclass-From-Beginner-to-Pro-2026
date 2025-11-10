import React, { useState } from "react";

const RadioExample = () => {
  const [gender, setGender] = useState("male");
  return (
    <div className="flex flex-col">
      <label>
        <input
          type="radio"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>

      <p className="text-black">Your selected gender is: {gender}</p>
    </div>
  );
};

export default RadioExample;
