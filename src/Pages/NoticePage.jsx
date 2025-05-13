import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";
import { FaFilePdf } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";

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
    <div className="min-h-screen py-10 px-4 sm:px-10">
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-4xl font-bold text-center text-blue-800">
          Notice Board
        </h1>
        <GrAnnounce className="text-blue-600 text-4xl ml-2" />
      </div>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading notices...</p>
      ) : notices.length === 0 ? (
        <p className="text-center text-lg text-gray-600">No notices found.</p>
      ) : (
        <>
          {/* Table layout for sm and up */}
          <div className="hidden sm:block overflow-x-auto rounded-lg shadow-sm">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-3 px-4">Serial</th>
                  <th className="py-3 px-4">Notice Title</th>
                  <th className="py-3 px-4">Upload Date & Time</th>
                  <th className="py-3 px-4 text-center">Download</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice, index) => (
                  <tr
                    key={notice.id}
                    className="border-t border-gray-200 hover:bg-gray-100 transition"
                  >
                    <td className="py-3 px-4 pl-8">{index + 1}</td>
                    <td className="py-3 px-4">
                      <a
                        href={notice.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-800 font-medium"
                      >
                        {notice.title}
                      </a>
                    </td>
                    <td className="py-3 px-4">
                      {new Date(notice.upload_date).toLocaleString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </td>
                    <td className="py-3 px-4 text-center flex justify-center items-center">
                      <a
                        href={notice.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-800 text-xl"
                      >
                        <FaFilePdf/>
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
                <p className="text-sm text-gray-500 mb-2">#{index + 1}</p>
                <h2 className="text-lg font-semibold text-blue-800">
                  <a
                    href={notice.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {notice.title}
                  </a>
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Uploaded:{" "}
                  {new Date(notice.upload_date).toLocaleString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </p>
                <div className="mt-3 flex justify-end">
                  <a
                    href={notice.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    <FaFilePdf className="mr-1" /> Download
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
