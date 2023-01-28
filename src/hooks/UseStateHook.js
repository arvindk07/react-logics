import React, { useState } from "react";

const UseStateHook = () => {
  //   const [count, setCount] = useState(() => {
  //     console.log("constructor");
  //     return 0;
  //   });
  //   const [name, setName] = useState("Increament");

  const [state, setState] = useState({ count: 0, name: "increament" });
  const name = state.name;
  const count = state.count;

  const increament = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1, name: "increament" };
    });
  };
  const decreament = () => {
    setState((prevState) => {
      return {
        count: prevState.count - 1,
        name: "decreament",
      };
    });
  };

  return (
    <div>
      <h2>{name}</h2>
      <button onClick={increament}>+</button>
      {count}
      <button onClick={decreament}>-</button>
    </div>
  );
};

export default UseStateHook;
