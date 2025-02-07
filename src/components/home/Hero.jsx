import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Hero = () => {
  return (
    <div className="flex flex-col gap-8 items-center text-center w-full min-h-screen bg-white pt-20 md:pt-32 px-4 md:px-6">
   
      <h1 className="text-3xl md:text-6xl font-bold text-accent leading-tight">
        Unlock your potential with <br />
        courses tailored to <span className="text-secondary">your ambitions.</span>
      </h1>

     
      <p className="text-base md:text-lg text-accent mt-4 max-w-2xl px-4">
        Learn from top instructors, explore hands-on content, and connect with a community that supports your growth—both personally and professionally.
      </p>

      
      <div className="flex items-center bg-white shadow-md rounded-full p-2 mt-6 w-full max-w-lg">
        <CiSearch className="text-2xl text-gray-500 ml-4" />
        <input 
          type="text" 
          placeholder="Search for courses" 
          className="w-full bg-transparent outline-none text-gray-700 px-4 py-2 text-sm md:text-base" 
        />
        <button className="bg-secondary text-white px-4 md:px-6 py-2 rounded-full font-semibold hover:bg-primary">
          Search
        </button>
      </div>

   
      <p className="text-gray-500 mt-10">Trusted by learners from</p>
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-4 px-4">
        <img src="/maisontpe.webp" alt="Microsoft" className="h-10 md:h-12" />
        <img src="/github.png" alt="Github" className="h-10 md:h-12" />
        <img src="/taki.svg" alt="Taki" className="h-10 md:h-12" />
        <img src="/paypal.png" alt="PayPal" className="h-10 md:h-12" />
        <img src="/facebook.png" alt="Facebook" className="h-10 md:h-12" />
        <img src="/adobe.png" alt="Adobe" className="h-10 md:h-12" />
        <img src="/gomycode.svg" alt="Go My Code" className="h-10 md:h-12" />
      </div>
    </div>
  );
};

export default Hero;
