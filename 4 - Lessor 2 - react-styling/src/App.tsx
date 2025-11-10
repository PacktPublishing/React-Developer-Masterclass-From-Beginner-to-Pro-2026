import "./App.css";
import GreetingCardCSS from "./components/emotionsLibrary/GreetingCardCSS";
import GreetingCardStyled from "./components/emotionsLibrary/GreetingCardStyled";
//import GreetingCard from "./components/styledComponentLibrary/GreetingCard";
// import GreetingCardTheme from "./components/styledComponentLibrary/GreetingCardTheme";

function App() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      {/* <GreetingCard name="Johnson" message="Welcome to the styled component" />

      <GreetingCard
        name="VIP Member"
        message="Welcome to the styled component"
        highlighted
      /> */}

      {/* <GreetingCardTheme /> */}

      {/* <GreetingCardStyled
        name="Johnson"
        message="Welcome to emotion styled component"
        highlighted
      /> */}

      <GreetingCardCSS
        name="Johnson"
        message="Welcome to emotion styled component"
        highlighted
      />
    </div>
  );
}

export default App;
