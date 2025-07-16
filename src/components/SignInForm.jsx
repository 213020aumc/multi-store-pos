import { useState } from "react";
import {NavLink} from "react-router-dom"
import { Eye, EyeOff } from "lucide-react";
import { Apple, Facebook, Twitter, Google } from "../assets/icon";
import SocialButton from "./SocialButton";

// Sign In Form Component
const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Sign in attempt:", formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="max-w-md w-full">
      <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 backdrop-blur-sm bg-opacity-95">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold py-5 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
            Sign in
          </h1>
          <p className="text-gray-600">
            New to Swift Cart?
            {/* <a
              href="#"
              className="text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text hover:from-teal-700 hover:to-emerald-700 ml-1 font-medium transition-all duration-200"
            >
              Sign up for free
            </a> */}
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text hover:from-teal-700 hover:to-emerald-700 ml-1 font-medium transition-all duration-200 ${
                  isActive ? "underline" : ""
                }`
              }
            >
              Sign up for free
            </NavLink>
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-gradient-to-r from-gray-50 to-white focus:from-white focus:to-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-gradient-to-r from-gray-50 to-white focus:from-white focus:to-white"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-teal-600 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="text-right">
            <a
              href="#"
              className="text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text hover:from-orange-600 hover:to-red-600 font-medium transition-all duration-200"
            >
              Forgot password?
            </a>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-medium hover:from-emerald-700 hover:to-teal-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Sign in
          </button>
        </div>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-gray-200 to-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-3">
            <SocialButton onClick={() => handleSocialLogin("Google")}>
              <Google className="w-5 h-5 " />
            </SocialButton>

            <SocialButton onClick={() => handleSocialLogin("Apple")}>
              <Apple className="w-5 h-5 " />
            </SocialButton>

            <SocialButton onClick={() => handleSocialLogin("Facebook")}>
              <Facebook className="w-5 h-5 " />
            </SocialButton>

            <SocialButton onClick={() => handleSocialLogin("Twitter")}>
              <Twitter className="w-5 h-5 " />
            </SocialButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
