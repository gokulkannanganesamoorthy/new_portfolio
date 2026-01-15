import { motion } from 'framer-motion';

const CyberHUD = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[40] p-6 hidden md:block">
      {/* Corner Brackets */}
      <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-[var(--color-accent)]/50" />
      <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-[var(--color-accent)]/50" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-[var(--color-accent)]/50" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-[var(--color-accent)]/50" />

      {/* Side Data Lines */}
      <div className="absolute top-1/2 left-6 w-[2px] h-32 bg-[var(--color-accent)]/20 -translate-y-1/2 flex flex-col justify-between py-2">
        <div className="w-[4px] h-[20%] bg-[var(--color-accent)] -ml-[1px] animate-pulse" />
      </div>
      <div className="absolute top-1/2 right-6 w-[2px] h-32 bg-[var(--color-accent)]/20 -translate-y-1/2 flex flex-col justify-between py-2 items-end">
        <div className="w-[4px] h-[20%] bg-[var(--color-accent)] -mr-[1px] animate-pulse delay-75" />
      </div>

      {/* System Status Marquee */}
      <div className="absolute bottom-6 left-20 right-20 flex justify-center overflow-hidden">
        <motion.div
          className="text-[10px] font-mono text-[var(--color-accent)]/40 whitespace-nowrap uppercase tracking-widest"
          animate={{ x: [0, -100] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          System Online // Secure Connection Established // Rendering 3D Context
          // Protocol V.2.0.26 // Cyber Deck Visualizer //
        </motion.div>
      </div>

      {/* Scanline Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4yKSIvPjwvc3ZnPg==')] opacity-20 pointer-events-none mix-blend-overlay z-[50]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient-vignette opacity-40 z-[45]" />
    </div>
  );
};

export default CyberHUD;
