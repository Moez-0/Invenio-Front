import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChalkboardTeacher,
  FaBook,
  FaCreditCard,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaPlus,
  FaVideo,
  FaRobot,
  FaLightbulb,
  FaComments,
  FaBars,
} from "react-icons/fa";

const EducatorDashboard = () => {
  const [user, setUser] = useState(null);
  const [myCourses, setMyCourses] = useState([]);
  const [livestreams, setLivestreams] = useState([]);
  const [newCourseModal, setNewCourseModal] = useState(false);
  const [newLivestreamModal, setNewLivestreamModal] = useState(false);
  const [aiRecommendations, setAiRecommendations] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false); // For mobile sidebar toggle

  useEffect(() => {
    setUser({
      name: "Moez Souidi",
      email: "moez@moez.eu.org",
      profilePic: "https://i.pravatar.cc/400?img=3",
    });

    setMyCourses([
      { id: 1, title: "React for Beginners", studentsEnrolled: 50 },
      { id: 2, title: "Advanced JavaScript", studentsEnrolled: 30 },
    ]);

    setLivestreams([
      { id: 1, title: "React Live Q&A", scheduledAt: "2025-02-15 10:00 AM" },
      { id: 2, title: "JavaScript Workshop", scheduledAt: "2025-02-20 02:00 PM" },
    ]);

    setAiRecommendations([
      { id: 1, title: "AI in Education", description: "Learn how AI is transforming education." },
      { id: 2, title: "Machine Learning Basics", description: "A beginner-friendly course on ML." },
    ]);
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`w-64 bg-white shadow-lg p-6 flex flex-col fixed md:relative top-0 left-0 h-full transition-transform transform md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="text-2xl font-bold text-center mb-8">
          <img src="/logo.svg" alt="Logo" className="w-16 h-16 mx-auto" />
        </div>
        <nav className="space-y-4">
          <Link to="/educator-dashboard" className="flex items-center gap-3 text-gray-700 hover:text-secondary">
            <FaHome /> Dashboard
          </Link>
          <Link to="/educator-courses" className="flex items-center gap-3 text-gray-700 hover:text-secondary">
            <FaChalkboardTeacher /> My Courses
          </Link>
          <Link to="/subscriptions" className="flex items-center gap-3 text-gray-700 hover:text-secondary">
            <FaBook /> Subscriptions
          </Link>
          <Link to="/payments" className="flex items-center gap-3 text-gray-700 hover:text-secondary">
            <FaCreditCard /> Payments
          </Link>
          <Link to="/messages" className="flex items-center gap-3 text-gray-700 hover:text-secondary">
            <FaEnvelope /> Messages
          </Link>
          <Link to="/settings" className="flex items-center gap-3 text-gray-700 hover:text-secondary">
            <FaCog /> Settings
          </Link>
          <button className="flex items-center gap-3 text-red-500 mt-4" onClick={() => alert("Logging out...")}>
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 p-3 bg-white rounded-full shadow-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FaBars />
      </button>

      {/* Main Content */}
      <div className="flex-1 p-8 ml-0 md:ml-64 overflow-y-auto">
        {/* User Profile */}
        <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md">
          <img src={user.profilePic} alt="Profile" className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* AI-Powered Features Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">AI-Powered Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI Course Recommendations */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <FaRobot className="text-2xl text-secondary" />
                <h4 className="text-lg font-semibold">Course Recommendations</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Get personalized course recommendations based on your teaching style and student feedback.
              </p>
              <button className="text-secondary hover:underline">View Recommendations</button>
            </div>

            {/* AI-Generated Course Outlines */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <FaLightbulb className="text-2xl text-secondary" />
                <h4 className="text-lg font-semibold">Course Outlines</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Use AI to generate course outlines and lesson plans tailored to your curriculum.
              </p>
              <button className="text-secondary hover:underline">Generate Outline</button>
            </div>

            {/* AI Chatbot Support */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <FaComments className="text-2xl text-secondary" />
                <h4 className="text-lg font-semibold">AI Chatbot</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Get instant support and answers to your questions with our AI-powered chatbot.
              </p>
              <button className="text-secondary hover:underline">Chat Now</button>
            </div>
          </div>
        </div>

        {/* My Courses */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">My Courses</h3>
          {myCourses.length > 0 ? (
            <ul className="space-y-4">
              {myCourses.map((course) => (
                <li key={course.id} className="p-4 bg-white rounded-lg shadow-md flex justify-between">
                  <span>{course.title}</span>
                  <span className="text-gray-600">Students Enrolled: {course.studentsEnrolled}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">You haven't created any courses yet.</p>
          )}

          {/* Add New Course Button */}
          <div className="mt-4 text-center">
            <button
              className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-md hover:bg-primary"
              onClick={() => setNewCourseModal(true)}
            >
              <FaPlus /> Add New Course
            </button>
          </div>
        </div>

        {/* Livestreaming Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Livestreaming</h3>
          {livestreams.length > 0 ? (
            <ul className="space-y-4">
              {livestreams.map((livestream) => (
                <li key={livestream.id} className="p-4 bg-white rounded-lg shadow-md flex justify-between">
                  <span>{livestream.title}</span>
                  <span className="text-gray-600">Scheduled: {livestream.scheduledAt}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No livestreams scheduled yet.</p>
          )}

          {/* Add New Livestream Button */}
          <div className="mt-4 text-center">
            <button
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              onClick={() => setNewLivestreamModal(true)}
            >
              <FaVideo /> Add New Livestream
            </button>
          </div>
        </div>

        {/* New Course Modal (Conditional) */}
        {newCourseModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
              <h3 className="text-xl font-semibold mb-4">Create New Course</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Course Title</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Course Description</label>
                  <textarea className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                  Create Course
                </button>
              </form>
              <button
                className="mt-4 text-red-500 hover:text-red-600"
                onClick={() => setNewCourseModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* New Livestream Modal (Conditional) */}
        {newLivestreamModal && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
              <h3 className="text-xl font-semibold mb-4">Schedule New Livestream</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Livestream Title</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Scheduled Date & Time</label>
                  <input type="datetime-local" className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                >
                  Schedule Livestream
                </button>
              </form>
              <button
                className="mt-4 text-red-500 hover:text-red-600"
                onClick={() => setNewLivestreamModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducatorDashboard;
