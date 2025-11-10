import React from "react";

const UserProfile: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="flex flex-col items-center">
        <img
          className="w-32 h-32 rounded-full border-4 border-indigo-500 dark:border-indigo-400 object-cover mb-4"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop"
          alt="User Avatar"
        />
        <h2 className="text-3xl font-bold mb-2">John Doe</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Software Engineer
        </p>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-700 dark:text-gray-300">
          Passionate about building scalable and efficient web applications.
          Dedicated to clean code and continuous learning.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-gray-600 dark:text-gray-400">
            johndoe@example.com
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-semibold text-lg">Location</h3>
          <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
