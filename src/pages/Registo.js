import React from "react";
import Sidebar from "../components/navbar/Sidebar";
import "../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { userStore } from "../stores/UserStore";

function Registo() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/my_activities_backend/rest/user/register", // "http://localhost:8080/my_activities_backend/rest/user/login
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs), // inputs should contain the username and password}
        }
      );
      console.log(inputs);
      if (!response.ok) {
        throw new Error("Registo failed. Please try again.");
      } else if (response.ok) {
        navigate("/login", { replace: true });
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="Registo" id="registo-outer-container">
      <div className="page-wrap" id="registo-page-wrap">
        <h1>Registo</h1>

        <form onSubmit={handleSubmit}>
          <label>
            Enter your username:
            <input
              type="text"
              name="username"
              defaultValue={inputs.username || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Enter your email address:
            <input
              type="email"
              name="email"
              defaultValue={inputs.email || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Enter your Name:
            <input
              type="name"
              name="name"
              defaultValue={inputs.name || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Enter your password:
            <input
              type="password"
              name="password"
              defaultValue={inputs.password || ""}
              onChange={handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Registo" />
        </form>
      </div>
    </div>
  );
}

export default Registo;
