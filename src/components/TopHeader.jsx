import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const TopHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
      className={`font-inter bg-light font-light  text-accent flex justify-center items-center flex-col relative ${
        isVisible ? 'h-20' : 'h-0 overflow-hidden'
      }`}
    >
      {isVisible && (
        <>
          <p className="text-black text-sm">The right place to start learning and pursue your career!</p>
          <p>
            <span className="text-accent text-sm"><span className='font-bold'>30-Day</span> Money-Back Guarantee</span>
          </p>
          <button
            className=" cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-600"
            onClick={() => setIsVisible(false)}
          >
            <IoClose size={20} />
          </button>
        </>
      )}
    </motion.div>
  );
};

export default TopHeader;
