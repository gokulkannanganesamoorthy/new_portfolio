import { ReactLenis } from 'lenis/react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';
import CyberBackground from './CyberBackground';
import CyberHUD from './CyberHUD';

const Layout = ({ children }) => {
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-body selection:bg-white selection:text-black">
        <Cursor />
        <div className="noise-overlay" />
        <CyberBackground />
        <CyberHUD />
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Layout;
