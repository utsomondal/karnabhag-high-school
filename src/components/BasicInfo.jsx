const BasicInfo = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 my-8 border border-gray-400 mx-1 font-bengali">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">সাধারণ</h3>
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium text-gray-700">প্রতিষ্ঠানের নাম:</span>
            <span className="text-gray-900">কর্ণভাগ উচ্চ বিদ্যালয়</span>
            <span className="font-medium text-gray-700">বিকল্প নাম:</span>
            <span className="text-gray-900">Karnabhag High School</span>
            <span className="font-medium text-gray-700">EIIN:</span>
            <span className="text-gray-900">123226</span>
            <span className="font-medium text-gray-700">
              প্রতিষ্ঠার তারিখ:
            </span>
            <span className="text-gray-900">০১ জানুয়ারি, ১৯৭১</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            স্বীকৃতি ও অনুমোদন
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium text-gray-700">স্বীকৃতি:</span>
            <span className="text-gray-900">স্বীকৃত</span>
            <span className="font-medium text-gray-700">স্বীকৃতি তারিখ:</span>
            <span className="text-gray-900">০৪ আগস্ট, ১৯৯৬</span>
            <span className="font-medium text-gray-700">
              স্বীকৃতির স্তর:
            </span>
            <span className="text-gray-900">মাধ্যমিক</span>
            <span className="font-medium text-gray-700">বোর্ড:</span>
            <span className="text-gray-900">রাজশাহী</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            MPO তথ্য
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium text-gray-700">MPO স্তর:</span>
            <span className="text-gray-900">হ্যাঁ</span>
            <span className="font-medium text-gray-700">MPO নম্বর:</span>
            <span className="text-gray-900">8304091304</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            একাডেমিক ও প্রশাসন
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium text-gray-700">প্রতিষ্ঠানের ধরন:</span>
            <span className="text-gray-900">মাধ্যমিক</span>
            <span className="font-medium text-gray-700">বিষয়বস্তু:</span>
            <span className="text-gray-900">
              ব্যবসায় শিক্ষা, বিজ্ঞান, মানবিক বিদ্যা
            </span>
            <span className="font-medium text-gray-700">যৌথ শিক্ষা:</span>
            <span className="text-gray-900">মিশ্রিত</span>
            <span className="font-medium text-gray-700">শিফট:</span>
            <span className="text-gray-900">দিন</span>
            <span className="font-medium text-gray-700">ব্যবস্থাপনা:</span>
            <span className="text-gray-900">ব্যবস্থাপনাধীন</span>
          </div>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            অবস্থান তথ্য
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium text-gray-700">অঞ্চল:</span>
            <span className="text-gray-900">গ্রামীণ</span>
            <span className="font-medium text-gray-700">অবস্থান:</span>
            <span className="text-gray-900">মাঠ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
