import { useState, forwardRef, useImperativeHandle } from "react";

const UseImperativeChild = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => ({
    increament,
  }));
  function increament() {
    setCount(count + 1);
  }
  return (
    <div>
      {count}
      <button onClick={increament}>Child Click</button>
    </div>
  );
});

export default UseImperativeChild;
