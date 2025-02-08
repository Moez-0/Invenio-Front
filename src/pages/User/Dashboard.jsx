import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaCreditCard, FaEnvelope, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [savedCourses, setSavedCourses] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile sidebar toggle state

  useEffect(() => {
    setUser({
      name: "Moez Souidi",
      email: "business@moez.eu.org",
      profilePic: "https://i.pravatar.cc/400?img=3",
    });

    setEnrolledCourses([
      { id: 1, title: "React for Beginners", progress: 70 },
      { id: 2, title: "Advanced Python", progress: 40 },
    ]);

    setSavedCourses([
      { id: 3, title: "Machine Learning Basics" },
      { id: 4, title: "Full Stack Web Development" },
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
          <Link to="/dashboard" className="flex items-center gap-3 text-gray-700 hover:text-blue-500">
            <FaHome /> Dashboard
          </Link>
          <Link to="/subscriptions" className="flex items-center gap-3 text-gray-700 hover:text-blue-500">
            <FaBook /> Subscriptions
          </Link>
          <Link to="/payments" className="flex items-center gap-3 text-gray-700 hover:text-blue-500">
            <FaCreditCard /> Payments
          </Link>
          <Link to="/messages" className="flex items-center gap-3 text-gray-700 hover:text-blue-500">
            <FaEnvelope /> Messages
          </Link>
          <Link to="/settings" className="flex items-center gap-3 text-gray-700 hover:text-blue-500">
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

        {/* Enrolled Courses */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Enrolled Courses</h3>
          {enrolledCourses.length > 0 ? (
            <ul className="space-y-4">
              {enrolledCourses.map((course) => (
                <li key={course.id} className="p-4 bg-white rounded-lg shadow-md flex justify-between">
                  <span>{course.title}</span>
                  <span className="text-gray-600">Progress: {course.progress}%</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No enrolled courses yet.</p>
          )}
        </div>

        {/* Saved Courses */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Saved Courses</h3>
          {savedCourses.length > 0 ? (
            <ul className="space-y-4">
              {savedCourses.map((course) => (
                <li key={course.id} className="p-4 bg-white rounded-lg shadow-md">
                  <Link to={`/courses/${course.id}`} className="text-blue-600 hover:underline">{course.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No saved courses yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
