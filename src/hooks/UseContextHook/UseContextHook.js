import React, { createContext } from "react";
import B from "./B";

const FirstName = createContext();
const LastName = createContext();
const Country = createContext();

const UseContextHook = () => {
  return (
    <div>
      <FirstName.Provider value="webdev">
        <LastName.Provider value="Mern Stack Dev">
          <Country.Provider value="React dev">
            <B />
          </Country.Provider>
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
};

export default UseContextHook;
export { FirstName, LastName, Country };
