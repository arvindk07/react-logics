import { useState, useRef } from "react";

const UseRef = () => {
  const [myData, setMyData] = useState("");
  //   const [count, setCount] = useState(0);
  const inputRef = useRef("");

  function changeStyle() {
    inputRef.current.style.backgroundColor = "green";
    inputRef.current.focus();
  }
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={myData}
        onClick={(e) => setMyData(e.target.value)}
      />
      <button onClick={changeStyle}>Change Style</button>
    </div>
  );
};

export default UseRef;
