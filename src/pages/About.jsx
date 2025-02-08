import React from "react";
import { FaLightbulb, FaUsers, FaChartLine, FaHandshake, FaRobot, FaBrain, FaComments } from "react-icons/fa";

const About = () => {
  return (
    <div className="font-inter  flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Invenio</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Invenio is your go-to platform for innovative learning and collaboration. We empower individuals and organizations to achieve their goals through cutting-edge courses, interactive tools, and a supportive community.
        </p>
      </div>

      {/* Mission Section */}
      <div className="w-full max-w-6xl bg-white p-8 shadow-md rounded-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          At Invenio, our mission is to democratize education and make high-quality learning accessible to everyone. We believe in the power of knowledge to transform lives and drive innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <FaLightbulb className="text-4xl text-secondary" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Innovative Learning</h3>
              <p className="text-gray-600">
                We offer courses designed by industry experts to help you stay ahead in your field.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <FaUsers className="text-4xl text-secondary" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Community-Driven</h3>
              <p className="text-gray-600">
                Join a vibrant community of learners and professionals to share knowledge and grow together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-6xl bg-white p-8 shadow-md rounded-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <FaChartLine className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Expert Courses</h3>
            <p className="text-gray-600">
              Access courses designed by industry leaders to enhance your skills.
            </p>
          </div>
          <div className="text-center">
            <FaHandshake className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Collaboration Tools</h3>
            <p className="text-gray-600">
              Collaborate with peers and mentors to achieve your learning goals.
            </p>
          </div>
          <div className="text-center">
            <FaLightbulb className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Innovative Content</h3>
            <p className="text-gray-600">
              Stay updated with the latest trends and technologies in your industry.
            </p>
          </div>
          <div className="text-center">
            <FaUsers className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Supportive Community</h3>
            <p className="text-gray-600">
              Connect with like-minded individuals and grow together.
            </p>
          </div>
        </div>
      </div>

      {/* AI Integrations Section */}
      <div className="w-full max-w-6xl bg-white p-8 shadow-md rounded-lg mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">AI-Powered Learning</h2>
        <p className="text-gray-600 mb-6">
          At Invenio, we leverage the power of Artificial Intelligence to enhance your learning experience. Our AI-driven features are designed to make learning more personalized, efficient, and engaging.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <FaRobot className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Personalized Recommendations</h3>
            <p className="text-gray-600">
              Get course recommendations tailored to your interests, skills, and learning goals.
            </p>
          </div>
          <div className="text-center">
            <FaBrain className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Adaptive Learning</h3>
            <p className="text-gray-600">
              Our AI adapts to your learning pace and style, ensuring you get the most out of every course.
            </p>
          </div>
          <div className="text-center">
            <FaComments className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">AI Chatbot Support</h3>
            <p className="text-gray-600">
              Get instant help and answers to your questions with our 24/7 AI-powered chatbot.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Invenio Today</h2>
        <p className="text-gray-600 mb-6">
          Start your journey with Invenio and unlock your potential.
        </p>
        <a
          href="/signup"
          className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-primary transition-all"
        >
          Sign Up Now
        </a>
      </div>
    </div>
  );
};

export default About;