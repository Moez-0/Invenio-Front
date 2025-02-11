import React from "react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 dark:bg-dark px-6">
      {/* Left Side Illustration */}
      <div className="hidden md:flex w-1/2 justify-center">
        <img src="/logo.svg" alt="Signup Illustration" className="max-w-md opacity-90" />
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full md:w-1/2 bg-white p-8 shadow-md rounded-lg max-w-md">
        <h2 className="text-xl font-semibold text-center text-gray-800">
          Create your account
        </h2>

        {/* Signup Form */}
        <form className="mt-5">
          <label className="block text-sm text-gray-600">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary outline-none"
            placeholder="Enter your full name"
            required
          />

          <label className="block text-sm text-gray-600 mt-3">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary outline-none"
            placeholder="Enter your email"
            required
          />

          <label className="block text-sm text-gray-600 mt-3">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary outline-none"
            placeholder="Create a password"
            required
          />

          <button className="w-full bg-secondary text-white flex items-center justify-center gap-2 py-2 mt-4 rounded-md hover:bg-primary transition-all">
            Sign Up
          </button>
        </form>

        {/* Subtle Divider */}
        <div className="relative flex items-center my-5">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Social Signup - Subtle Appearance */}
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

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account? <a href="#" className="text-secondary hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
