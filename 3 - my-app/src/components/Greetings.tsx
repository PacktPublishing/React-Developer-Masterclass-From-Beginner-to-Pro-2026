import React from "react";

type GreetingsPropTypes = {
  name: string;
  age?: number;
};

const Greetings: React.FC<GreetingsPropTypes> = ({ name, age = 20 }) => {
  return (
    <div>
      Greetings {name}. You are {age} years old
    </div>
  );
};

export default Greetings;
