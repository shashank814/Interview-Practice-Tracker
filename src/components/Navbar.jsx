import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="rounded-2xl border border-sky-100 bg-white px-4 py-4 shadow-sm sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <h1 className="text-xl font-bold text-sky-700 sm:text-2xl">
          Interview Practice Tracker
        </h1>

        <div className="flex gap-2 text-sm font-medium sm:gap-3 sm:text-base">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 transition-all sm:px-4 ${
                isActive
                  ? "bg-sky-500 text-white shadow-sm"
                  : "text-gray-600 hover:bg-sky-50 hover:text-sky-600"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/questions"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 transition-all sm:px-4 ${
                isActive
                  ? "bg-sky-500 text-white shadow-sm"
                  : "text-gray-600 hover:bg-sky-50 hover:text-sky-600"
              }`
            }
          >
            Questions
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Navbar;