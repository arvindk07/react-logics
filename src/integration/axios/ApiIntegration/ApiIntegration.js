import React from "react";
import axios from "axios";

const ApiIntegration = () => {
  let cancelToken;
  const onType = async (e) => {
    const search = e.target.value;

    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Canceling the previous req");
    }

    cancelToken = axios.cancelToken.source();

    const result = await axios.get(
      `http://localhost:4000/courses?q=${search}`,
      {
        cancelToken: cancelToken.token,
      }
    );

    console.table(result.data);
  };
  return (
    <div style={{ marginTop: "em", textAlign: "center" }}>
      <input type="text" placeholder="Enter Search" onChange={onType} />
    </div>
  );
};

export default ApiIntegration;
