import { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffectHook = () => {
  const ref = useRef("red");
  useEffect(() => {
    ref.current = "yellow";
    console.log(ref, "useEffect");
  });

  useLayoutEffect(() => {
    window.scrollBy(0, 500);
    console.log(ref, "useLayoutEffect");
  });
  return <div style={{ height: "1000px" }}>UseLayoutEffectHook</div>;
};

export default UseLayoutEffectHook;
