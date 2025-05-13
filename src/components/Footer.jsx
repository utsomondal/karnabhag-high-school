import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-10 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 items-center">
        {/* Left section */}
        <div className="text-center md:text-left space-y-3">
          <p className="text-lg font-semibold">
            Developed with ❤️ by{" "}
            <a
              href="https://www.facebook.com/utso.mondal2019/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-gray-300"
            >
              Utso Mondal
            </a>
          </p>
          <p className="text-sm">
            CSE 9th Semester,{" "}
            <a
              href="https://www.wub.edu.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-gray-300"
            >
              World University of Bangladesh
            </a>
          </p>
          <p className="text-xs opacity-70">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right section: social links */}
        <div className="flex justify-center md:justify-end gap-4">
          {[
            {
              icon: <FaGithub />,
              href: "https://github.com/utsomondal",
              title: "GitHub",
            },
            {
              icon: <FaLinkedin />,
              href: "https://www.linkedin.com/in/utsomondal",
              title: "LinkedIn",
            },
            {
              icon: <FaEnvelope />,
              href: "mailto:utsomondal2019@gmail.com",
              title: "Email",
            },
            {
              icon: <FaPhoneAlt />,
              href: "tel:+8801580761282",
              title: "Phone",
            },
          ].map(({ icon, href, title }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              className="bg-white text-blue-800 p-3 rounded-full hover:bg-gray-100 transition"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
