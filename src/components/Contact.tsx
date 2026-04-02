import { Mail, Linkedin, Github, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="bg-background border border-white/10 rounded-3xl p-10 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Let's work together</h2>
          <p className="text-text-muted text-lg mb-10 max-w-xl mx-auto">
            I'm actively seeking opportunities as a Frontend / Full Stack Developer. If you have a project idea, collaboration, or job opportunity, feel free to reach out — I'd love to connect and build something impactful.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
            <a
              href="mailto:akashbirsone80@gmail.com?subject=Hello,%20I'd%20like%20to%20connect%20with%20you!"
              className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-medium transition-colors duration-200"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </a>
            <a
              href="https://www.linkedin.com/in/akashbirsone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-surface-light hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-medium transition-colors duration-200"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/akashbirsone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-surface-light hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-medium transition-colors duration-200"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-surface-light hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-medium transition-colors duration-200"
            >
              <FileText size={20} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
