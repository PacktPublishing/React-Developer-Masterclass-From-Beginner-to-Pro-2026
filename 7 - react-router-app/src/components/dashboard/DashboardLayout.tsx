import { Outlet, Link } from "react-router";
import React from "react";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        <nav className="flex flex-col space-y-4 w-full">
          <Link
            to="/dashboard/profile"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <span role="img" aria-label="user-profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span className="font-medium">User Profile</span>
          </Link>
          <Link
            to="/dashboard/settings"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <span role="img" aria-label="settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.941 3.31 1.307 1.284 2.323a1.724 1.724 0 00.063 2.536c1.026 1.009 1.026 2.459 0 3.468a1.724 1.724 0 00-.063 2.536c-2.026 1.016-3.8-1.267-2.323-2.323a1.724 1.724 0 00-2.573-1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.941-3.31-1.307-1.284-2.323a1.724 1.724 0 00-.063-2.536c-1.026-1.009-1.026-2.459 0-3.468a1.724 1.724 0 00.063-2.536c2.026-1.016 3.8 1.267 2.323 2.323a1.724 1.724 0 002.573-1.066z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <span className="font-medium">User Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
