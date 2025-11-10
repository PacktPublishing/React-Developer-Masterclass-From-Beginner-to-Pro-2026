import React, { useState } from "react";
export const UseStateHook = () => {
  const initialState = {
    name: "John",
    age: 35,
    email: "john@gmail.com",
  };

  const [user, setUser] = useState(initialState);

  const handleUpdate = () => {
    //setUser({ name: "Peter" });

    setUser((prevUser) => ({
      ...prevUser,
      name: "Peter",
    }));
  };

  return (
    <div>
      <h1>User Details</h1>
      Name: <span>{user.name}</span> <br />
      Age: <span>{user.age}</span> <br />
      Email: <span>{user.email}</span> <br />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};
