import React from 'react';
import { motion } from 'framer-motion';
import CourseCarousel from '../components/CourseCarousel';
import Hero from '../components/home/Hero';
import Testimonials from '../components/home/Testimonials';
import Footer from '../components/Footer';
import CoursesSection from '../components/home/Course';
import Join from '../components/home/Join';
const Home = () => {
  return (
    <div>
   
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='flex flex-col items-center justify-center h-screen bg-[url(/bg3.webp)] bg-cover bg-center bg-no-repeat'
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className='text-2xl md:text-6xl font-bold text-white'
        >
          Learn from the Best
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className='text-sm md:text-xl text-white mt-4'
        >
          Hundreds of courses from top instructors, all in one place.
        </motion.p>
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='cursor-pointer mt-6 px-6 py-3 bg-secondary text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-primary transition-all'
        >
          Explore Courses
        </motion.button>
      </motion.div>
      {/* Hero 2 */}
      <Hero />
      {/* Courses */}
      {/* <CoursesSection /> */}
      <CourseCarousel />
      {/* Testimonials */}
      <Testimonials />
      {/* Join */}
      <Join />


      </div>
  );
};

export default Home;
