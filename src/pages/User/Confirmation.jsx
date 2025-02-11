import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const ConfirmationPage = () => {
  const orderId = Math.floor(100000 + Math.random() * 900000); 
  const totalPaid = 69.98; 
  const userEmail = "business@moez.eu.org";

  return (
    <div className="bg-white dark:bg-dark min-h-screen flex flex-col items-center justify-center text-center font-inter px-6">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-gray-900 dark:text-light">Payment Successful!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Thank you for your purchase! A confirmation email has been sent to <span className="font-semibold">{userEmail}</span>.
        </p>

        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <p className="text-lg text-gray-800 dark:text-light font-medium">Order ID: <span className="font-bold">#{orderId}</span></p>
          <p className="text-lg text-gray-800 dark:text-light font-medium">Total Paid: <span className="font-bold text-secondary">${totalPaid.toFixed(2)}</span></p>
        </div>

        <div className="mt-6 space-y-4">
          <Link to="/dashboard" className="block w-full py-3 bg-secondary text-white font-semibold rounded-md hover:bg-primary transition-all">
            Go to Dashboard
          </Link>
          <Link to="/" className="block w-full py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-light font-semibold rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
