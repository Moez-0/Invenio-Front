import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Moez Souidi",
    role: "Software Engineer",
    text: "This platform helped me land my dream job. The courses are well-structured and highly informative!",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Zrafi Abd-Slam",
    role: "UX Designer",
    text: "The hands-on learning experience and real-world projects made all the difference in my career growth.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Chiheb Batikh",
    role: "Data Scientist",
    text: "I love the depth of the courses and the quality of instruction. Definitely worth the investment!",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto text-center py-16 px-6 relative ">
      <h2 className="text-3xl font-bold text-gray-800">What Our Learners Say</h2>
      <p className="text-gray-600 mt-2">Hear from students who transformed their careers with us.</p>

      <div className="relative overflow-hidden max-w-xl mx-auto mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center"
          >
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-700 text-lg italic">"{testimonials[current].text}"</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{testimonials[current].name}</h3>
            <p className="text-gray-500">{testimonials[current].role}</p>
          </motion.div>
        </AnimatePresence>
      </div>


      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-gray-700 hover:bg-gray-200 transition"
        onClick={prevTestimonial}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-gray-700 hover:bg-gray-200 transition"
        onClick={nextTestimonial}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Testimonials;
