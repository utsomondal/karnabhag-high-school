const Badge = () => {
  return (
    <section id="badge" className="py-8 rounded-lg mt-10 border border-gray-400 mx-1 shadow-lg font-bengali">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4 text-center">বিদ্যালয়ের র‍্যাঙ্কিং</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded p-6 flex flex-col items-center justify-center">
            <div className="rounded-full bg-indigo-500 text-white w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2">
              ৮০
            </div>
            <div className="text-sm text-gray-600 font-medium text-center">জেলা র‍্যাঙ্ক</div>
          </div>
          <div className="rounded p-6 flex flex-col items-center justify-center">
            <div className="rounded-full bg-green-500 text-white w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2">
              ৪৯৬
            </div>
            <div className="text-sm text-gray-600 font-medium text-center">বোর্ড র‍্যাঙ্ক</div>
          </div>
          <div className="rounded p-6 flex flex-col items-center justify-center">
            <div className="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2">
              ৫২১
            </div>
            <div className="text-sm text-gray-600 font-medium text-center">বিভাগীয় র‍্যাঙ্ক</div>
          </div>
          <div className="rounded p-6 flex flex-col items-center justify-center">
            <div className="rounded-full bg-yellow-500 text-gray-800 w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2">
              ২২৫৬
            </div>
            <div className="text-sm text-gray-600 font-medium text-center">জাতীয় র‍্যাঙ্ক</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Badge;
