import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Library Management System',
    description: 'A comprehensive system to manage library inventory, user borrowing history, and automated due date reminders.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com/akashbirsone',
    live: 'https://deogiri-library-management.vercel.app/'
  },
  {
    title: 'AI Resume Builder',
    description: 'Smart resume generator that uses AI to suggest bullet points and optimize content for ATS systems.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
    github: 'https://github.com/akashbirsone',
    live: 'https://ai-resume-builder-seven-mu.vercel.app/'
  },
  {
    title: 'Class Quiz Portal',
    description: 'Interactive platform for teachers to create quizzes and students to take them with real-time leaderboards.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'Supabase'],
    github: 'https://github.com/akashbirsone',
    live: 'https://class-quiz-portal-ruby.vercel.app/'
  },
  {
    title: 'College Notes',
    description: 'A platform for students to share and access college notes and study materials.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/akashbirsone',
    live: 'https://college-notes-library.vercel.app/'
  }
];

const ProjectCard = ({ project, isActive = false }: { project: typeof projects[0]; isActive?: boolean; key?: React.Key }) => (
  <div className={`group bg-surface border rounded-2xl transition-all duration-300 flex flex-col h-full overflow-hidden ${isActive ? '-translate-y-2 border-primary/50' : 'border-white/5 hover:-translate-y-2 hover:border-primary/50'}`}>
    {/* Card Content */}
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex justify-end items-start mb-4">
        <div className="flex space-x-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <h3 className={`text-2xl font-bold mb-3 transition-colors ${isActive ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
        {project.title}
      </h3>
      <p className="text-text-muted mb-8 flex-grow leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((tag, i) => (
          <span key={i} className="text-xs font-medium text-primary-light bg-primary/10 px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
      setCurrentIndex((current) => (current + 1) % projects.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Some of my recent work that showcases my skills in full-stack development.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} isActive={index === activeIndex} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden flex flex-col items-center">
          <div className="w-full">
            <ProjectCard project={projects[currentIndex]} isActive={true} />
          </div>
          
          <div className="flex items-center justify-center space-x-6 mt-8">
            <button 
              onClick={prevProject}
              className="p-3 rounded-full bg-surface border border-white/10 text-white hover:bg-primary hover:border-primary transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>
            <span className="text-text-muted font-medium">
              {currentIndex + 1} / {projects.length}
            </span>
            <button 
              onClick={nextProject}
              className="p-3 rounded-full bg-surface border border-white/10 text-white hover:bg-primary hover:border-primary transition-colors"
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
