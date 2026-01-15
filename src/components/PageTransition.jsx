import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black z-[100]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ originY: 0 }}
      />

      <motion.div
        className="fixed inset-0 bg-black z-[100]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ originY: 1 }}
      />

      <div className="w-full">{children}</div>
    </>
  );
};

export default PageTransition;
