import { useEffect, useState, useRef } from "react";

const UseRefMutableVariable = () => {
  const [myData, setMyData] = useState("");
  //   const [count, setCount] = useState(0);
  const count = useRef(10);
  useEffect(() => {
    // setCount(count + 1);
    count.current = count.current + 1;
  });
  return (
    <div>
      <div>
        <input
          type="text"
          value={myData}
          onClick={(e) => setMyData(e.target.value)}
        />
        <p>The numbers of time Render:{count.current}</p>
      </div>
    </div>
  );
};

export default UseRefMutableVariable;
