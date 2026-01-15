import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../components/Button';
import { ArrowDown } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import GlitchText from '../components/GlitchText';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden perspective-1000">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center flex flex-col items-center gap-4"
        >
          <div className="flex flex-col items-center leading-none">
            <GlitchText
              text="CYBER"
              className="text-[15vw] font-bold font-heading tracking-tighter"
            />
            <GlitchText
              text="BUILDER"
              className="text-[15vw] font-bold font-heading tracking-tighter"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 p-4 border border-[var(--color-accent)]/30 bg-black/50 backdrop-blur-md rounded-none"
          >
            <p className="font-mono text-[var(--color-accent)] text-sm md:text-base uppercase tracking-widest">
              &gt; Initializing Neural Link...
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SELECTED WORK (Holographic Grid) */}
      <section className="py-32 container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-20">
          <div className="w-12 h-1 bg-[var(--color-accent)]" />
          <h2 className="text-4xl md:text-5xl font-bold font-heading uppercase tracking-widest text-white">
            Project_Files
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-20">
          {[
            {
              id: 1,
              title: 'Neon Commerce',
              year: '2025',
              img: '/assets/neon_ecommerce_mockup_1768406704610.png',
              desc: 'Next-Gen E-commerce Protocol',
            },
            {
              id: 2,
              title: 'Cyber Dash',
              year: '2024',
              img: '/assets/cyber_dashboard_mockup_1768406723226.png',
              desc: 'Neural Network Analytics',
            },
            {
              id: 3,
              title: 'Fintech App',
              year: '2023',
              img: '/assets/fintech_app_mockup_1768406743922.png',
              desc: 'Decentralized Finance Core',
            },
            {
              id: 4,
              title: 'Identity',
              year: '2023',
              img: '/assets/abstract_identity_art_1768406767512.png',
              desc: 'Digital Soul Fragments',
            },
          ].map((project, i) => (
            <div key={project.id} className="relative group">
              {/* Connecting Line */}
              {i % 2 !== 0 && (
                <div className="hidden md:block absolute top-[20%] -left-[10%] w-[10%] h-[1px] bg-[var(--color-accent)]/30" />
              )}
              {i % 2 === 0 && (
                <div className="hidden md:block absolute top-[20%] -right-[10%] w-[10%] h-[1px] bg-[var(--color-accent)]/30" />
              )}

              <div
                className={`flex flex-col md:flex-row gap-12 items-center ${
                  i % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Project Card */}
                <div className="w-full md:w-2/3">
                  <ProjectCard project={{ ...project, cat: project.year }} />
                </div>

                {/* Data Panel */}
                <div className="w-full md:w-1/3 space-y-4 font-mono">
                  <div className="text-xs text-[var(--color-accent)] opacity-70">
                    //{project.year} :: ID_00{project.id}
                  </div>
                  <h3 className="text-3xl font-bold text-white uppercase">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-[var(--color-accent)] pl-4">
                    {project.desc}
                  </p>
                  <MagneticButton
                    onClick={() =>
                      (window.location.href = `/portfolio/${project.id}`)
                    }
                  >
                    Initialize
                  </MagneticButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 flex justify-center">
          <MagneticButton onClick={() => (window.location.href = '/portfolio')}>
            Access Full Archive
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};

export default Home;
