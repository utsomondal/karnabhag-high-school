import { LiaUserFriendsSolid } from "react-icons/lia";

const Committee = () => {
  return (
    <section className="p-6 font-bengali">
      <div className="mb-10 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-center text-blue-600">School Committee</h2>
        <LiaUserFriendsSolid className="text-blue-600 text-3xl ml-2" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* সভাপতি */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">সভাপতি</h3>
          <ul className="space-y-2">
            <li className="px-3 py-2 bg-gray-100 rounded text-center text-red-600 font-medium">
              নির্বাচিত হয়নি
            </li>
          </ul>
        </div>

        {/* দাতা সদস্য */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">দাতা সদস্য</h3>
          <ul className="space-y-2">
            <li className="px-3 py-2 bg-gray-100 rounded text-center text-red-600 font-medium">
              নির্বাচিত হয়নি
            </li>
          </ul>
        </div>

        {/* অভিভাবক সদস্য */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">অভিভাবক সদস্য</h3>
          <ul className="space-y-2">
            <li className="px-3 py-2 bg-gray-100 rounded text-center text-red-600 font-medium">
              নির্বাচিত হয়নি
            </li>
            <li className="px-3 py-2 bg-gray-100 rounded text-center text-red-600 font-medium">
              নির্বাচিত হয়নি
            </li>
            <li className="px-3 py-2 bg-gray-100 rounded text-center text-red-600 font-medium">
              নির্বাচিত হয়নি
            </li>
            <li className="px-3 py-2 bg-gray-100 rounded text-center text-red-600 font-medium">
              নির্বাচিত হয়নি
            </li>
          </ul>
        </div>

        {/* মহিলা সংরক্ষিত সদস্য */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">মহিলা সংরক্ষিত সদস্য</h3>
          <ul className="space-y-2">
            <li className="px-3 py-2 bg-gray-100 rounded text-center text-red-600 font-medium">
              নির্বাচিত হয়নি
            </li>
          </ul>
        </div>

        {/* শিক্ষক প্রতিনিধি */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">শিক্ষক প্রতিনিধি</h3>
          <ul className="space-y-2">
            <li className="px-3 py-2 bg-gray-100 rounded text-center text-red-600 font-medium">
              নির্বাচিত হয়নি
            </li>
            <li className="px-3 py-2 bg-gray-100 rounded text-center text-red-600 font-medium">
              নির্বাচিত হয়নি
            </li>
          </ul>
        </div>

        {/* মহিলা শিক্ষক প্রতিনিধি */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">মহিলা শিক্ষক প্রতিনিধি</h3>
          <ul className="space-y-2">
            <li className="px-3 py-2 bg-gray-100 rounded text-center text-red-600 font-medium">
              নির্বাচিত হয়নি
            </li>
          </ul>
        </div>

        {/* সদস্য সচিব */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">সদস্য সচিব</h3>
          <ul className="space-y-2">
            <li className="px-3 py-2 bg-gray-100 rounded text-center text-blue-600 font-medium">
              প্রধান শিক্ষক - <span className="font-italic text-sm">পদাধিকার বলে</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Committee;
