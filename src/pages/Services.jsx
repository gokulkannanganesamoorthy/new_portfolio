import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, Code, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: <Palette size={48} />,
    title: 'UI/UX Design',
    desc: 'Aesthetics that breathe. I create interfaces that feel alive, using motion and depth to guide the user journey.',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
    img: '/assets/service_ui_ux_1768406901642.png',
  },
  {
    icon: <Code size={48} />,
    title: 'Web Engineering',
    desc: 'React, Next.js, and WebGL. I build scalable applications that perform at the speed of thought.',
    tags: ['React', 'WebGL', 'Node.js'],
    img: '/assets/service_web_eng_1768406921145.png',
  },
  {
    icon: <Shield size={48} />,
    title: 'Cyber Security',
    desc: 'Fortress-grade protection. Auditing and hardening applications against modern threats.',
    tags: ['Pen Testing', 'Auditing', 'Hardening'],
    img: '/assets/service_security_1768406937869.png',
  },
  {
    icon: <Zap size={48} />,
    title: 'Performance',
    desc: 'Optimizing for the milliseconds. Ensuring your site loads instantly and runs smoothly on any device.',
    tags: ['SEO', 'Core Web Vitals', 'Optimization'],
    img: '/assets/service_performance_1768406956238.png',
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-6 py-32">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-[10vw] leading-[0.9] font-bold font-heading uppercase mb-20 md:mb-32"
      >
        My <span className="text-[var(--color-accent)]">Craft</span>
      </motion.h1>

      <div className="flex flex-col gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="group relative h-[400px] md:h-[500px] border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-colors bg-white/5 backdrop-blur-sm flex items-end p-8 md:p-12"
          >
            {/* Background Image with Parallax-like hover */}
            <div className="absolute inset-0 z-0">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-10 w-full flex flex-col md:flex-row gap-8 md:items-end justify-between">
              <div>
                <div className="text-[var(--color-accent)] mb-6 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                  {service.icon}
                </div>
                <h3 className="text-4xl md:text-6xl font-bold font-heading uppercase mb-4 leading-none">
                  {service.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs border border-white/20 rounded-full uppercase tracking-wider text-[var(--color-text-dim)] group-hover:border-[var(--color-accent)] group-hover:text-white transition-colors bg-black/50 backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-lg text-[var(--color-text-dim)] md:text-xl leading-relaxed md:max-w-md md:text-right group-hover:text-white transition-colors">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
