import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import MagneticButton from './Button';

const links = [
  { name: 'Work', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(location.pathname);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 inset-x-2 md:inset-x-auto md:top-8 md:left-1/2 md:-translate-x-1/2 z-50 flex items-center justify-between md:justify-start gap-2 p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl min-w-0"
    >
      <Link
        to="/"
        className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-white text-black rounded-full font-bold font-heading text-sm"
      >
        G
      </Link>

      <div className="flex bg-black/20 rounded-full p-1 border border-white/5 overflow-x-auto no-scrollbar scroll-smooth flex-grow md:flex-grow-0 justify-between md:justify-start gap-1">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onMouseEnter={() => setHoveredPath(link.path)}
            onMouseLeave={() => setHoveredPath(location.pathname)}
            className="relative px-3 py-2 rounded-full text-[10px] md:text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 uppercase tracking-wide"
          >
            {/* Active/Hover Background Pill */}
            {hoveredPath === link.path && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-white/10 rounded-full"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span
              className={`relative z-10 ${
                hoveredPath === link.path ? 'text-white' : 'text-neutral-400'
              }`}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </div>

      <MagneticButton
        className="!px-6 !py-2 !text-xs hidden md:block"
        onClick={() => (window.location.href = '/contact')}
      >
        Let's Talk
      </MagneticButton>
    </motion.nav>
  );
};

export default Navbar;
