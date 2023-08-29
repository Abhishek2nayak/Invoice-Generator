import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";


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
