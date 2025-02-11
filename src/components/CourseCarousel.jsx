import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CourseCard from "../components/home/CourseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const courses = [
  {
    id: 1,
    image: "course.png",
    title: "Introduction to JavaScript",
    instructor: "Moez Souidi",
    rating: 4,
    reviews: 120,
    price: 19.99,
  },
  {
    id: 2,
    image: "course.png",
    title: "React for Beginners",
    instructor: "Chams Mhamdi",
    rating: 5,
    reviews: 200,
    price: 29.99,
  },
  {
    id: 3,
    image: "course.png",
    title: "Advanced Python Programming",
    instructor: "Zrafi AbdSlam",
    rating: 4,
    reviews: 90,
    price: 39.99,
  },
  {
    id: 4,
    image: "course.png",
    title: "Full Stack Web Development",
    instructor: "Bob Williams",
    rating: 5,
    reviews: 150,
    price: 49.99,
  },
];

const CourseCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide default arrows to use custom ones
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="h-screen   bg-white dark:bg-dark">
    <div className="relative max-w-6xl mx-auto px-4 py-8 ">
      <h2 className="text-2xl font-semibold mb-6 text-center dark:text-light">Popular Courses</h2>

      {/* Navigation Controls */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
        onClick={() => sliderRef.current?.slickNext()}
      >
        <FaChevronRight size={20} />
      </button>

      {/* Course Slider */}
      <Slider ref={sliderRef} {...settings}>
        {courses.map((course) => (
          <div key={course.id} className="px-2">
            <CourseCard {...course} />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default CourseCarousel;
