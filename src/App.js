import React from "react";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App" id="outer-container">
      <div className="page-wrap" id="app-page-wrap">
        <h1>Welcome to this cool Application</h1>
        <Login />
      </div>
    </div>
  );
}

export default App;
