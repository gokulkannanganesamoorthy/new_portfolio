import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from '../components/Button';
import { ArrowDown } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="relative">
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center"
        >
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-[15vw] leading-[0.8] font-bold font-heading uppercase tracking-tighter mix-blend-difference"
          >
            Design
          </motion.h1>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[12vw] md:text-[15vw] leading-[0.8] font-bold font-heading uppercase tracking-tighter text-transparent stroke-text"
            style={{ WebkitTextStroke: '2px white' }}
          >
            Engineer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 text-xl md:text-2xl text-[var(--color-text-dim)] max-w-lg mx-auto font-light"
          >
            Crafting digital experiences that{' '}
            <span className="text-[var(--color-accent)]">
              defy expectations
            </span>
            .
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-dim)]"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>

        {/* Background Gradient Mesh */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--color-accent)] rounded-full blur-[120px] mix-blend-screen animate-pulse duration-3000" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[100px] mix-blend-screen" />
        </div>
      </section>

      {/* SELECTED WORK PREVIEW */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h2 className="text-6xl md:text-8xl font-bold font-heading uppercase leading-none">
            Selected <br /> Works
          </h2>
          <MagneticButton
            className="hidden md:block"
            onClick={() => (window.location.href = '/portfolio')}
          >
            View All Projects
          </MagneticButton>
        </div>

        <div className="space-y-32">
          {[
            {
              id: 1,
              title: 'Neon Commerce',
              year: '2025',
              img: '/assets/neon_ecommerce_mockup_1768406704610.png',
            },
            {
              id: 2,
              title: 'Cyber Dash',
              year: '2024',
              img: '/assets/cyber_dashboard_mockup_1768406723226.png',
            },
            {
              id: 3,
              title: 'Fintech App',
              year: '2023',
              img: '/assets/fintech_app_mockup_1768406743922.png',
            },
            {
              id: 4,
              title: 'Identity',
              year: '2023',
              img: '/assets/abstract_identity_art_1768406767512.png',
            },
          ].map((project, i) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() =>
                (window.location.href = `/portfolio/${project.id}`)
              }
            >
              <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex justify-between items-baseline border-b border-white/20 pb-4 group-hover:border-white transition-colors duration-500">
                <h3 className="text-4xl md:text-5xl font-bold uppercase">
                  {project.title}
                </h3>
                <span className="text-xl font-mono text-[var(--color-text-dim)]">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center md:hidden">
          <MagneticButton onClick={() => (window.location.href = '/portfolio')}>
            View All Projects
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};

export default Home;
