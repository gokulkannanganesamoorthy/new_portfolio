import { ReactLenis } from 'lenis/react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';

const Layout = ({ children }) => {
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-body selection:bg-white selection:text-black">
        <Cursor />
        <div className="noise-overlay" />
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Layout;
