import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CoursePage = () => {
  const course = {
    title: "Mastering React: The Complete Guide",
    description:
      "Learn React from scratch with this comprehensive course, covering all the fundamentals and advanced techniques to become a React expert.",
    instructor: {
      name: "Moez Souidi",
      image: "https://i.pravatar.cc/100?img=3",
      title: "Senior Web Developer",
    },
    rating: 4,
    reviews: 350,
    price: 49.99,
    discount: 0.15, // 15% discount
    duration: "12 hours", // Course duration
    image: "/course.png",
    curriculum: [
      { title: "Introduction to React", lessons: 5 },
      { title: "React Components and JSX", lessons: 8 },
      { title: "State Management in React", lessons: 6 },
      { title: "Advanced React Patterns", lessons: 4 },
      { title: "React with TypeScript", lessons: 3 },
    ],
    instructorBio:
      "Moez is a Senior Web Developer with over 10 years of experience building applications using React and other modern web technologies. He is passionate about teaching and helping developers level up their skills.",
  };

  const [isOpen, setIsOpen] = useState(null);

  const toggleChapter = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const discountedPrice = (course.price * (1 - course.discount)).toFixed(2);

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Course Hero Banner */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img className="w-full h-64 object-cover rounded-lg" src={course.image} alt={course.title} />
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-4xl font-semibold">{course.title}</h1>
            <p className="text-lg">{course.instructor.name}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400">{'★'.repeat(course.rating)}</span>
              <span className="text-gray-400 ml-2">({course.reviews} reviews)</span>
            </div>
          </div>
        </div>

        {/* Course Details */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Side: Course Description */}
          <div className="lg:col-span-3">
            <div className="bg-white p-6 mb-8 shadow-lg rounded-lg">
              <h2 className="text-3xl font-semibold text-gray-900">About This Course</h2>
              <p className="text-gray-700 mt-4">{course.description}</p>
            </div>

            {/* Course Curriculum */}
            <div className="bg-white p-6 mb-8 shadow-lg rounded-lg">
              <h2 className="text-3xl font-semibold text-gray-900">Course Curriculum</h2>
              <ul className="mt-4">
                {course.curriculum.map((module, index) => (
                  <li key={index} className="py-4 border-b border-gray-300">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleChapter(index)}
                    >
                      <span className="text-lg font-medium">{module.title}</span>
                      <span className="text-gray-500">{module.lessons} lessons</span>
                    </div>
                    {isOpen === index && (
                      <div className="mt-2 pl-4 text-gray-600">
                        <p>This section covers the fundamentals and advanced techniques of {module.title}.</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructor Info */}
            <div className="bg-white p-6 mb-8 shadow-lg rounded-lg">
              <h2 className="text-3xl font-semibold text-gray-900">Instructor</h2>
              <div className="flex items-center mt-4">
                <img className="w-16 h-16 object-cover rounded-full" src={course.instructor.image} alt={course.instructor.name} />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{course.instructor.name}</h3>
                  <p className="text-gray-500 text-sm">{course.instructor.title}</p>
                  <p className="mt-2 text-gray-700">{course.instructorBio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Enroll Button and Price */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 mb-10 sticky top-12 space-y-6 shadow-lg rounded-lg">
              <p className="text-xl font-semibold text-gray-900">Enroll in this Course</p>
              
              {/* Course Duration */}
              <p className="text-md text-gray-600">Duration: {course.duration}</p>

              {/* Discounted Price */}
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-red-500">${discountedPrice}</span>
                <span className="text-gray-500 line-through">${course.price.toFixed(2)}</span>
                <span className="bg-green-100 text-green-700 text-sm font-semibold px-2 py-1 rounded-md">
                  15% Off
                </span>
              </div>

              {/* Enroll Button */}
              <Link
                to="/checkout"
                className="w-full py-4 text-center bg-secondary text-white font-semibold hover:bg-secondary-dark transition-all block rounded-lg shadow-md"
              >
                Enroll Now
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CoursePage;
