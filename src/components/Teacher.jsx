import React from "react";
import { HiUser, HiBadgeCheck, HiBookOpen } from "react-icons/hi";
import { MdSchool } from "react-icons/md";

const teachers = [
  {
    name: "GANESH CHANDRA MONDAL",
    designation: "HEAD MASTER",
    subject: "N/A (NOT APPLICABLE)",
  },
  {
    name: "MD GOLAM MOSTAFA PRAMANIK",
    designation: "ASSISTANT HEAD MASTER",
    subject: "N/A (NOT APPLICABLE)",
  },
  {
    name: "ASMAL HUSNA",
    designation: "COMPUTER TEACHER",
    subject: "N/A (NOT APPLICABLE)",
  },
  {
    name: "MD BELAL HOSSAIN",
    designation: "PHYSICAL TEACHER",
    subject: "N/A (NOT APPLICABLE)",
  },
  {
    name: "BIPLAB KUMAR MONDAL",
    designation: "ASSISTANT TEACHER (MATH & G.SCIENCE)",
    subject: "N/A (NOT APPLICABLE)",
  },
  {
    name: "REJENDRA NATH PK.",
    designation: "ASSISTANT TEACHER (ENGLISH)",
    subject: "N/A (NOT APPLICABLE)",
  },
  {
    name: "MD NAZRUL ISLAM",
    designation: "AGRICULTURE",
    subject: "N/A (NOT APPLICABLE)",
  },
  {
    name: "MD ABDUL HAMID",
    designation: "ASSISTANT TEACHER (BUSINESS STUDY)",
    subject: "N/A (NOT APPLICABLE)",
  },
  {
    name: "RITA RANI",
    designation: "HINDU RELIGION TEACHER",
    subject: "N/A (NOT APPLICABLE)",
  },
  {
    name: "MST. ANJUMAN ARA KHANAM",
    designation: "ASSISTANT TEACHER (SCIENCE)",
    subject: "N/A (NOT APPLICABLE)",
  },
  {
    name: "MD. GOLAM RABBANI",
    designation: "ASSISTANT TEACHER (ENGLISH)",
    subject: "ENGLISH",
  },
  {
    name: "SHIPRA SARKER",
    designation: "ASSISTANT TEACHER",
    subject: "LIBRARY AND INFORMATION SCIENCE",
  },
  {
    name: "MOHAMMAD MAMUNUR RASHID",
    designation: "MUSLIM R.TEACHER",
    subject: "ISLAMIC STUDIES",
  },
  {
    name: "MD. ABDUS SAMAD",
    designation: "ASSISTANT TEACHER",
    subject: "PHYSICAL SCIENCE",
  },
  {
    name: "RAZIA SULTANA",
    designation: "ASSISTANT TEACHER",
    subject: "BANGLA",
  },
];

const Teachers = () => {
  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-800 flex items-center justify-center gap-2">
        <MdSchool className="text-blue-600" /> Meet Our Educators
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-5 hover:shadow-2xl transition duration-300 ease-in-out"
          >
            <div className="flex items-center gap-3 mb-4">
              <HiUser className="text-blue-600 text-xl" />
              <h2 className="text-xl font-semibold text-gray-800">
                {teacher.name}
              </h2>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <HiBadgeCheck className="text-green-600 text-lg" />
              <p className="text-sm text-gray-700">{teacher.designation}</p>
            </div>
            <div className="flex items-center gap-2">
              <HiBookOpen className="text-purple-600 text-lg" />
              <p className="text-sm text-gray-600">{teacher.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
