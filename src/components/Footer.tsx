import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-muted text-sm text-center md:text-left">
          Developed by Akash Birsone
        </p>
        
        <a 
          href="https://www.instagram.com/akash_birsone_21" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-text-muted hover:text-white transition-colors text-sm"
        >
          <Instagram size={18} />
          <span>akash_birsone_21</span>
        </a>
      </div>
    </footer>
  );
}
