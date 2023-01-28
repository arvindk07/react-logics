import { useRef } from "react";

const UseRefHook = () => {
  const inputRef = useRef();
  function handleRef() {
    console.log("handleRef", inputRef);
    inputRef.current.focus();
    // inputRef.current.value = "dev";
    console.log(inputRef.current.value);
    inputRef.current.style.color = "purple";
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleRef}>CLick Here</button>
    </div>
  );
};

export default UseRefHook;
