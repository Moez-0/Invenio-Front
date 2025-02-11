import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Join = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="px-5 md:px-0 flex flex-col items-center justify-center h-screen bg-[url(/bg2.webp)] bg-cover bg-center bg-no-repeat">
      <motion.h1
        initial={{ y: -80, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-2xl md:text-6xl font-bold text-white"
      >
        Start Learning Today
      </motion.h1>

      <motion.p
        initial={{ y: 80, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className=" text-sm md:text-xl text-white mt-4"
      >
        Livestreams and on-demand courses from top instructors, all in one place.
      </motion.p>

      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="cursor-pointer mt-6 px-6 py-3 bg-secondary text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-primary transition-all"
      >
        Join Now
      </motion.button>
    </div>
  );
};

export default Join;
