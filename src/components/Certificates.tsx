import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import testMauImg from '../assets/testmau-ai.png';
import webImg from '../assets/web.png';
import nodeImg from '../assets/node.png';

const certificates = [
  {
    title: 'Complete Front End Development Journey',
    issuer: 'Infosys',
    date: '2026',
    description: 'Comprehensive training in modern frontend technologies and responsive design.',
    image: webImg,
  },
  {
    title: 'Node.js & Express Complete',
    issuer: 'Infosys',
    date: '2026',
    description: 'Advanced backend development with Node.js, Express, and MongoDB.',
    image: nodeImg,
  },
  {
    title: 'Zero to AI Tester',
    issuer: 'GeeksforGeeks',
    date: '2026',
    description: 'Specialized certification in AI-driven testing and quality assurance.',
    image: testMauImg,
  }
];

interface CertificateCardProps {
  cert: typeof certificates[0];
  isMobile?: boolean;
  onOpen: (image: string) => void;
  isActive?: boolean;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ cert, isMobile = false, onOpen, isActive = false }) => (
  <div className={`group relative bg-background border rounded-2xl p-6 transition-all duration-300 flex flex-col items-start text-left ${isMobile ? 'w-[280px] sm:w-[320px] flex-shrink-0' : ''} ${isActive ? '-translate-y-[3px] border-primary/50' : 'border-white/5 hover:-translate-y-[3px] hover:border-primary/50'}`}>
    <div className="w-full aspect-video mb-6 overflow-hidden rounded-xl bg-white/5 flex items-center justify-center relative">
      <img 
        src={cert.image} 
        alt={cert.title} 
        className={`w-full h-full object-cover transition-transform duration-500 ${isActive ? 'scale-105' : 'group-hover:scale-105'}`}
        referrerPolicy="no-referrer"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          const fallbackSrc = `https://picsum.photos/seed/${cert.title.replace(/\s+/g, '')}/800/600`;
          if (target.src !== fallbackSrc) {
            target.src = fallbackSrc;
          }
        }}
      />
    </div>
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between w-full gap-4 mb-2">
        <button 
          onClick={() => onOpen(cert.image)}
          className={`text-xl font-bold transition-colors focus:outline-none text-left ${isActive ? 'text-primary' : 'text-white hover:text-primary'}`}
        >
          {cert.title}
        </button>
        <button 
          onClick={() => onOpen(cert.image)}
          className={`transition-colors focus:outline-none flex-shrink-0 ${isActive ? 'text-primary' : 'text-white/40 group-hover:text-primary'}`}
          aria-label="View Certificate"
        >
          <ArrowUpRight size={24} />
        </button>
      </div>
      <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
        <span className="font-medium">{cert.issuer}</span>
        <span>•</span>
        <span>{cert.date}</span>
      </div>
      <p className="text-[#9ca3af] text-[13.5px] line-clamp-1">
        {cert.description}
      </p>
    </div>
  </div>
);

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % certificates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const duplicatedCertificates = [...certificates, ...certificates, ...certificates, ...certificates];

  return (
    <section id="certificates" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Certificates</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Professional certifications and courses I've completed to enhance my skills.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard key={`desktop-${index}`} cert={cert} onOpen={setSelectedImage} isActive={index === activeIndex} />
          ))}
        </div>
      </div>

      {/* Mobile Marquee */}
      <div className="md:hidden w-full py-4 overflow-hidden relative">
        {/* Fade edges for mobile marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max space-x-6 px-4 animate-marquee-right">
          {duplicatedCertificates.map((cert, index) => (
            <CertificateCard key={`mobile-${index}`} cert={cert} isMobile={true} onOpen={setSelectedImage} isActive={index % certificates.length === activeIndex} />
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Certificate Preview" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              const cert = certificates.find(c => c.image === selectedImage);
              if (cert) {
                const fallbackSrc = `https://picsum.photos/seed/${cert.title.replace(/\s+/g, '')}/800/600`;
                if (target.src !== fallbackSrc) {
                  target.src = fallbackSrc;
                }
              }
            }}
          />
        </div>
      )}
    </section>
  );
}
