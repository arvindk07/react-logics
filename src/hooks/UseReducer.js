import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer, useState } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "INCREAMENT":
      return { count: state.count + 1 };
    case "DECREAMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
  return state;
};

const UseReducer = () => {
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const increament = () => {
    dispatch({ type: "INCREAMENT" });
  };
  const decreament = () => {
    dispatch({ type: "DECREAMENT" });
  };
  return (
    <div>
      <button onClick={decreament}>-</button>
      {state.count}
      <button onClick={increament}>+</button>
    </div>
  );
};

export default UseReducer;
