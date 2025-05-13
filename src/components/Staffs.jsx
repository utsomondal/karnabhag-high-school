import React from "react";
import { HiUser, HiBadgeCheck } from "react-icons/hi";
import { MdWork } from "react-icons/md";

const staffs = [
  {
    name: "MD AZAHAR ALI PK",
    designation: "3RD CLASS EMPLOYEE",
  },
  {
    name: "NAIMUDDIN PK",
    designation: "4TH CLASS EMPLOYEE",
  },
  {
    name: "MD. ABDUL MALEK",
    designation: "4TH CLASS EMPLOYEE",
  },
  {
    name: "MUKTI RANI",
    designation: "AYAH",
  },
  {
    name: "MD. ASADUL ISLAM",
    designation: "SECURITY GUARD",
  },
  {
    name: "MD. NAIM HOSSAIN",
    designation: "OFFICE ASSISTANT (MLSS)",
  },
];

const Staffs = () => {
  return (
    <div className="p-6 min-h-[calc(100vh-232px)]">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-800 flex items-center justify-center gap-2">
        <MdWork className="text-blue-600" /> Meet Our Support Staff
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {staffs.map((staff, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-5 hover:shadow-2xl transition duration-300 ease-in-out"
          >
            <div className="flex items-center gap-3 mb-4">
              <HiUser className="text-blue-600 text-xl" />
              <h2 className="text-xl font-semibold text-gray-800">
                {staff.name}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <HiBadgeCheck className="text-green-600 text-lg" />
              <p className="text-sm text-gray-700">{staff.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staffs;
