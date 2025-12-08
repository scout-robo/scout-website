import React, { useState, useEffect } from 'react';
import { Menu, X, LogIn } from 'lucide-react';
import { LOGO_PATH } from '../src/constants/images';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    if (href === '#careers') {
      onNavigate('careers');
      window.scrollTo(0, 0);
    } else {
      onNavigate('home');
      window.scrollTo(0, 0);
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Technology', href: '#technology' },
    { name: 'Industries', href: '#industries' },
    { name: 'ROI', href: '#benefits' },
    { name: 'How It Works', href: '#system' },
    { name: 'News', href: '#news' },
    { name: 'Careers', href: '#careers' },
  ];

  const isHome = currentPage === 'home';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || !isHome || isMobileMenuOpen
            ? 'bg-scout-dark/90 backdrop-blur-md border-b border-white/10 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO SECTION - EDIT HERE TO REPLACE LOGO */}
          <div 
            onClick={() => { onNavigate('home'); window.scrollTo(0,0); setIsMobileMenuOpen(false); }}
            className="flex items-center gap-3 cursor-pointer group shrink-0 relative z-50"
          >
            {/* Logo Icon + Text */}
            <img src={LOGO_PATH} alt="Scout Robotics Icon" className="h-8 md:h-10 w-auto group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg md:text-xl font-bold tracking-tight text-white uppercase font-mono">
              Scout<span className="text-scout-primary">Robotics</span>
            </span>
            {/* END LOGO SECTION */}
          </div>

          {/* Desktop & Tablet Links - Responsive Spacing */}
          {/* Hidden on Mobile (< md), Flex on Tablet+ (>= md) */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-2 lg:gap-8 px-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`text-[10px] lg:text-xs font-semibold uppercase tracking-widest font-mono transition-colors whitespace-nowrap px-2 py-1 rounded hover:bg-white/5 ${
                  (currentPage === 'careers' && link.href === '#careers') || (currentPage === 'home' && link.href !== '#careers') 
                  ? 'text-white' 
                  : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 shrink-0 relative z-50">
            {/* Dashboard Login Button */}
            {/* Visible on all screens, but adapts style */}
            <div className="hidden md:block">
              <button className="flex items-center gap-2 bg-white/10 text-white border border-white/20 px-3 py-2 lg:px-5 rounded-none font-bold hover:bg-white hover:text-black transition-all duration-300 group">
                {/* Text hidden on Tablet, visible on Laptop+ */}
                <span className="hidden lg:inline uppercase text-xs tracking-wider"><a href="https://app.scoutrobo.com">Dashboard Login</a></span>
                <LogIn className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Toggle - Only shows on Mobile (< md) */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-scout-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
         <div className="flex flex-col items-center gap-8 animate-in slide-in-from-bottom-10 fade-in duration-500">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl font-bold text-white hover:text-scout-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            
            <div className="w-12 h-0.5 bg-white/10 my-4"></div>

            <button className="flex items-center gap-3 bg-scout-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all">
               Dashboard Login <LogIn className="w-5 h-5" />
            </button>
         </div>
      </div>
    </>
  );
};

export default Navbar;