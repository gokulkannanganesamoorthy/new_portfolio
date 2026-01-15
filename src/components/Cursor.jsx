import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
          target.tagName === 'A' ||
          target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Flashlight Glow */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] bg-white rounded-full pointer-events-none z-[9998] hidden md:block blur-[100px] opacity-10 mix-blend-screen"
        animate={{
          x: position.x - 250,
          y: position.y - 250,
          scale: isPointer ? 1.2 : 1,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20, mass: 0.2 }}
      />

      {/* Precision Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999] hidden md:block"
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
        }}
      />
    </>
  );
};

export default Cursor;
