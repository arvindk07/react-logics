import { useEffect, useState } from "react";

const ChildHook = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(3));
  }, [getItems]);
  return (
    <div>
      {items &&
        items.map((item) => {
          return <div key={item}>{item}</div>;
        })}
    </div>
  );
};

export default ChildHook;
