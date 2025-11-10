// SubmitButton.tsx
import React from "react";

// Define props interface
interface SubmitButtonProps {
  disabled: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ disabled }) => {
  const handleSubmit = () => {
    alert("Form submitted! (Not really, just a demo)");
    console.log("Submit button clicked!");
  };

  return (
    <div className="p-4">
      <button
        onClick={handleSubmit}
        disabled={disabled}
        className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
          disabled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }`}
      >
        Submit Form
      </button>
      {disabled && (
        <p className="text-red-500 text-sm mt-2 text-center">
          Please enter your name to enable submission.
        </p>
      )}
    </div>
  );
};

export default SubmitButton;
