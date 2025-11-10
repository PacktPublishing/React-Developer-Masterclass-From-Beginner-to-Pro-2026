import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/counter/hook";
import { fetchUsers } from "../redux-toolkit/users/user-slice";
import { useState } from "react";
//import { useGetUsersQuery } from "../redux-toolkit/users/users-api";

const Users = () => {
  const dispatch = useAppDispatch();
  const {
    items: data,
    loading: isLoading,
    error,
  } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  //const { data, error, isLoading } = useGetUsersQuery();

  const [showActive, setShowActive] = useState(true);

  if (isLoading) {
    return <p className="text-center text-blue-500">Loading users...</p>;
  }

  if (error || !data) {
    return <p className="text-center text-red-500">Error: {`${error}`}</p>;
  }

  const filteredUsers = data.filter((user) => {
    console.log("Filtering users....");
    return showActive ? user.isActive : !user.isActive;
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Users Without Reselect</h2>
        <button
          onClick={() => setShowActive((prev) => !prev)}
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
        >
          {showActive ? "Show Inactive Users" : "Show Active Users"}
        </button>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
