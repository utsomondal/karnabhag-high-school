import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
  const navigationItems = (
    <>
      {[
        { name: "হোম", path: "/" },
        { name: "নোটিশ", path: "notices" },
        { name: "শিক্ষকমণ্ডলী", path: "teachers" },
        { name: "কর্মচারী", path: "staffs" },
      ].map(({ name, path }) => (
        <li key={path}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-blue-600 font-bengali"
                : "font-bengali text-gray-700"
            }
          >
            {name}
          </NavLink>
        </li>
      ))}
    </>
  );

  return (
    <nav className="bg-[#E8E8E8] sticky top-0 z-50 w-full">
      <div className="navbar px-4 sm:px-6 lg:px-8 py-2 shadow-md">
        {/* Left: Logo and Mobile Menu */}
        <div className="navbar-start flex items-center gap-2">
          {/* Mobile Menu Button */}
          <div className="dropdown lg:hidden">
            <button
              tabIndex={0}
              className="btn btn-ghost p-1 text-xl"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 mt-3 w-52 p-2 shadow rounded-box z-10"
            >
              {navigationItems}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 font-tiro whitespace-nowrap"
          >
            কর্ণভাগ উচ্চ বিদ্যালয়
          </Link>
        </div>

        {/* Center: Navigation for large screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-[16px]">
            {navigationItems}
          </ul>
        </div>

        {/* Right: Login */}
        <div className="navbar-end">
          {/* Desktop login button */}
          <Link
            to="login"
            className="hidden lg:flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition-transform duration-200 hover:scale-105 font-bengali"
          >
            লগইন
          </Link>

          {/* Mobile login icon */}
          <Link
            to="login"
            className="lg:hidden text-2xl text-blue-600 hover:text-blue-700 p-2 transition-transform duration-200"
            aria-label="Login"
          >
            <BiLogIn />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
