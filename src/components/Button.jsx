import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, onClick, className = '' }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      className={`relative px-8 py-4 rounded-full border border-white/20 overflow-hidden group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
    >
      <span className="relative z-10 mix-blend-difference text-white uppercase tracking-wider text-sm font-bold">
        {children}
      </span>
      <motion.div
        className="absolute inset-0 bg-white rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
    </motion.button>
  );
};

export default MagneticButton;
