import { useState } from "react";
import NameInput from "./NameInput";
import NamePreview from "./NamePreview";
import SubmitButton from "./SubmitButton";

const FormParent = () => {
  const [name, setName] = useState("");
  return (
    <div className="space-y-4">
      <NameInput value={name} onChange={setName} />
      <NamePreview value={name} />
      <SubmitButton disabled={!name} />
    </div>
  );
};

export default FormParent;
