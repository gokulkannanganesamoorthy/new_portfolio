import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MagneticButton from '../components/Button';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  // In a real app, fetch project data by ID
  const project = {
    title: 'Neon E-Commerce',
    category: 'Web Design',
    client: 'FutureRetail Inc.',
    timeline: '4 Weeks',
    role: 'UI/UX & Frontend',
    description:
      'A futuristic shopping experience designed to immerse users in a neon-lit cyber world. the goal was to increase engagement and reduce bounce rates through interactive elements and fast loading times.',
    results:
      'Increased conversion by 40% and reduced bounce rate by 15%. Won Awwwards Site of the Day.',
    image: '/assets/neon_ecommerce_mockup_1768406704610.png',
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      {/* Hero Header */}
      <div className="h-[60vh] relative flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ scale: imgScale }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center container px-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[10vw] leading-[0.8] font-bold font-heading uppercase tracking-tighter mb-4"
          >
            {project.title}
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4 text-[var(--color-text-dim)] uppercase tracking-widest text-sm"
          >
            <span>{project.category}</span>
            <span>—</span>
            <span>{project.timeline}</span>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[var(--color-text-dim)] hover:text-white mb-16 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />{' '}
          Back to Portfolio
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-sm">
                Client
              </h4>
              <p className="text-[var(--color-text-dim)] text-xl">
                {project.client}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-sm">
                Role
              </h4>
              <p className="text-[var(--color-text-dim)] text-xl">
                {project.role}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-sm">
                Impact
              </h4>
              <p className="text-[var(--color-text-dim)] text-xl">
                {project.results}
              </p>
            </div>
            <MagneticButton className="w-full">Visit Live Site</MagneticButton>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
              {project.description}
            </h3>

            <div className="space-y-8 mt-16">
              <div className="aspect-video bg-white/5 rounded-2xl border border-white/10" />
              <div className="grid grid-cols-2 gap-8">
                <div className="aspect-square bg-white/5 rounded-2xl border border-white/10" />
                <div className="aspect-square bg-white/5 rounded-2xl border border-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
