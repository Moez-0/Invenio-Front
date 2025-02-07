import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "Cloud Computing Essentials",
    instructor: "GreatStack",
    rating: 3,
    reviews: 4,
    price: "$55.99",
    image: "/course.png",
  },
  {
    id: 2,
    title: "Advanced Python Programming",
    instructor: "GreatStack",
    rating: 4,
    reviews: 5,
    price: "$67.99",
    image: "/course.png",
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    instructor: "GreatStack",
    rating: 5,
    reviews: 1,
    price: "$74.99",
    image: "/course.png",
  },
  {
    id: 4,
    title: "Cybersecurity Basics",
    instructor: "GreatStack",
    rating: 4,
    reviews: 3,
    price: "$59.49",
    image: "/course.png",
  },
];

const renderStars = (rating) => {
  return [...Array(5)].map((_, index) => {
    if (index < Math.floor(rating)) {
      return <FaStar key={index} className="text-orange-400" />;
    } else if (index < rating) {
      return <FaStarHalfAlt key={index} className="text-orange-400" />;
    } else {
      return <FaRegStar key={index} className="text-gray-400" />;
    }
  });
};

const CoursesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 text-center font-inter ">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Discover our top-rated courses
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-8">
        Explore courses tailored to your interests, from coding to business and beyond.
      </p>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{course.title}</h3>
              <p className="text-gray-500 text-sm">{course.instructor}</p>
              <div className="flex items-center mt-2">
                {renderStars(course.rating)}
                <span className="text-gray-500 text-sm ml-2">({course.reviews})</span>
              </div>
              <p className="text-secondary font-bold mt-2">{course.price}</p>
              <button 
                className="cursor-pointer mt-3 px-4 py-2 bg-secondary text-white rounded-lg w-full hover:bg-primary-dark transition"
                onClick={(e) => {
                  e.stopPropagation(); 
                  alert(`Enrolled in ${course.title}`);
                }}
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>

  
      <button 
        className=" cursor-pointer mt-6 px-6 py-2 border rounded-lg text-primary border-primary hover:bg-primary hover:text-white transition"
        onClick={() => navigate('/courses')}
      >
        Show all courses
      </button>
    </div>
  );
};

export default CoursesSection;
