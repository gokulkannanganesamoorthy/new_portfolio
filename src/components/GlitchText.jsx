import { motion } from 'framer-motion';

const GlitchText = ({ text, className = '' }) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      {/* Main Text */}
      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
        {text}
      </span>

      {/* Glitch Layer 1 (Red/Cyan Offset) */}
      <motion.span
        className="absolute top-0 left-0 -z-10 text-[var(--color-accent)] opacity-70 mix-blend-screen"
        animate={{
          x: [0, -2, 2, -1, 0],
          y: [0, 1, -1, 0],
          opacity: [0.7, 1, 0.5, 0.7],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: Math.random() * 5 + 1,
        }}
      >
        {text}
      </motion.span>

      {/* Glitch Layer 2 (Blue/Magenta Offset) */}
      <motion.span
        className="absolute top-0 left-0 -z-10 text-[#ff00ff] opacity-70 mix-blend-screen"
        animate={{
          x: [0, 2, -2, 1, 0],
          y: [0, -1, 1, 0],
          opacity: [0.7, 0.5, 1, 0.7],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: Math.random() * 5 + 1.5,
        }}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default GlitchText;
