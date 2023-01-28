import { useState } from "react";
import useLocalStorage from "./UseLocalStorageHook";

const CustomHookTwo = () => {
  const [name, setName] = useLocalStorage("name", "");
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

export default CustomHookTwo;
