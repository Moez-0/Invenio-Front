import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaUsers, FaCalendarAlt, FaPlusCircle } from "react-icons/fa";

const InstructorDashboard = () => {
  const instructorCourses = [
    {
      id: 1,
      title: "Mastering React",
      students: 120,
      progress: 75,
      image: "/course.png",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      students: 95,
      progress: 60,
      image: "/course.png",
    },
  ];

  const upcomingClasses = [
    {
      id: 1,
      title: "Live Q&A on React",
      date: "Feb 20, 2025",
      time: "5:00 PM GMT",
    },
  ];

  return (
    <div className="bg-white dark:bg-dark min-h-screen py-12 px-6 font-inter">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-light">👩‍🏫 Welcome, Instructor!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Manage your courses and engage with students.</p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-light">📚 Your Courses</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {instructorCourses.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-md flex items-center"
              >
                <img src={course.image} alt={course.title} className="w-24 h-24 object-cover rounded-lg mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-light">{course.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Students Enrolled: {course.students}</p>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full mt-2">
                    <div
                      className="bg-secondary h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{course.progress}% Course Completion</p>
                  <Link to={`/instructor/courses/${course.id}`} className="text-sm text-secondary font-semibold mt-2 block">
                    Manage Course →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <Link
            to="/instructor/add-course"
            className="mt-6 inline-block bg-secondary text-white px-5 py-3 rounded-md font-semibold hover:bg-primary transition-all flex items-center"
          >
            <FaPlusCircle className="mr-2" /> Add New Course
          </Link>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-light">👨‍🎓 Student Overview</h2>
          <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-md mt-4 flex justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-light">Total Students</h3>
              <p className="text-3xl font-bold text-secondary">215</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-light">Active Students</h3>
              <p className="text-3xl font-bold text-primary">180</p>
            </div>
            <Link
              to="/instructor/students"
              className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-primary transition-all flex items-center"
            >
              <FaUsers className="mr-2" /> View Students
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-light">🎥 Upcoming Live Classes</h2>
          {upcomingClasses.length > 0 ? (
            <div className="mt-4 bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-md">
              {upcomingClasses.map((classItem) => (
                <div key={classItem.id} className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-light">{classItem.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{classItem.date} at {classItem.time}</p>
                  </div>
                  <Link
                    to={`/live/${classItem.id}`}
                    className="bg-secondary text-white px-4 py-2 rounded-md flex items-center hover:bg-primary transition-all"
                  >
                    <FaCalendarAlt className="mr-2" /> Start Class
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg text-gray-500 dark:text-light mt-4">No upcoming live classes.</p>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/instructor/courses" className="bg-secondary text-white p-5 rounded-lg shadow-md flex items-center hover:bg-primary transition-all">
            <FaChalkboardTeacher className="text-2xl mr-4" />
            <span>Manage Courses</span>
          </Link>
          <Link to="/instructor/live-sessions" className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-light p-5 rounded-lg shadow-md flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
            <FaCalendarAlt className="text-2xl mr-4" />
            <span>Schedule Live Class</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
