import React, { useState } from "react";

const TextAreaExample = () => {
  const [bio, setBio] = useState("");

  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700">Bio Data</label>
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        className="w-full border border-gray-500 focus:border-blue-500"
      />
    </div>
  );
};

export default TextAreaExample;
