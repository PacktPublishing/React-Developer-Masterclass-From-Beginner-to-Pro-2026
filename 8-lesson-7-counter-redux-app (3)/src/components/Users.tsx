// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../redux-toolkit/counter/hook";
// import { fetchUsers } from "../redux-toolkit/users/user-slice";
import { useGetUsersQuery } from "../redux-toolkit/users/users-api";

const Users = () => {
  //const dispatch = useAppDispatch();
  //const { items, loading, error } = useAppSelector((state) => state.users);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <p className="text-center text-blue-500">Loading users...</p>;
  }

  if (error || !data) {
    return <p className="text-center text-red-500">Error: {`${error}`}</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Users</h2>
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((user) => (
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
