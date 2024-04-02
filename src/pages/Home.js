import React from "react";
import Sidebar from "../components/navbar/Sidebar.js";
import "../index.css";
import { userStore } from "../stores/UserStore.js";
import WebSocketClient from "../components/websocket/WebSocketClient";

function Home() {
  const notifications = userStore((state) => state.notifications); 
  WebSocketClient();
  const username = userStore((state) => state.username);


  return (
    <div className="Home" id="home-outer-container">
      <Sidebar
        pageWrapId={"home-page-wrap"}
        outerContainerId={"home-outer-container"}
      />
      <div className="page-wrap" id="home-page-wrap">
        <h1>Home</h1>
        <p>Welcome, {username}!</p>
        <h2>Notifications</h2>
        <p>You have {notifications ? notifications.length : 0} notifications</p>
      </div>
      <div className="cards">
        <div className="card">Proejct 1</div>
        <div className="card">Project 2</div>
        <div className="card">Project 3</div>
        <div className="card">Project 4</div>
        <div className="card">Project 5</div>
        <div className="card">Project 6</div>
        <div className="card">Project 7</div>
        <div className="card">Project 8</div>
        <div className="card">Project 9</div>
        <div className="card">Project 10</div>
        <div className="card">Project 11</div>
        <div className="card">Project 12</div>
        <div className="card">Project 13</div>
      </div>
    </div>
  );
}

export default Home;
