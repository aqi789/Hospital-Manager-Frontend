import React from "react";
import Sidebar from "./Sidebar";
import DashboardNav from "./DashbboardNav";
import EmpCard from "./Employee/EmpCard";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#3ba9a9", height: "100%" }}>
      <div>
        <DashboardNav />
      </div>
      <div>
        <Sidebar />
      </div>
      <EmpCard />
    </div>
  );
};

export default Dashboard;
