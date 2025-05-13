import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white py-8 px-4 mt-10">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <p className="text-base font-medium">
          Developed with ❤️ by{" "}
          <a href="https://www.facebook.com/utso.mondal2019/" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">
            Utso Mondal
          </a>{" "}
          | CSE 9th Semester, <a href="https://www.wub.edu.bd/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">World University of Bangladesh</a>
        </p>

        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/utsomondal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-all duration-200"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/utsomondal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-all duration-200"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:utsomondal2019@gmail.com"
            className="hover:text-gray-300 transition-all duration-200"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+8801580761282"
            className="hover:text-gray-300 transition-all duration-200"
            title="Phone"
          >
            <FaPhoneAlt />
          </a>
        </div>

        <p className="text-sm opacity-80">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
