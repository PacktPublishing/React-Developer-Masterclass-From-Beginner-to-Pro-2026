import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    document.title = "UseEffect - Learning";
  }, []);

  useEffect(() => {
    console.log("Fetching users data...");

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error while fetching users", error);
      }
    };

    fetchUsers();
  }, [refetch]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleRefresh = () => {
    setRefetch((prev) => !prev);
    //setRefetch(true);
  };

  return (
    <div>
      <h1>Use Effect Hook Learning</h1>
      <h2>Count: {count}</h2>

      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleRefresh}>Refresh</button>
    </div>
  );
};

export default UseEffectHook;
