import React from "react";

const UserSettings: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
        User Settings
      </h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
            placeholder="johndoe"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
            placeholder="johndoe@example.com"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            htmlFor="notifications"
          >
            Notifications
          </label>
          <select
            id="notifications"
            className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            <option>Email notifications</option>
            <option>Push notifications</option>
            <option>Both</option>
            <option>None</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UserSettings;
