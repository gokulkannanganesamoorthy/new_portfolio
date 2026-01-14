import { ArrowUpRight } from 'lucide-react';
import MagneticButton from './Button';

const Footer = () => {
  return (
    <footer className="relative bg-[var(--color-bg)] pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div>
            <h2 className="text-[12vw] leading-[0.8] font-bold font-heading uppercase tracking-tighter mix-blend-difference mb-8">
              Let's Talk
            </h2>
            <MagneticButton
              className="bg-white text-black border-transparent hover:scale-110 transition-transform duration-500"
              onClick={() =>
                (window.location.href = 'mailto:gokulkannan.dev@gmail.com')
              }
            >
              gokulkannan.dev@gmail.com
            </MagneticButton>
          </div>

          <div className="flex gap-8 mt-10 md:mt-0">
            {[
              {
                name: 'Instagram',
                url: 'https://instagram.com/gokulkannanganesamoorthy',
              },
              {
                name: 'LinkedIn',
                url: 'https://linkedin.com/in/gokulkannanganesamoorthy',
              },
              {
                name: 'Github',
                url: 'https://github.com/gokulkannanganesamoorthy',
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg uppercase tracking-wide text-[var(--color-text-dim)] hover:text-white transition-colors relative group"
              >
                {social.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-10 text-sm text-[var(--color-text-dim)] uppercase tracking-wider gap-4">
          <p>© 2026 Gokul Kannan</p>
          <div className="flex flex-col md:items-end">
            <p>Developed by</p>
            <a
              href="https://gokulkannanganesamoorthy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[var(--color-accent)] transition-colors mt-1"
            >
              Gokul Kannan Ganesamoorthy
            </a>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-[var(--color-accent)] opacity-5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
