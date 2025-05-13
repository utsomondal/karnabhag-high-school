import React from "react";
import { HiUser, HiBadgeCheck } from "react-icons/hi";
import { MdWork } from "react-icons/md";

const staffs = [
  {
    name: "মোঃ আজহার আলী প্রামাণিক",
    designation: "তৃতীয় শ্রেণির কর্মচারী",
  },
  {
    name: "নইমুদ্দিন প্রামাণিক",
    designation: "চতুর্থ শ্রেণির কর্মচারী",
  },
  {
    name: "মোঃ আব্দুল মালেক",
    designation: "চতুর্থ শ্রেণির কর্মচারী",
  },
  {
    name: "মুক্তি রাণী",
    designation: "আয়া",
  },
  {
    name: "মোঃ আসাদুল ইসলাম",
    designation: "নিরাপত্তা প্রহরী",
  },
  {
    name: "মোঃ নাঈম হোসেন",
    designation: "অফিস সহকারী (এমএলএসএস)",
  },
];

const Staffs = () => {
  return (
    <div className="p-4 sm:p-6 font-bengali">
      <div className="mb-10 flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 border-b-2 border-blue-600 pb-1">
          আমাদের সহায়ক কর্মীবৃন্দ
        </h1>
      </div>

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
