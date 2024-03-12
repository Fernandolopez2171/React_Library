"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../assets/Styles/Home.css";
import Login from "../components/Login.";

export default function Home() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleLoginData = (data) => {
    setLoginData(data);
    console.log(data);
    if (data.username === "admin" && data.password === "admin") {
      router.push("/Dashboard");
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <div className="fullScreenCenter">
        <div>
          <Login onLogin={handleLoginData} />
        </div>
      </div>
    </div>
  );
}
