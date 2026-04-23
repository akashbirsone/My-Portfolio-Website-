import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white">
          Dev<span className="text-primary">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-text-muted hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`} 
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Sidebar */}
      <div 
        className={`md:hidden fixed top-0 left-0 h-screen w-[300px] bg-gradient-to-b from-background to-[#1e1b4b]/95 backdrop-blur-2xl border-r border-white/10 shadow-[40px_0_40px_rgba(0,0,0,0.5)] transform transition-transform duration-300 ease-out z-50 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Decorative Glow */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="flex justify-between items-center p-6 border-b border-white/5 relative z-10">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white">
            Dev<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Portfolio</span>
          </a>
          <button className="text-white/70 bg-white/5 hover:bg-white/10 p-2 rounded-xl focus:outline-none hover:text-white transition-all duration-200" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>
        
        <div className="flex flex-col flex-1 px-4 py-8 space-y-2 overflow-y-auto relative z-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-text-muted hover:text-white hover:bg-gradient-to-r hover:from-primary/15 hover:to-blue-500/15 px-4 py-3 rounded-xl transition-all duration-300 hover:translate-x-1"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="p-6 border-t border-white/5 relative z-10 flex flex-col space-y-3">
          <a href="#projects" onClick={() => setIsOpen(false)} className="flex items-center justify-center w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary-light hover:to-blue-500 text-white px-4 py-3.5 rounded-xl font-medium transition-all duration-300 shadow-[0_0_20px_rgba(124,111,239,0.3)] hover:shadow-[0_0_25px_rgba(124,111,239,0.5)]">
            View My Work
          </a>
          <a href="mailto:akashbirsone80@gmail.com" onClick={() => setIsOpen(false)} className="flex items-center justify-center w-full bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-4 py-3.5 rounded-xl font-medium transition-all duration-200">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}
