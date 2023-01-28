import { useState } from "react";
import useLogger from "./UseLogger";

const CustomHookOne = () => {
  const [name, setName] = useState("");
  useLogger(name);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default CustomHookOne;
