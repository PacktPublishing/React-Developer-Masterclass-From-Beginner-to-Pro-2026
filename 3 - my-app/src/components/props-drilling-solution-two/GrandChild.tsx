import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const GrandChild = () => {
  const user = useContext(UserContext);
  return (
    <div>
      Welcome <h1>{user}</h1>
    </div>
  );
};

export default GrandChild;
