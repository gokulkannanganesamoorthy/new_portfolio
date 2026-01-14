import { useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden py-20 px-4 md:px-0">
      {/* Background Mesh Image */}
      <img
        src="/assets/contact_background_mesh_1768406786360.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-[var(--color-bg)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-[12vw] lg:text-[8vw] leading-[0.8] font-bold font-heading uppercase tracking-tighter mix-blend-difference"
            >
              Start <br />{' '}
              <span
                className="text-transparent stroke-text"
                style={{ WebkitTextStroke: '2px white' }}
              >
                Project
              </span>
            </motion.h1>
            <div className="text-xl md:text-2xl text-[var(--color-text-dim)] font-light max-w-md mx-auto lg:mx-0">
              <p>Have a vision?</p>
              <p>
                Let's make it a <span className="text-white">reality</span>.
              </p>
            </div>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-8">
              {['Name', 'Email'].map((field) => (
                <div key={field} className="relative group">
                  <input
                    type={field === 'Email' ? 'email' : 'text'}
                    name={field.toLowerCase()}
                    placeholder={field}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none transition-colors placeholder:text-white/20 group-hover:border-white/50 focus:border-[var(--color-accent)]"
                  />
                </div>
              ))}

              <div className="relative group">
                <textarea
                  name="message"
                  placeholder="Tell me about your idea..."
                  rows="3"
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:outline-none transition-colors placeholder:text-white/20 resize-none group-hover:border-white/50 focus:border-[var(--color-accent)]"
                ></textarea>
              </div>

              <div className="pt-4 flex justify-end">
                <MagneticButton className="bg-white text-black hover:bg-[var(--color-accent)] hover:text-white border-transparent w-full md:w-auto">
                  Send Message
                </MagneticButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
