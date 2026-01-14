import { motion } from 'framer-motion';
import Button from '../components/Button';

const About = () => {
  const skills = [
    'React / Next.js',
    'Tailwind CSS',
    'Node.js',
    'Framer Motion',
    'UI/UX Design',
    'Cybersecurity',
    'Python',
    'TypeScript',
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
            Driven by <br />{' '}
            <span className="text-[var(--color-accent)]">Performance</span>.
          </h1>
          <p className="text-lg text-[var(--color-text-dim)] mb-6">
            I'm Gokul Kannan Ganesamoorthy, a Front-End Developer, Full Stack
            Engineer, and Cybersecurity Enthusiast based in Coimbatore, India.
          </p>
          <p className="text-lg text-[var(--color-text-dim)] mb-6">
            Currently pursuing my B.Tech in IT at PSG College of Technology. My
            motto, <strong className="text-white">"Be Pro. Be Beyond."</strong>,
            drives me to optimize everything I touch—from code performance to
            security protocols.
          </p>
          <Button
            variant="primary"
            onClick={() => (window.location.href = '/contact')}
          >
            Let's Talk
          </Button>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2"
        >
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6">My Arsenal</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-[var(--color-accent)] transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
