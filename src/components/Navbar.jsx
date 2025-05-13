import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
  const navigationItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold text-blue-500 font-bengali" : "font-bengali"
          }
          to={"/"}
        >
          হোম
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold text-blue-500 font-bengali" : "font-bengali"
          }
          to={"notices"}
        >
          নোটিশ
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold text-blue-500 font-bengali" : "font-bengali"
          }
          to={"teachers"}
        >
          শিক্ষকমণ্ডলী
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold text-blue-500 font-bengali" : "font-bengali"
          }
          to={"staffs"}
        >
          কর্মচারীবৃন্দ
        </NavLink>
      </li>
    </>
  );
  return (
    <nav>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-0 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navigationItems}
            </ul>
          </div>
          <Link
            to="/"
            className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 whitespace-nowrap ml-2 font-tiro"
          >
            কর্ণভাগ উচ্চ বিদ্যালয়
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px]">
            {navigationItems}
          </ul>
        </div>
        <div className="navbar-end">
          {/* Button for larger screens */}
          <Link
            to={"login"}
            className="hidden lg:flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-105 font-bengali"
          >
            <span>লগইন</span>
          </Link>

          {/* Button with icon for mobile */}
          <Link
            to={"login"}
            className="lg:hidden text-3xl text-blue-600 hover:text-blue-700 transition-all duration-200 ease-in-out"
          >
            <BiLogIn />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
