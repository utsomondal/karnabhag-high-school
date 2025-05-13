import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import { FaFilePdf } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";

// Convert English digits to Bengali
const convertToBengaliNumerals = (input) => {
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return input
    .toString()
    .split("")
    .map((d) => bengaliDigits[d] || d)
    .join("");
};

// Bengali month names
const convertToBengaliMonth = (monthIndex) => {
  const bengaliMonths = [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ];
  return bengaliMonths[monthIndex];
};

// Bengali date formatter (24-hour)
const convertDateToBengali = (dateString) => {
  const date = new Date(dateString);
  const day = convertToBengaliNumerals(date.getDate());
  const month = convertToBengaliMonth(date.getMonth());
  const year = convertToBengaliNumerals(date.getFullYear());
  const hour = convertToBengaliNumerals(
    date.getHours().toString().padStart(2, "0")
  );
  const minutes = convertToBengaliNumerals(
    date.getMinutes().toString().padStart(2, "0")
  );

  return `${day} ${month} ${year} - ${hour}:${minutes}`;
};

const NoticePage = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotices = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("notices")
      .select("*")
      .order("upload_date", { ascending: false });

    if (error) {
      console.error("Error fetching notices:", error.message);
    } else {
      setNotices(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <div className="min-h-screen py-10 px-4 sm:px-10 font-noto">
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-4xl font-bold text-center text-blue-800 font-bengali">
          নোটিশ বোর্ড
        </h1>
        <GrAnnounce className="text-blue-600 text-4xl ml-2" />
      </div>

      {loading ? (
        <p className="text-center text-lg text-gray-600">লোড হচ্ছে...</p>
      ) : notices.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          কোনো নোটিশ পাওয়া যায়নি।
        </p>
      ) : (
        <>
          {/* Table layout for sm and up */}
          <div className="hidden sm:block overflow-x-auto rounded-lg shadow-sm">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-3 px-4 text-center">ক্রমিক</th>
                  <th className="py-3 px-4 text-center">নোটিশ শিরোনাম</th>
                  <th className="py-3 px-4 text-center">আপলোড তারিখ ও সময়</th>
                  <th className="py-3 px-4 text-center">ডাউনলোড</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice, index) => (
                  <tr
                    key={notice.id}
                    className="border-t border-gray-200 hover:bg-gray-200 transition"
                  >
                    <td className="py-3 px-4 text-center">
                      {convertToBengaliNumerals(index + 1)}
                    </td>
                    <td className="py-3 px-4 max-w-[600px]">
                      <a
                        href={notice.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-800 font-medium break-words whitespace-normal"
                      >
                        {notice.title}
                      </a>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span>{convertDateToBengali(notice.upload_date)}</span>
                    </td>
                    <td className="py-3 px-4 text-center flex justify-center items-center">
                      <a
                        href={notice.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-800 text-xl"
                      >
                        <FaFilePdf />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card layout for small screens */}
          <div className="block sm:hidden space-y-4">
            {notices.map((notice, index) => (
              <div
                key={notice.id}
                className="border border-gray-200 rounded-lg shadow-sm p-4"
              >
                <p className="text-sm text-gray-500 mb-2">
                  ক্রমিক: {convertToBengaliNumerals(index + 1)}
                </p>
                <h3 className="text-base font-semibold text-blue-800 break-words whitespace-normal">
                  <a
                    href={notice.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {notice.title}
                  </a>
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  আপলোড: {convertDateToBengali(notice.upload_date)}
                </p>
                <div className="mt-3 flex justify-end">
                  <a
                    href={notice.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    <FaFilePdf className="mr-1" /> ডাউনলোড
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default NoticePage;
