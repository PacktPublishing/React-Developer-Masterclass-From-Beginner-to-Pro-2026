import { useState } from "react";
import "./App.css";
//import CounterFunctionalComponent from "./components/CounterFunctionalComponent";
// import CounterClass from "./components/CounterClassComponent";
// import CounterFunctionalComponent from "./components/CounterFunctionalComponent";
// import Greetings from "./components/Greetings";
// import NestedExample from "./components/NestedExample";
// import Parent from "./components/props-drilling-solution-two/Parent";

// import UserCard from "./components/UserCard";
// import { UserContext } from "./context/UserContext";

function App() {
  //const userName = "Peter";

  // const handleButtonClick = () => {
  //   console.log("I am clicked!!");
  // };
  // const [name, setName] = useState("Peter");

  const countries = [
    {
      id: "60f7c0e8a4f1b2a1c2d3e4f1",
      name: "United States of America",
    },
    {
      id: "60f7c0e8a4f1b2a1c2d3e4f2",
      name: "United Arab Emirates",
    },
    {
      id: "60f7c0e8a4f1b2a1c2d3e4f3",
      name: "South Africa",
    },
    {
      id: "60f7c0e8a4f1b2a1c2d3e4f4",
      name: "Italy",
    },
  ];

  return (
    <>
      <>
        {/* Embedding JavaScript Example */}
        {/* <h1>Hello {userName}</h1>
      <p>This is my first learning of React JSX</p> */}
        {/* Button Clicks and handler function */}
        {/* <button onClick={handleButtonClick}>Click Me</button> */}
        {/* Components break down, reusability */}
        {/* <NestedExample /> */}
        {/* Functional Component Example */}
        {/* <CounterFunctionalComponent /> */}
        {/* Class Component Example */}
        {/* <CounterClass /> */}
        {/* <Greetings name="Peter" age={20} /> */}

        {/* Props Example */}
        {/* <UserCard
          name="Peter Wong"
          avatar="https://i.pravatar.cc/150?img=3"
          email="peter.wong@gmail.com"
        />

        <UserCard
          name="Jones Wing"
          avatar="https://i.pravatar.cc/150?img=4"
          email="jones@gmail.com"
        /> */}

        {/* <Parent user={userName} /> */}

        {/* <Parent>
        <GrandChild user={userName} />
      </Parent> */}

        {/* <UserContext.Provider value={userName}>
        <Parent />
      </UserContext.Provider> */}

        {/* <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> */}

        {/* <CounterFunctionalComponent /> */}
      </>

      <ul>
        {countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
