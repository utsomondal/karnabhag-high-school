import React from "react";

const BasicInfo = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 my-8 border border-gray-400 mx-1">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Basic Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">General</h3>
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium text-gray-700">Institute's Name:</span>
            <span className="text-gray-900">Karnabhag High School</span>
            <span className="font-medium text-gray-700">Alternative Name:</span>
            <span className="text-gray-900">কর্ণভাগ উচ্চ বিদ্যালয়</span>
            <span className="font-medium text-gray-700">EIIN:</span>
            <span className="text-gray-900">123226</span>
            <span className="font-medium text-gray-700">
              Date of Establishment:
            </span>
            <span className="text-gray-900">01 January, 1971</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Recognition & Affiliation
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium text-gray-700">Recognition:</span>
            <span className="text-gray-900">Recognized</span>
            <span className="font-medium text-gray-700">Recognition Date:</span>
            <span className="text-gray-900">04 August, 1996</span>
            <span className="font-medium text-gray-700">
              Recognition Level:
            </span>
            <span className="text-gray-900">Secondary</span>
            <span className="font-medium text-gray-700">Board:</span>
            <span className="text-gray-900">Rajshahi</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            MPO Details
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium text-gray-700">MPO Level:</span>
            <span className="text-gray-900">Yes</span>
            <span className="font-medium text-gray-700">MPO Number:</span>
            <span className="text-gray-900">8304091304</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Academic & Administration
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium text-gray-700">Institute Type:</span>
            <span className="text-gray-900">Secondary</span>
            <span className="font-medium text-gray-700">Disciplines:</span>
            <span className="text-gray-900">
              Business Studies, Science, Humanities
            </span>
            <span className="font-medium text-gray-700">Coeducation:</span>
            <span className="text-gray-900">Combined</span>
            <span className="font-medium text-gray-700">Shift:</span>
            <span className="text-gray-900">Day</span>
            <span className="font-medium text-gray-700">Management:</span>
            <span className="text-gray-900">Managing</span>
          </div>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Location Details
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium text-gray-700">Region:</span>
            <span className="text-gray-900">Grameen</span>
            <span className="font-medium text-gray-700">Location:</span>
            <span className="text-gray-900">Plain Land</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
