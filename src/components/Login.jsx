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
      // redirect to dashboard
      navigate("/dashboard");
    } else {
      alert("Invalid username or pin!");
    }
  };

  return (
    <div className="min-h-[calc(100vh-313px)] flex items-center justify-center px-4 mt-10">
      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl">
        {/* Left Side Text */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome Back 👋
          </h2>
          <p className="text-lg opacity-90">
            Login to access the admin dashboard and manage notices and updates
            for <span className="font-bold">Karnabhag High School</span>
          </p>
        </div>

        {/* Login Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Admin Login
          </h3>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Admin Username
              </label>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Admin Pin
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
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
