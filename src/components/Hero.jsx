import React from "react";
import heroImage from "../assets/hero.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 px-1">
      <div
        className="hero relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh] rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay absolute inset-0 bg-opacity-50 rounded-xl"></div>
        <div className="hero-content relative z-10 text-white text-center flex items-center justify-center h-full px-4">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-3xl">
            <h1 className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight font-tiro">
              কর্ণভাগ উচ্চ বিদ্যালয়
            </h1>
            <p className="mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-base text-white/80">
              <span className="block sm:hidden font-tiro">
                এখানে শিক্ষাই শুধু নয়, আত্মবিশ্বাসের বীজ বুনে আমরা তৈরি করি আগামীর সেরা মানুষ।
              </span>
              <span className="hidden sm:block">
                ১৯৭১ সালে প্রতিষ্ঠিত, নওগাঁর কর্ণভাগে একটি শীর্ষ মাধ্যমিক বিদ্যালয়, যা রাজশাহী শিক্ষা বোর্ডের অধীনে মানসম্পন্ন শিক্ষা প্রদান এবং শিক্ষার্থীদের সাফল্য অর্জনে প্রতিশ্রুতিবদ্ধ। আমরা ব্যবসায় শিক্ষা, বিজ্ঞান এবং মানবিক বিদ্যায় একটি সমৃদ্ধ পাঠ্যক্রম প্রদান করি, যা শিক্ষার্থীদের ভবিষ্যতের পথ চলার জন্য প্রস্তুত করে।
              </span>
            </p>
            <div className="flex justify-center items-center gap-3 font-bengali">
              <Link to="/notices">
                <button className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center border border-blue-500 transition-all duration-300 ease-in-out">
                  নোটিশ বোর্ড
                  <FaArrowRight className="ml-1 sm:ml-2" />
                </button>
              </Link>
              <Link to="/committee">
                <button className="btn btn-outline hover:bg-blue-700 text-white font-semibold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center border-2 hover:border border-blue-500 transition-all duration-300 ease-in-out">
                  স্কুল কমিটি
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
