import React, { useContext } from "react";
import { FirstName, LastName } from "./UseContextHook";

const D = () => {
  const firstName = useContext(FirstName);
  const lastName = useContext(LastName);
  return (
    <div>
      {firstName} {lastName}
    </div>
  );
};

export default D;
