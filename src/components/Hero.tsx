import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Akash Birsone';
  const typingDelay = 95;
  const startDelay = 900;

  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });

  // Typing Animation Effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const type = () => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(type, typingDelay);
      }
    };

    timeout = setTimeout(type, startDelay);
    return () => clearTimeout(timeout);
  }, []);

  // Mouse Tracking Glow Effect
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Initialize positions at the center of the hero section
    const rect = hero.getBoundingClientRect();
    mousePosition.current = { x: rect.width / 2, y: rect.height / 2 };
    currentPosition.current = { x: rect.width / 2, y: rect.height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    hero.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const render = () => {
      // Linear interpolation (lerp) for smooth easing
      currentPosition.current.x += (mousePosition.current.x - currentPosition.current.x) * 0.05;
      currentPosition.current.y += (mousePosition.current.y - currentPosition.current.y) * 0.05;

      if (glowRef.current) {
        // Update DOM directly to avoid React re-renders and lag
        glowRef.current.style.transform = `translate(${currentPosition.current.x}px, ${currentPosition.current.y}px) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dynamic Radial Gradient Glow (Desktop) */}
      <div 
        ref={glowRef}
        className="hidden md:block absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none will-change-transform"
        style={{ transform: 'translate(50vw, 50vh) translate(-50%, -50%)' }}
      ></div>

      {/* Static Radial Gradient Glow (Mobile Fallback) */}
      <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-start max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-surface-light border border-white/10 rounded-full px-4 py-2 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-white/80">Open to work</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
            Hi, I'm <span className="text-primary">{text}</span>
            <span className="animate-blink font-light text-primary">|</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-medium text-text-muted mb-6">
            Full Stack Developer
          </h2>

          {/* Description */}
          <p className="text-lg text-text-muted mb-10 max-w-2xl leading-relaxed">
            I build exceptional and accessible digital experiences for the web.
            Passionate about creating scalable, user-centric applications using modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mb-8">
            <a href="#projects" className="w-full sm:w-auto inline-flex justify-center items-center space-x-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200">
              <span>View My Work</span>
              <ArrowRight size={20} />
            </a>
            <a href="mailto:akashbirsone80@gmail.com?subject=Hello,%20I'd%20like%20to%20connect%20with%20you!" className="w-full sm:w-auto inline-flex justify-center items-center space-x-2 bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200">
              <span>Contact Me</span>
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
