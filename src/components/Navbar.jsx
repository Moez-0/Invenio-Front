import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TopHeader from './TopHeader';
import logo from '/logo.svg';
import { CiSearch } from 'react-icons/ci';
import { FaGlobe } from 'react-icons/fa';
import { LuShoppingCart, LuMenu } from 'react-icons/lu';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ userRole = 'guest' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  let navLinks = [
    { to: '/explore', label: 'Explore' },
    { to: '/courses', label: 'Courses' },
  ];

  if (userRole === 'educator') {
    navLinks.push({ to: '/educator-dashboard', label: 'Dashboard' });
  } else if (userRole === 'admin') {
    navLinks.push({ to: '/admin', label: 'Admin Panel' });
  } else if (userRole === 'member') {
    navLinks.push({ to: '/dashboard', label: 'Member Dashboard' });
  }

  // Only add About, Instructors, and Offers links for guest or member roles
  if (userRole === 'guest' || userRole === 'member') {
    navLinks.push(
      { to: '/instructors', label: 'Instructors' },
      { to: '/offers', label: 'Offers' },
      { to: '/about', label: 'About' }
    );
  }

  return (
    <div>
      <TopHeader />
      <div className='font-inter h-20 bg-white text-black flex justify-between items-center drop-shadow-sm px-4 md:px-10'>
        <div className='flex items-center'>
          <Link to='/' className='flex items-center'>
            <img src={logo} alt='logo' className='w-24' />
          </Link>
          <div className='hidden md:flex items-center w-96 max-w-xl mx-10 bg-gray-100 p-2 rounded-full'>
            <CiSearch className='text-2xl mr-4' />
            <input type='text' placeholder='Search for anything' className='w-full border-none outline-none bg-transparent' />
          </div>
        </div>

        <div className='hidden md:flex items-center'>
          <div className='flex items-center space-x-2 text-accent mr-10'>
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className='p-3 hover:bg-light transition-all duration-70 ease-in-out'>{label}</Link>
            ))}
          </div>
          <div className='flex items-center space-x-4 font-bold'>
            {/* Shopping Cart Icon */}
            <div className='relative'>
              <Link to='/cart' className='text-accent hover:text-secondary'>
                <LuShoppingCart className='text-2xl' />
                {/* Example: If you want to show the cart count */}
                {/* <span className='absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>
                  3 
                </span> */}
              </Link>
            </div>

            {userRole === 'guest' ? (
              <>
                <Link to='/login' className='text-secondary px-4 py-2 rounded-sm border border-secondary hover:bg-light'>Log in</Link>
                <Link to='/signup' className='bg-secondary text-white px-4 py-2 rounded-sm hover:bg-primary'>Sign up</Link>
              </>
            ) : (
              <Link to='/logout' className='text-secondary px-4 py-2 rounded-sm border border-secondary hover:bg-light'>Log out</Link>
            )}
            <div className='relative' ref={languageRef}>
              <button onClick={() => setLanguageOpen(!languageOpen)} className='bg-secondary text-white px-4 py-2 rounded-sm hover:bg-primary'>EN</button>
              <AnimatePresence>
                {languageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className='absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-md'
                  >
                    <button onClick={() => setLanguageOpen(false)} className='block px-4 py-2 w-full text-left hover:bg-gray-200'>EN</button>
                    <button onClick={() => setLanguageOpen(false)} className='block px-4 py-2 w-full text-left hover:bg-gray-200'>FR</button>
                    <button onClick={() => setLanguageOpen(false)} className='block px-4 py-2 w-full text-left hover:bg-gray-200'>ES</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-2xl'>
            <LuMenu className='hover:cursor-pointer hover:text-secondary transition-all duration-75 ease-in-out'/>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='font-inter md:hidden bg-white w-full py-4 px-6 flex flex-col space-y-2 shadow-md'
          >
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} className='p-2 hover:bg-light'>{label}</Link>
            ))}
            <hr />
            {userRole === 'guest' ? (
              <>
                <Link to='/login' className='font-inter p-2 text-secondary hover:bg-light'>Log in</Link>
                <Link to='/signup' className='font-inter p-2 bg-secondary text-white text-center rounded-md hover:bg-primary'>Sign up</Link>
              </>
            ) : (
              <Link to='/logout' className='font-inter p-2 text-secondary hover:bg-light'>Log out</Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
