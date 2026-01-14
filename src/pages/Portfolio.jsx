import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Neon Commerce',
    cat: 'Web Design',
    img: '/assets/neon_ecommerce_mockup_1768406704610.png',
  },
  {
    id: 2,
    title: 'Cyber Dash',
    cat: 'Development',
    img: '/assets/cyber_dashboard_mockup_1768406723226.png',
  },
  {
    id: 3,
    title: 'Fintech App',
    cat: 'Mobile App',
    img: '/assets/fintech_app_mockup_1768406743922.png',
  },
  {
    id: 4,
    title: 'Identity',
    cat: 'Branding',
    img: '/assets/abstract_identity_art_1768406767512.png',
  },
];

const Portfolio = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  return (
    <div ref={targetRef} className="h-[300vh] relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16 px-16 md:px-32">
          <div className="flex-shrink-0 w-[80vw] md:w-[600px] flex flex-col justify-center">
            <h1
              className="text-[12vw] leading-[0.8] font-bold font-heading uppercase text-transparent stroke-text"
              style={{ WebkitTextStroke: '2px white' }}
            >
              Selected <br />{' '}
              <span className="text-white mix-blend-difference">Works</span>
            </h1>
            <p className="mt-8 text-xl text-[var(--color-text-dim)] max-w-sm">
              A collection of digital experiences crafted with precision and
              passion.
              <br />
              <br />
              <span className="text-sm uppercase tracking-widest border-b border-white inline-block pb-1">
                Scroll to Explore
              </span>
            </p>
          </div>

          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex-shrink-0 w-[80vw] md:w-[700px] h-[60vh] md:h-[70vh] bg-white/5 rounded-3xl overflow-hidden cursor-pointer border border-white/10"
              onClick={() =>
                (window.location.href = `/portfolio/${project.id}`)
              }
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 md:p-12">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase">
                      {project.title}
                    </h2>
                    <div className="p-4 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                  <p className="text-xl text-[var(--color-accent)] mt-2">
                    {project.cat}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
