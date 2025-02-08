import React from "react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 px-6">
      {/* Left Side Illustration */}
      <div className="hidden md:flex w-1/2 justify-center">
        <img src="/logo.svg" alt="Login Illustration" className="max-w-md opacity-90" />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 bg-white p-8 shadow-md rounded-lg max-w-md">
        <h2 className="text-xl font-semibold text-center text-gray-800">
          Sign in to your account
        </h2>

        {/* Email Login */}
        <form className="mt-5">
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary outline-none"
            placeholder="Enter your email"
            required
          />
          <button className="w-full bg-secondary text-white flex items-center justify-center gap-2 py-2 mt-4 rounded-md hover:bg-primary transition-all">
            Continue with email
          </button>
        </form>

        {/* Subtle Divider */}
        <div className="relative flex items-center my-5">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Social Login - Subtle Appearance */}
        <div className="flex justify-center gap-3">
          <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            <FaGoogle className="text-lg text-gray-600" />
          </button>
          <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            <FaFacebook className="text-lg text-gray-600" />
          </button>
          <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
            <FaApple className="text-lg text-gray-600" />
          </button>
        </div>

        {/* Signup & Organization Login */}
        <p className="text-center text-sm text-gray-500 mt-5">
          New here? <a href="#" className="text-secondary hover:underline">Create an account</a>
        </p>
        <p className="text-center text-sm text-gray-500 mt-2">
          <a href="#" className="hover:underline">Sign in with an organization</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
