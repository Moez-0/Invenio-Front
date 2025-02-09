import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaCreditCard, FaEnvelope, FaCog, FaSignOutAlt, FaBars, FaChalkboardTeacher } from "react-icons/fa";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [savedCourses, setSavedCourses] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div
        className={`w-64 bg-white  p-6 flex flex-col fixed md:relative top-0 md:top-10 left-0 h-full transition-transform transform md:translate-x-0  ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="text-2xl font-bold text-center mb-8">
          <img src="/logo.svg" alt="Logo" className="w-16 h-16 mx-auto" />
        </div>
        <nav className="space-y-4">
          {[
            { to: "/dashboard", icon: <FaHome />, label: "Dashboard" },
            { to: "/courses", icon: <FaChalkboardTeacher />, label: "Courses" },
            { to: "/subscriptions", icon: <FaBook />, label: "Subscriptions" },
            { to: "/payments", icon: <FaCreditCard />, label: "Payments" },
            { to: "/messages", icon: <FaEnvelope />, label: "Messages" },
            { to: "/settings", icon: <FaCog />, label: "Settings" },
          ].map(({ to, icon, label }) => (
            <Link key={to} to={to} className="flex items-center gap-3 text-accent hover:bg-secondary hover:text-white px-4 py-3 rounded-lg transition-all">
              {icon} {label}
            </Link>
          ))}
          <button className="flex items-center gap-3 text-red-500 mt-4 px-4 py-3 rounded-lg hover:bg-red-500 hover:text-white transition-all" onClick={() => alert("Logging out...")}> 
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
        <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-md">
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
                <li key={course.id} className="p-4 bg-white rounded-2xl shadow-md flex justify-between">
                  <span>{course.title}</span>
                  <span className="text-accent">Progress: {course.progress}%</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-accent">No enrolled courses yet.</p>
          )}
        </div>

        {/* Saved Courses */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Saved Courses</h3>
          {savedCourses.length > 0 ? (
            <ul className="space-y-4">
              {savedCourses.map((course) => (
                <li key={course.id} className="p-4 bg-white rounded-2xl shadow-md">
                  <Link to={`/courses/${course.id}`} className="text-secondary hover:underline">{course.title}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-accent">No saved courses yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
