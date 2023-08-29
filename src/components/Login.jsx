import { useState } from "react";
import Navigation from "./Navigation";

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
    <div className="login-container">
      <Navigation />
      <img
        src="../src/assets/banner.png"
        className="siteBanner"
        alt="Shop Direct Banner"
      />
      <div className="login-content">
        <h1>Login</h1>
        <form>
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="login-btn">
            <button>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}
