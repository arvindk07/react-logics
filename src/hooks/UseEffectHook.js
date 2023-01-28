import React, { Component, useEffect, useState } from "react";

const UseEffectHook = () => {
  const [content, setContent] = useState("posts");
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("componentDidMount");
  }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + content)
      .then((res) => res.json())
      .then((json) => setItems(json));

    console.log("componentDidUpdate");
    return () => {
      // cleaning
      console.log("Unmount");
    };
  }, [content]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count:{count}</button>
      <button onClick={() => setContent("posts")}>Post</button>
      <button onClick={() => setContent("users")}>Users</button>
      <button onClick={() => setContent("comments")}>Comments</button>

      <h1>{content}</h1>

      <ul>{items && items.map((item) => <li key={item.id}>{item.id}</li>)}</ul>
    </div>
  );
};

export default UseEffectHook;
