import React from "react";
import Sidebar from "../components/navbar/Sidebar";
import "../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { userStore } from "../stores/UserStore";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  console.log(inputs);
  const updateName = userStore((state) => state.updateName);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(inputs);
  //   updateName(inputs.username);
  //   navigate("/home", { replace: true });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a POST request to the login endpoint
      const response = await fetch(
        "http://localhost:8080/my_activities_backend/rest/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs), // inputs should contain the username and password
        }
      );

      console.log(inputs);
      if (!response.ok) {
        throw new Error("Login failed. Please try again.");
      }

      const text = await response.text();

      try {
        // Parse the JSON response
        const data = await response.json();

        // Store the token in local storage
        localStorage.setItem("token", data.token);
      } catch (error) {
        localStorage.setItem("token", text);
      }

      // Continue with your existing code...
      updateName(inputs.email);
      navigate("/home", { replace: true });
    } catch (error) {
      console.log(error);
      // Optionally, we can set an error state variable to display the error message
    }
  };

  return (
    <div className="Login" id="profile-outer-container">
      <div className="page-wrap" id="login-page-wrap">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <label>
            Enter your email address:
            <input
              type="text"
              name="email"
              defaultValue={inputs.username || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            Enter your password:
            <input
              type="password"
              name="password"
              defaultValue={inputs.password || ""}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}
export default Login;
