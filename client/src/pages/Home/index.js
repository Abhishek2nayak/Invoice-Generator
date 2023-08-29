import React from "react";
import Navbar from "../../Components/bar/Navbar";
import Sidebar from "../../Components/bar/Sidebar";
import Main from "../../Components/Main";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="right">
        <Navbar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
