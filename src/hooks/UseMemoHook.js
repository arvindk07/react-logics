import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const increament = () => {
    setCountOne(countOne + 1);
  };
  const decreament = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return countOne % 2 === 0;
  }, [countOne]);
  return (
    <div>
      <button onClick={increament}>Count One {countOne}</button>
      {isEven ? "Even" : "Odd"}
      <button onClick={decreament}>Count Two {countTwo}</button>
    </div>
  );
};

export default UseMemoHook;
