import React from "react";
import { HiUser } from "react-icons/hi";
import {
  MdSchool,
  MdOutlineMenuBook,
  MdScience,
  MdComputer,
  MdAgriculture,
} from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { FaPersonChalkboard } from "react-icons/fa6";

const allTeachers = [
  { name: "গণেশ চন্দ্র মণ্ডল", designation: "প্রধান শিক্ষক" },
  { name: "মোঃ গোলাম মোস্তফা প্রামাণিক", designation: "সহকারী প্রধান শিক্ষক" },
  { name: "আসমাউল হুসনা", designation: "কম্পিউটার শিক্ষক" },
  { name: "মোঃ বেলাল উদ্দিন দেওয়ান", designation: "শারীরিক শিক্ষক" },
  {
    name: "বিপ্লব কুমার মণ্ডল",
    designation: "সহকারী শিক্ষক (গণিত ও সাধারণ বিজ্ঞান)",
  },
  { name: "রাজেন্দ্রনাথ প্রামাণিক", designation: "সহকারী শিক্ষক (ইংরেজি)" },
  { name: "মোঃ নজরুল ইসলাম", designation: "কৃষি শিক্ষক" },
  { name: "মোঃ আব্দুল হামিদ", designation: "সহকারী শিক্ষক (ব্যবসায় শিক্ষা)" },
  { name: "রিতা রাণী", designation: "হিন্দু ধর্মীয় শিক্ষক" },
  { name: "মোছাঃ আনজুমান আরা খানম", designation: "সহকারী শিক্ষক (বিজ্ঞান)" },
  { name: "মোঃ গোলাম রাব্বানী", designation: "সহকারী শিক্ষক (ইংরেজি)" },
  {
    name: "শিপ্রা সরকার",
    designation: "সহকারী শিক্ষক (গ্রন্থাগার ও তথ্য বিজ্ঞান)",
  },
  { name: "মোহাম্মদ মামুনুর রশিদ", designation: "মুসলিম ধর্মীয় শিক্ষক" },
  { name: "মোঃ আব্দুস সামাদ", designation: "সহকারী শিক্ষক (ভৌতবিজ্ঞান)" },
  { name: "রাজিয়া সুলতানা", designation: "সহকারী শিক্ষক (বাংলা)" },
];

// অর্ডার ঠিক করার জন্য sort
const sortedTeachers = [
  ...allTeachers.filter((t) => t.designation.includes("প্রধান শিক্ষক")),
  // ...allTeachers.filter(t => t.designation.includes("সহকারী প্রধান শিক্ষক")),
  ...allTeachers.filter((t) => t.designation.startsWith("সহকারী শিক্ষক")),
  ...allTeachers.filter(
    (t) =>
      !t.designation.includes("প্রধান শিক্ষক") &&
      !t.designation.includes("সহকারী প্রধান শিক্ষক") &&
      !t.designation.startsWith("সহকারী শিক্ষক")
  ),
];

// আইকন সিলেক্টর
const getIcon = (designation) => {
  if (designation.includes("প্রধান শিক্ষক"))
    return <MdSchool className="text-blue-600 text-lg" />;
  if (designation.includes("ধর্ম"))
    return <MdOutlineMenuBook className="text-purple-600 text-lg" />;
  if (designation.includes("কম্পিউটার"))
    return <MdComputer className="text-green-600 text-lg" />;
  if (designation.includes("বিজ্ঞান") || designation.includes("ভৌতবিজ্ঞান"))
    return <MdScience className="text-yellow-600 text-lg" />;
  if (designation.includes("কৃষি"))
    return <MdAgriculture className="text-green-700 text-lg" />;
  return <FaPersonChalkboard className="text-pink-600 text-lg" />;
};

const Teachers = () => {
  return (
    <div className="p-8 font-bengali">
      <div className="relative text-center mb-10">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 inline-block border-b-2 border-blue-600 pb-1 relative">
          আমাদের শিক্ষকমণ্ডলী
          {/* Positioned cap icon to the right and above, closer to title */}
          <MdSchool className="text-blue-800 text-xl sm:text-2xl md:text-3xl absolute top-[-20px] right-[-10px] sm:right-[-12px] md:right-[-15px] rotate-12" />
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedTeachers.map((teacher, index) => (
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
            <div className="flex items-center gap-2">
              {getIcon(teacher.designation)}
              <p className="text-sm text-gray-700">{teacher.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
