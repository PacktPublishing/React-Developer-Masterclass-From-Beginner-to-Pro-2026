// NameInput.tsx
import React from "react";

// Define the types for the props this component expects
interface NameInputProps {
  value: string;
  onChange: (value: string) => void; // A function that accepts a string and returns nothing
}

// Use React.FC<NameInputProps> to type the functional component
const NameInput: React.FC<NameInputProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // event.target.value is automatically typed as string
    onChange(event.target.value);
  };

  return (
    <div className="p-4 border rounded shadow">
      <label
        htmlFor="name-input"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Enter Your Name:
      </label>
      <input
        type="text"
        id="name-input"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value={value}
        onChange={handleChange}
        placeholder="e.g., Jane Doe"
      />
    </div>
  );
};

export default NameInput;
