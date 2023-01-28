import { useState, useCallback } from "react";
import ChildHook from "./ChildHook";

const UseCallbackHook = () => {
  const [CouterOne, setCounterOne] = useState(0);
  const [CouterTwo, setCounterTwo] = useState(0);

  const getItems = useCallback(
    (num) => {
      console.log(CouterTwo + num, CouterTwo - num);
      for (let i = 0; i < 1000000000; i++) {}

      console.log("getItem");
      return [CouterTwo + 1, CouterTwo - 1];
    },
    [CouterTwo]
  );
  return (
    <div>
      <button onClick={() => setCounterOne(CouterOne + 1)}>
        Count1: {CouterOne}
      </button>
      <button onClick={() => setCounterTwo(CouterTwo + 1)}>
        Count2: {CouterTwo}
      </button>
      <ChildHook getItems={getItems} />
    </div>
  );
};

export default UseCallbackHook;
