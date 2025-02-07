import React, { useState } from 'react';
import CourseCard from '../components/home/CourseCard';

const courses = [
  { id: 1, image: '/course.png', title: 'Introduction to JavaScript', instructor: 'Moez Souidi', rating: 4, reviews: 120, price: 19.99 },
  { id: 2, image: '/course.png', title: 'React for Beginners', instructor: 'Moez Souidi', rating: 5, reviews: 200, price: 29.99 },
  { id: 3, image: '/course.png', title: 'Advanced Python Programming', instructor: 'Zrafi AbdSlam', rating: 4, reviews: 90, price: 39.99 },
  { id: 4, image: '/course.png', title: 'Full Stack Web Development', instructor: 'Chams Mhamdi', rating: 5, reviews: 150, price: 49.99 },
  { id: 5, image: '/course.png', title: 'Machine Learning Basics', instructor: 'Moez Souidi', rating: 4.5, reviews: 110, price: 25.99 },
  { id: 6, image: '/course.png', title: 'Data Structures and Algorithms', instructor: 'Zrafi AbdSlam', rating: 5, reviews: 180, price: 35.99 },
  { id: 7, image: '/course.png', title: 'Web Development with Node.js', instructor: 'Maison des TPE', rating: 4, reviews: 100, price: 40.99 },
  { id: 8, image: '/course.png', title: 'UI/UX Design Fundamentals', instructor: 'Chams Mhamdi', rating: 5, reviews: 250, price: 29.99 },
  { id: 9, image: '/course.png', title: 'Introduction to Cloud Computing', instructor: 'Moez Souidi', rating: 4, reviews: 75, price: 19.99 },
  { id: 10, image: '/course.png', title: 'DevOps and Continuous Integration', instructor: 'Moez Souidi', rating: 4.5, reviews: 140, price: 32.99 }
];

const CourseList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 8;

  const showPagination = courses.length > coursesPerPage;

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(courses.length / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="relative md:px-36 px-8 pt-20 text-left">
      <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between w-full">
          <h1 className="text-4xl font-semibold text-gray-800">Available Courses</h1>
          <form className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded">
            <img className="md:w-auto w-10 px-3" src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.3828%2012.3828L17.1408%2017.1415'%20stroke='%237A7B7D'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M10.4451%2013.6915C13.5634%2012.3662%2015.0169%208.7641%2013.6917%205.64585C12.3665%202.52761%208.76432%201.07408%205.64608%202.3993C2.52783%203.72452%201.0743%207.32666%202.39953%2010.4449C3.72475%2013.5631%207.32688%2015.0167%2010.4451%2013.6915Z'%20stroke='%237A7B7D'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" alt="search_icon" />
            <input type="text" className="w-full h-full outline-none text-gray-500/80" placeholder="Search for courses" />
            <button type="submit" className="bg-secondary hover:bg-primary cursor-pointer rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1">Search</button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0">
        {currentCourses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      {showPagination && (
        <div className="flex justify-center my-8">
          <ul className="flex gap-2">
            {pageNumbers.map(number => (
              <li key={number} className={`cursor-pointer ${currentPage === number ? 'text-primary' : 'text-gray-600'}`} onClick={() => paginate(number)}>
                <span className="px-4 py-2 border border-gray-300 rounded-md">{number}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseList;
