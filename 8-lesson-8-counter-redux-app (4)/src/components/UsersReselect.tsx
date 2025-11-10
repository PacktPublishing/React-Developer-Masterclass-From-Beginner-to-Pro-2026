import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/counter/hook";
import { fetchUsers } from "../redux-toolkit/users/user-slice";
import {
  selectActiveUsers,
  selectInactiveUsers,
} from "../redux-toolkit/users/users-selector";

const UsersReselect = () => {
  const dispatch = useAppDispatch();
  const [showActive, setShowActive] = useState(true);

  const isLoading = useAppSelector((state) => state.users.loading);
  const error = useAppSelector((state) => state.users.error);

  const users = useAppSelector(
    showActive ? selectActiveUsers : selectInactiveUsers
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <p className="text-center text-blue-500">Loading users...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {`${error}`}</p>;
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Users (Reselect)</h2>
        <button
          onClick={() => setShowActive((prev) => !prev)}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
        >
          {showActive ? "Show Inactive Users" : "Show Active Users"}
        </button>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <span
              className={`inline-block mt-2 px-2 py-1 text-xs rounded-full ${
                user.isActive
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {user.isActive ? "Active" : "Inactive"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersReselect;
