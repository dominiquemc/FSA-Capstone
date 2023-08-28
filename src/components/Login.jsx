import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const fetchLogin = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: "mor_2314",
          password: "83r5^_",
        }),
      });

      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Login</h1>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <label>
        Password:
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button>Sign In</button>
    </>
  );
}
