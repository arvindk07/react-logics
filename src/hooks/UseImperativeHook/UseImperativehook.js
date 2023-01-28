import { useRef } from "react";
import UseImperativeChild from "./UseImperativeChild";

const UseImperativehook = () => {
  const ref = useRef();
  return (
    <div>
      <UseImperativeChild ref={ref} />
      <button onClick={() => ref.current.increament()}>Parent Click</button>
    </div>
  );
};

export default UseImperativehook;
