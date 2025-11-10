// NamePreview.tsx
import React from "react";

// Define props interface
interface NamePreviewProps {
  value: string;
}

const NamePreview: React.FC<NamePreviewProps> = ({ value }) => {
  return (
    <div className="p-4 border rounded shadow bg-blue-50">
      <h3 className="text-lg font-semibold text-blue-800">Preview:</h3>
      <p className="text-gray-800 mt-2">
        Hello, <span className="font-bold">{value ? value : "Guest"}</span>!
      </p>
    </div>
  );
};

export default NamePreview;
