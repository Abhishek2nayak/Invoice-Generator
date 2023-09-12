import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import SidebarLayout from "../Components/Layouts/SidebarLayout";
import Dashboard from "../Components/Dashboard/Dashboard";
import Inbox from "../Components/Dashboard/Inbox";
import MyTeam from "../Components/Dashboard/MyTeam";
import Projects from "../Components/Dashboard/Projects";
import Setting from "../Components/Dashboard/Setting";
import Tasks from "../Components/Dashboard/Tasks";
import Calender from "../Components/Dashboard/Calender";
const DefineRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SidebarLayout />}>
            <Route index path="dashboard" element={<Dashboard />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="myteam" element={<MyTeam />} />
            <Route path="projects" element={<Projects />} />
            <Route path="settings" element={<Setting />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="calender" element={<Calender />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};

export default DefineRoutes;
