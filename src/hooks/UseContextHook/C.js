import React, { useContext } from "react";
import D from "./D";
import { Country } from "./UseContextHook";

const C = () => {
  const country = useContext(Country);
  return (
    <div>
      {country}
      <D />
    </div>
  );
};

export default C;
