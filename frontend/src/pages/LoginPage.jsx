
import { useState } from "react";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";
import logo from "../assets/DF_logo.png";
import bgImage from "../assets/landingPic.png"; 
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/");
  };

  return (
    <div
      className="bg-purple-50 h-screen w-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${bgImage})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
      }}
    >
      
	<div className="w-full max-w-xl bg-white rounded-2xl shadow-xl relative z-10 mr-96 mt-12 p-8">
        <div className="box p-12 text-center">
          <img className="mx-auto h-52" src={logo} alt="Logo" />
          <h2 className="text-2xl mb-12 text-gray-700">
            Welcome to Digitalflake Admin
          </h2>

          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <Input
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password Input */}
            <Input
              icon={Lock}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Forgot Password Link */}
            <div className="flex items-center justify-end mb-4">
              <Link to="/forgot-password" className="text-purple-700 hover:underline text-xl mb-2">
                Forgot password?
              </Link>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 font-semibold mb-4">{error}</p>}

            {/* Login Button */}
            <button
              className={`w-full py-4 bg-purple-700 text-white font-bold rounded-lg shadow-lg transition duration-200 ${
                isLoading
                  ? "cursor-not-allowed"
                  : "hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              }`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="w-6 h-6 animate-spin mx-auto" />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>

        {/* Sign Up Section */}
        <div className="px-8 py-4 bg-gray-100 flex justify-center">
          <p className="text-xl text-gray-800">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-purple-700 hover:underline font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-purple-900 opacity-30 z-0"></div>
    </div>
  );
};

export default LoginPage;
