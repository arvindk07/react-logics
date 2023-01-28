import { useState } from "react";

const ToggleUseState = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Show</button>
      <button onClick={() => setShow(false)}>Hide</button>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <h1>Show, Hide and Toggle</h1>}
    </div>
  );
};

export default ToggleUseState;
