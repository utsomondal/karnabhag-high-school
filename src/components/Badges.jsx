import React from 'react';

const Badge = () => {
  return (
    <section id="badge" className="py-8 rounded-lg mt-10 border border-gray-400 mx-1 shadow-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">School Rankings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded p-6 flex flex-col items-center justify-center">
            <div className="rounded-full bg-indigo-500 text-white w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2">
              80
            </div>
            <div className="text-sm text-gray-600 font-medium text-center">District Rank</div>
          </div>
          <div className="bg-white rounded p-6 flex flex-col items-center justify-center">
            <div className="rounded-full bg-green-500 text-white w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2">
              496
            </div>
            <div className="text-sm text-gray-600 font-medium text-center">Board Rank</div>
          </div>
          <div className="bg-white rounded p-6 flex flex-col items-center justify-center">
            <div className="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2">
              521
            </div>
            <div className="text-sm text-gray-600 font-medium text-center">Division Rank</div>
          </div>
          <div className="bg-white rounded p-6 flex flex-col items-center justify-center">
            <div className="rounded-full bg-yellow-500 text-gray-800 w-16 h-16 flex items-center justify-center text-2xl font-bold mb-2">
              2256
            </div>
            <div className="text-sm text-gray-600 font-medium text-center">National Rank</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Badge;