import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
// import AllTasks from "../pages/main/AllTasks";
// import Today from "../pages/main/Today";
// import Upcoming from "../pages/main/Upcoming";
// import Completed from "../pages/main/Completed";

const DefineRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
         

        </Routes>
      </Router>
    </>
  );
};

export default DefineRoutes;
