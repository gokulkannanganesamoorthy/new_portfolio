import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import MagneticButton from '../components/Button';
import profileImg from '../assets/1isto1gokul.jpeg';
import resumePdf from '../assets/gokul_kannan_resume.pdf';

const SkillBar = ({ skill, level, delay }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs font-mono mb-1 text-[var(--color-accent)] uppercase tracking-widest">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-white/10 w-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full bg-[var(--color-accent)] relative"
        >
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 font-mono text-sm leading-relaxed">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Left Column: Avatar & Bio */}
        <div className="space-y-12">
          <div className="relative w-full aspect-square md:aspect-[3/4] overflow-hidden border border-[var(--color-accent)]/30 group">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Cyber Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4yKSIvPjwvc3ZnPg==')] opacity-50 pointer-events-none mix-blend-overlay" />
            <div className="absolute bottom-4 left-4 bg-black/80 px-2 py-1 border border-[var(--color-accent)] text-[var(--color-accent)] text-xs">
              STATUS: ONLINE
            </div>
          </div>

          <div>
            <h3 className="text-[var(--color-accent)] mb-4 uppercase tracking-widest border-b border-[var(--color-accent)]/30 pb-2 inline-block">
              :: System_Log
            </h3>
            <p className="text-gray-300 text-lg md:text-xl font-body">
              I am a creative technologist obsessed with the intersection of{' '}
              <span className="text-white font-bold">design</span> and{' '}
              <span className="text-white font-bold">code</span>. I don't just
              build websites; I construct digital realities. My mission is to
              dismantle the barrier between user and interface.
            </p>
          </div>

          <MagneticButton onClick={() => window.open(resumePdf)}>
            Download Resume_V2.0
          </MagneticButton>
        </div>

        {/* Right Column: Stats & Experience */}
        <div className="space-y-16">
          <div>
            <GlitchText
              text="PERSONNEL"
              className="text-6xl md:text-8xl font-bold font-heading mb-8 block"
            />
            <GlitchText
              text="DATA"
              className="text-6xl md:text-8xl font-bold font-heading mb-12 block"
            />
          </div>

          {/* Skills */}
          <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm relative">
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white" />

            <h4 className="text-xl font-bold text-white mb-6 uppercase">
              Tech_Stack
            </h4>
            <SkillBar skill="React / Next.js" level={95} delay={0.2} />
            <SkillBar skill="WebGL / Three.js" level={80} delay={0.4} />
            <SkillBar skill="TypeScript" level={90} delay={0.6} />
            <SkillBar skill="UI/UX Design" level={85} delay={0.8} />
          </div>

          {/* Experience Timeline */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase border-l-4 border-[var(--color-accent)] pl-4">
              Mission_History
            </h4>
            <div className="space-y-8 border-l border-white/10 ml-2 pl-8 relative">
              {[
                {
                  year: 'Feb 2025 - Dec 2025',
                  role: 'Founder / CEO',
                  company: 'Luno Tech',
                  desc: 'Founded a digital agency. Led end-to-end client projects in web, app, SEO, and branding.',
                },
                {
                  year: 'Jan 2025 - May 2025',
                  role: 'Gen AI Engineer Intern',
                  company: 'AxTR Labs',
                  desc: 'Developed AI tools for automation and enhanced human interaction, focusing on NLP and R&D.',
                },
                {
                  year: 'May 2022 - Jun 2022',
                  role: 'Ethical Hacking Intern',
                  company: 'HackUp Technologies',
                  desc: 'Conducted vulnerability assessments and penetration tests, strengthening client security postures.',
                },
              ].map((job, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[38px] top-1 w-3 h-3 bg-[var(--color-accent)] rounded-full ring-4 ring-black" />
                  <div className="text-[var(--color-accent)] text-xs mb-1">
                    {job.year}
                  </div>
                  <h5 className="text-white font-bold text-lg">{job.role}</h5>
                  <div className="text-gray-500 mb-2">{job.company}</div>
                  <p className="text-gray-400 text-sm">{job.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
