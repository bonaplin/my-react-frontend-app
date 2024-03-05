import React from "react";
import Sidebar from "../components/navbar/Sidebar";

function Activity() {
  return (
    <div className="Activity" id="activity-outer-container">
      <Sidebar
        pageWrapId={"activity-page-wrap"}
        outerContainerId={"activity-outer-container"}
      />
      <div className="page-wrap" id="activity-page-wrap">
        <h1>Activity</h1>
      </div>
    </div>
  );
}
export default Activity;
