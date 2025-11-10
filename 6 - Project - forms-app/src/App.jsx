import CheckboxExample from "./components/CheckboxExample";
import HookFormExample from "./components/HookFormExample";
import RadioExample from "./components/RadioExample";
import SelectExample from "./components/SelectExample";
import SignUpForm from "./components/SignUpForm";
import TextAreaExample from "./components/TextAreaExample";
import TextInputExample from "./components/TextInputExample";
import { useForm } from "react-hook-form";

function App() {
  return (
    <>
      {/* <h1 className="text-2xl text-center">Text Input Example</h1>
      <TextInputExample />

      <h1 className="text-2xl text-center">Text Area Example</h1>
      <TextAreaExample />

      <h1 className="text-2xl text-center">Select Example</h1>
      <SelectExample />

      <h1 className="text-2xl text-center">Checkbox Example</h1>
      <CheckboxExample />

      <h1 className="text-2xl text-center">Radio Button Example</h1>
      <RadioExample /> */}

      {/* <HookFormExample /> */}

      <SignUpForm />
    </>
  );
}

export default App;
