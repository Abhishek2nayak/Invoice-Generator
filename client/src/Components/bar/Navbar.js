import React from "react";



const Navbar = () => {
  const token = localStorage.getItem('user')
 
  return (
    <div className="c-navbar flex justify-between items-center pl-3 pr-3">
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered h-auto"
        />
      </div>
      <div className="">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-8 rounded-full">
              <img src="https://images.unsplash.com/photo-1574047473179-a73921fc1eb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            {"token"}
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
