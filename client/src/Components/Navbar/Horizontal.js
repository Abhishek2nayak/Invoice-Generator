import React from "react";
import {Link} from 'react-router-dom'
const Horizontal = () => {
    return (
        <div className="cnavbar flex justify-between items-center pl-5 pr-5">
            <menu className="flex">
                <ul className="menu menu-vertical lg:menu-horizontal  rounded-box">
                    <li><h1>Task Manager</h1></li>
                    <li><Link to='/alltasks'>All Tasks</Link></li>
                    <li><Link to='/todays'>Today's</Link></li>
                    <li><Link to='upcoming'>Upcoming </Link></li>
                    <li><Link to='completed'>Completed</Link></li>
                </ul>
            </menu>
            <menu className="flex">

                <ul className="menu menu-vertical lg:menu-horizontal  rounded-box">
                    <li><a></a></li>
                    <li><a><div className="avatar">
  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" />
  </div>
</div></a></li>
                </ul>
            </menu>
        </div>
    )
        ;
};

export default Horizontal;
