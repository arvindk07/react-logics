import { useState, useRef } from "react";

const UnControlledComponents = () => {
  const luckName = useRef(null);
  const [show, setShow] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const name = luckName.current.value;

    name === "" ? alert("plz fill the data") : setShow(true);
  };
  return (
    <div>
      <h1>UnControlled Components</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="">Enter Your Lucky Name</label>
        <input type="text" id="luckyname" ref={luckName} />
        <button>Submit</button>
        <p>{show ? `your lucky name is ${luckName.current.value}` : ""}</p>
      </form>
    </div>
  );
};

export default UnControlledComponents;
