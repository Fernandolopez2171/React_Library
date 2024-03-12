"use client"; // This is a client component
import React, { useState } from "react";
import "../assets/Styles/Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="card">
        <a className="login">Log in</a>
        <div className="inputBox">
          <input
            type="text"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="user">Username</span>
        </div>

        <div className="inputBox">
          <input
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </div>

        <button
          className="enter"
          onClick={handleLogin}
          disabled={!username || !password}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default Login;
