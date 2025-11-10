import React, { useState } from "react";

const CheckboxExample = () => {
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-gray-700">
        Accept Terms and Services
      </label>
      <input
        checked={isTermsAgreed}
        onChange={(e) => setIsTermsAgreed(e.target.checked)}
        type="checkbox"
        className="border border-gray-300 px-4 py-2 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:outline-none"
      />

      <p className="text-black">Terms Agreed? {`${isTermsAgreed}`}</p>
    </div>
  );
};

export default CheckboxExample;
