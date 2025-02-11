import React from 'react';

const OffersPage = () => {
  return (
    <div className="bg-white dark:bg-dark min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-secondary">
          Join Invenio: The AI-powered E-learning Platform
        </h1>
        <p className="text-xl text-gray-600 dark:text-light mt-4 ">
          Choose a plan that suits you and unlock unlimited access to premium content, courses, and more.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Weekly Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center h-full">
            <h2 className="text-3xl font-bold text-gray-900">Weekly</h2>
            <p className="text-xl text-gray-500 mt-2">Ideal for short-term learners</p>
            <div className="mt-6">
              <p className="text-4xl font-extrabold text-gray-900">$9.99</p>
              <p className="text-gray-500">/week</p>
            </div>
            <ul className="mt-6 text-left text-gray-700 space-y-2">
              <li>Access to all course materials</li>
              <li>Attend live streaming sessions</li>
              <li>AI-powered course recommendations</li>
              <li>Progress tracking and certificates</li>
              <li>Access to community discussions</li>
            </ul>
            <div className="mt-auto w-full">
              <button className="w-full bg-secondary text-white py-2 px-6 rounded-full hover:bg-primary transition duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Monthly Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center h-full">
            <h2 className="text-3xl font-bold text-gray-900">Monthly</h2>
            <p className="text-xl text-gray-500 mt-2">Perfect for continuous learning</p>
            <div className="mt-6">
              <p className="text-4xl font-extrabold text-gray-900">$29.99</p>
              <p className="text-gray-500">/month</p>
            </div>
            <ul className="mt-6 text-left text-gray-700 space-y-2">
              <li>Access to all courses and live streams</li>
              <li>AI-driven learning paths and course suggestions</li>
              <li>Track your progress and earn certificates</li>
              <li>Participate in community forums and groups</li>
              <li>Priority support for instant help</li>
            </ul>
            <div className="mt-auto w-full">
              <button className="w-full bg-secondary text-white py-2 px-6 rounded-full hover:bg-primary transition duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Yearly Plan */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center h-full">
            <h2 className="text-3xl font-bold text-gray-900">Yearly</h2>
            <p className="text-xl text-gray-500 mt-2">Best value for long-term learners</p>
            <div className="mt-6">
              <p className="text-4xl font-extrabold text-gray-900">$199.99</p>
              <p className="text-gray-500">/year</p>
            </div>
            <ul className="mt-6 text-left text-gray-700 space-y-2">
              <li>Unlimited access to all content</li>
              <li>Access to exclusive live workshops</li>
              <li>Customized learning paths powered by AI</li>
              <li>Track your course progress and download certificates</li>
              <li>Join advanced community groups and discussions</li>
              <li>Get personalized support and mentorship</li>
              <li>Save 2 months with a yearly plan</li>
            </ul>
            <div className="mt-auto w-full">
              <button className="w-full bg-secondary text-white py-2 px-6 rounded-full hover:bg-primary transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700 dark:text-light">
            Join Invenio today and gain access to a library of expert-led courses, AI-driven learning tools, and a community that’s committed to your growth. Whether you're looking to learn a new skill or advance your career, we’ve got you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
