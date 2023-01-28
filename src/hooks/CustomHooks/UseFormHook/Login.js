import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ username: "", password: "" });

  const submitForm = (e) => {
    e.preventDefault();
    console.log(username, password);

    let errorCount = 0;
    if (username == "") {
      errorCount++;
      setError((prevState) => {
        return { ...prevState, username: "Username is required" };
      });
    } else {
      setError((prevState) => {
        return { ...prevState, username: "" };
      });
    }
    if (password == "") {
      errorCount++;
      setError((prevState) => {
        return { ...prevState, password: "Password is required" };
      });
    } else if (password.length < 6) {
      errorCount++;
      setError((prevState) => {
        return { ...prevState, password: "Password is too short" };
      });
    } else {
      setError((prevState) => {
        return { ...prevState, password: "" };
      });
    }
    if (errorCount == 0) {
      const formData = { username, password };
      console.log(formData);
      setUsername("");
      setPassword("");
    }
  };
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {error.username && <p>{error.username}</p>}
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error.password && <p>{error.password}</p>}
      <br />
      <input type="submit" />
      <br />
    </form>
  );
};

export default Login;
