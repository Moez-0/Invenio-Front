import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaCreditCard, FaEnvelope, FaCog, FaSignOutAlt, FaBars, FaChalkboardTeacher, FaUsers, FaChartBar, FaPlusCircle } from "react-icons/fa";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [createdCourses, setCreatedCourses] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setUser({
      name: "Moez Souidi",
      email: "business@moez.eu.org",
      profilePic: "https://i.pravatar.cc/400?img=3",
    });

    setCreatedCourses([
      { id: 1, title: "Mastering React" },
      { id: 2, title: "Python for Data Science" },
    ]);
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex h-screen bg-white text-gray-900">
      {/* Sidebar */}
      <div
        className={`w-64 bg-white p-5 flex flex-col fixed md:relative top-0 md:top-10 left-0 h-full transition-transform transform md:translate-x-0  ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="text-xl font-bold text-center mb-6">
          <img src="/logo.svg" alt="Logo" className="w-16 h-16 mx-auto" />
        </div>
        <nav className="space-y-3">
          {[ 
            { to: "/dashboard", icon: <FaHome />, label: "Dashboard" },
            { to: "/my-courses", icon: <FaChalkboardTeacher />, label: "My Courses" },
            { to: "/create-course", icon: <FaPlusCircle />, label: "Create Course" },
            { to: "/students", icon: <FaUsers />, label: "Students" },
            { to: "/reports", icon: <FaChartBar />, label: "Reports" },
            { to: "/messages", icon: <FaEnvelope />, label: "Messages" },
            { to: "/settings", icon: <FaCog />, label: "Settings" },
          ].map(({ to, icon, label }) => (
            <Link key={to} to={to} className="flex items-center gap-3 text-accent hover:bg-secondary hover:text-white px-4 py-2 rounded-lg transition-all">
              {icon} {label}
            </Link>
          ))}
          <button className="flex items-center gap-3 text-red-600 mt-3 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all" onClick={() => alert("Logging out...")}> 
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 p-2 bg-white rounded-full shadow-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FaBars />
      </button>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-0 md:ml-64 overflow-y-auto">
        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-md">
          <img src={user.profilePic} alt="Profile" className="w-16 h-16 rounded-full" />
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* Created Courses */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">My Courses</h3>
          {createdCourses.length > 0 ? (
            <ul className="space-y-4">
              {createdCourses.map((course) => (
                <li key={course.id} className="p-4 bg-white rounded-2xl shadow-md">
                  <Link to={`/courses/${course.id}`} className="text-secondary hover:underline">{course.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No courses created yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
