'use client';
import React from 'react';
import { motion } from 'framer-motion';

const getTime = () => {
    const time = new Date().getHours();
    if (time < 12) return 'Morning';
    if (time < 18) return 'Afternoon';
    return 'Evening';
}

const Header = () => {
  const time = getTime();
  const name = `Good ${time} Will!`;
  const letters = [...name];

  const letterVariants = {
    hidden: { opacity: 0},
    visible: (i:any) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <h1 className="text-7xl text-nord-4 font-extrabold tracking-tight mt-5" >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
        >
          {letter}
        </motion.span>
      ))}
    </h1>
  );
};

export default Header;