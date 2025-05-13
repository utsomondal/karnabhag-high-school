import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Optional: Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navigationItems = [
    { name: "হোম", path: "/" },
    { name: "নোটিশ", path: "/notices" },
    { name: "শিক্ষকমণ্ডলী", path: "/teachers" },
    { name: "কর্মচারী", path: "/staffs" },
  ];

  return (
    <nav className="bg-[#E8E8E8] sticky top-0 z-50 w-full">
      <div className="navbar px-4 sm:px-6 lg:px-8 py-2 shadow-md relative">
        {/* Left: Logo and Mobile Menu */}
        <div className="navbar-start flex items-center gap-2">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 font-tiro whitespace-nowrap"
          >
            কর্ণভাগ উচ্চ বিদ্যালয়
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-base">
            {navigationItems.map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold text-blue-600 font-bengali "
                      : "font-bengali text-gray-700 "
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Login Buttons */}
        <div className="navbar-end">
          <Link
            to="/login"
            className="hidden lg:flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition-transform duration-200 hover:scale-105 font-bengali"
          >
            লগইন
          </Link>

          <Link
            to="/login"
            className="lg:hidden text-2xl text-blue-600 hover:text-blue-700 p-2 transition-transform duration-200"
            aria-label="Login"
          >
            <BiLogIn />
          </Link>
        </div>

        {/* Floating Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-17 left-1 w-fit bg-base-100 shadow-lg z-40 lg:hidden rounded-xl"
          >
            <ul className="menu p-2 text-[16px]">
              {navigationItems.map(({ name, path }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
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
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
