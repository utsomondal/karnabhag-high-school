import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME;
  const ADMIN_PIN = import.meta.env.VITE_ADMIN_PIN;

  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === ADMIN_USERNAME && pin === ADMIN_PIN) {
      // ড্যাশবোর্ডে রিডিরেক্ট করুন
      navigate("/dashboard");
    } else {
      alert("অবৈধ ব্যবহারকারী নাম বা পিন! দয়া করে সঠিক তথ্য প্রদান করুন।");
    }
  };

  return (
    <div className="min-h-[calc(100vh-312px)] flex items-center justify-center px-4 mt-10 font-bengali">
      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl">
        {/* বাম পাশে স্বাগতম বার্তা */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            স্বাগতম 👋
          </h2>
          <p className="text-lg opacity-90">
            অ্যাডমিন ড্যাশবোর্ডে প্রবেশ করতে এবং <span className="font-bold">কর্ণভাগ উচ্চ বিদ্যালয়</span> এর নোটিশ ও আপডেট পরিচালনা করতে লগইন করুন।
          </p>
        </div>

        {/* লগইন ফর্ম */}
        <div className="w-full lg:w-1/2 p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">
            অ্যাডমিন লগইন
          </h3>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                অ্যাডমিন ইউজারনেম
              </label>
              <input
                type="text"
                placeholder="ব্যবহারকারী নাম"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                অ্যাডমিন পিন
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
            >
              লগইন করুন
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
