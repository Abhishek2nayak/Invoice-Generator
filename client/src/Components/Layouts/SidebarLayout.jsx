import React from "react";
import Navbar from "../bar/Navbar";
import Sidebar from "../bar/Sidebar";

import { Outlet } from "react-router";
const SidebarLayout = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="right">
        <Navbar />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
