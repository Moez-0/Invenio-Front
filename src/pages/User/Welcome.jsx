import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBookOpen, FaChalkboardTeacher, FaPlayCircle } from "react-icons/fa";

const LearnerDashboard = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: "React for Beginners",
      instructor: "John Doe",
      progress: 75,
      image: "/course.png",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      instructor: "Jane Smith",
      progress: 40,
      image: "/course.png",
    },
  ];

  const upcomingClasses = [
    {
      id: 1,
      title: "Live Q&A on React",
      instructor: "John Doe",
      date: "Feb 15, 2025",
      time: "4:00 PM GMT",
    },
  ];

  return (
    <div className="bg-white dark:bg-dark min-h-screen py-12 px-6 font-inter">
      <div className="max-w-7xl mx-auto">
     
        <h1 className="text-4xl font-bold text-gray-900 dark:text-light">👋 Welcome Back, Learner!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">Continue where you left off and achieve your learning goals.</p>


        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-light">📚 Your Courses</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {enrolledCourses.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow-md flex items-center"
              >
                <img src={course.image} alt={course.title} className="w-24 h-24 object-cover rounded-lg mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-light">{course.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Instructor: {course.instructor}</p>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full mt-2">
                    <div
                      className="bg-secondary h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{course.progress}% Completed</p>
                  <Link to={`/courses/${course.id}`} className="text-sm text-secondary font-semibold mt-2 block">
                    Continue Learning →
                  </Link>
                </div>
              </motion.div>
            ))}
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
                    <p className="text-sm text-gray-500 dark:text-gray-400">Instructor: {classItem.instructor}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{classItem.date} at {classItem.time}</p>
                  </div>
                  <Link
                    to={`/live/${classItem.id}`}
                    className="bg-secondary text-white px-4 py-2 rounded-md flex items-center hover:bg-primary transition-all"
                  >
                    <FaPlayCircle className="mr-2" /> Join Class
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg text-gray-500 dark:text-light mt-4">No upcoming live classes.</p>
          )}
        </div>

   
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/explore" className="bg-secondary text-white p-5 rounded-lg shadow-md flex items-center hover:bg-primary transition-all">
            <FaBookOpen className="text-2xl mr-4" />
            <span>Browse More Courses</span>
          </Link>
          <Link to="/instructors" className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-light p-5 rounded-lg shadow-md flex items-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
            <FaChalkboardTeacher className="text-2xl mr-4" />
            <span>Meet Your Instructors</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnerDashboard;
