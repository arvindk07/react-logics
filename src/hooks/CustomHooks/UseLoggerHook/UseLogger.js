import { useEffect, useDebugValue } from "react";

function useLogger(value) {
  useDebugValue(value);
  useEffect(() => {
    console.log(value);
  }, [value]);
}

export default useLogger;
