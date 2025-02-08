import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CourseCard from "../components/home/CourseCard";

// Sample Courses
const courses = [
  { id: 1, image: "/course.png", title: "Introduction to JavaScript", instructor: "Moez Souidi", category: "Web Development", rating: 4, reviews: 120, price: 19.99 },
  { id: 2, image: "/course.png", title: "React for Beginners", instructor: "Moez Souidi", category: "Web Development", rating: 5, reviews: 200, price: 29.99 },
  { id: 3, image: "/course.png", title: "Advanced Python Programming", instructor: "Zrafi AbdSlam", category: "Programming Languages", rating: 4, reviews: 90, price: 39.99 },
  { id: 4, image: "/course.png", title: "Full Stack Web Development", instructor: "Chams Mhamdi", category: "Web Development", rating: 5, reviews: 150, price: 49.99 },
  { id: 5, image: "/course.png", title: "Machine Learning Basics", instructor: "Moez Souidi", category: "Data Science", rating: 4.5, reviews: 110, price: 25.99 },
  { id: 6, image: "/course.png", title: "Data Structures and Algorithms", instructor: "Zrafi AbdSlam", category: "Programming Languages", rating: 5, reviews: 180, price: 35.99 },
  { id: 7, image: "/course.png", title: "Web Development with Node.js", instructor: "Maison des TPE", category: "Web Development", rating: 4, reviews: 100, price: 40.99 },
  { id: 8, image: "/course.png", title: "UI/UX Design Fundamentals", instructor: "Chams Mhamdi", category: "Design", rating: 5, reviews: 250, price: 29.99 },
  { id: 9, image: "/course.png", title: "Introduction to Cloud Computing", instructor: "Moez Souidi", category: "Cloud Computing", rating: 4, reviews: 75, price: 19.99 },
  { id: 10, image: "/course.png", title: "DevOps and Continuous Integration", instructor: "Moez Souidi", category: "Cloud Computing", rating: 4.5, reviews: 140, price: 32.99 }
];

const CourseList = () => {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const coursesPerPage = 8;
  const location = useLocation();
  const navigate = useNavigate();

  // Extract search query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("search") || "";
    setSearchQuery(query);

    if (query) {
      const filtered = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(query.toLowerCase()) ||
          course.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCourses(filtered);
    } else {
      setFilteredCourses(courses);
    }

    setCurrentPage(1); // Reset to first page after filtering
  }, [location.search]);

  // Handle manual search
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/courses?search=${encodeURIComponent(searchQuery)}`);
  };

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredCourses.length / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="relative md:px-36 px-8 pt-20 text-left">
      {/* Header & Search Bar */}
      <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between w-full">
          <h1 className="text-4xl font-semibold text-gray-800">Available Courses</h1>
          <form onSubmit={handleSearch} className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded">
            <input
              type="text"
              className="w-full h-full outline-none text-gray-500/80 px-4"
              placeholder="Search for courses"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="bg-secondary hover:bg-primary cursor-pointer rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1">
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
        {currentCourses.length > 0 ? (
          currentCourses.map((course) => <CourseCard key={course.id} {...course} />)
        ) : (
          <p className="text-center col-span-4 text-gray-500">No courses found.</p>
        )}
      </div>

      {/* Pagination */}
      {filteredCourses.length > coursesPerPage && (
        <div className="flex justify-center my-8">
          <ul className="flex gap-2">
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`cursor-pointer px-4 py-2 border border-gray-300 rounded-md ${
                  currentPage === number ? "text-primary" : "text-gray-600"
                }`}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseList;
