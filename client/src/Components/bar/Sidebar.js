import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="c-sidebar">
      <h1 className="font-bold text-center pt-5 pb-5">Task Manager</h1>
      <ul className="menu  w-full rounded-box">
        <IconNavList
          text="Dashboard"
          icon={<i class="ri-home-line"></i>}
          path={"/dashboard"}
        />
        <IconNavList
          text="Tasks"
          icon={<i class="ri-task-line"></i>}
          path={"/tasks"}
        />
        <IconNavList
          text="Calender"
          icon={<i class="ri-calendar-line"></i>}
          path={"/calender"}
        />
        <IconNavList
          text="Messages"
          icon={<i class="ri-chat-3-line"></i>}
          path={"/inbox"}
        />
        <IconNavList
          text="My Team"
          icon={<i class="ri-user-follow-line"></i>}
          path={"/myteam"}
        />
        <IconNavList
          text="Settings"
          icon={<i class="ri-settings-4-line"></i>}
          path={"/settings"}
        />
      </ul>
      <NavLink className="flex  pl-5 font-bold pt-5">Projects</NavLink>
      <ul className="w-full flex flex-col gap-3 pt-5">
        <IconNavList
          text={"My Project1"}
          icon={<i class="ri-arrow-right-s-fill"></i>}
        />
          <IconNavList
          text={"My Project2"}
          icon={<i class="ri-arrow-right-s-fill"></i>}
        />
          <IconNavList
          text={"My Project3"}
          icon={<i class="ri-arrow-right-s-fill"></i>}
        />
      
      </ul>
      
    </div>
  );
};

function IconNavList({ text, icon, path }) {
  return (
    <>
      <li>
        <NavLink
          to={path}
          className="flex gap-3 items-center pl-7 pr-7 text-sm"
        >
          {" "}
          <span>{icon}</span> <span>{text}</span>
        </NavLink>
      </li>
    </>
  );
}


export default Sidebar;
