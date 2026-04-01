import { useEffect, useRef, useState } from 'react';
import { Code2, Coffee, FolderGit2 } from 'lucide-react';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'React/TypeScript', level: 90 },
  { name: 'Node.js/Express', level: 70 },
  { name: 'Firebase/Supabase', level: 80 },
  { name: 'MongoDB', level: 50 },
  { name: 'REST APIs', level: 90 },
];

const AnimatedCounter = ({ end, suffix, isVisible }: { end: number, suffix: string, isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // easeOutQuart
      const easeOut = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end]);

  return <span>{count}{suffix}</span>;
};

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Bio & Stats */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              I'm a passionate Frontend Developer skilled in HTML, CSS, JavaScript, and React. I build responsive and user-friendly web applications with a focus on real-world projects like Class Quiz Portal, Resume Builder, and Library Management System. Currently learning Node.js, Express, and MongoDB to grow as a Full Stack Developer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-surface-light border border-white/5 p-6 rounded-xl flex flex-col items-center justify-center text-center">
                <FolderGit2 className="text-primary mb-3" size={28} />
                <span className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter end={4} suffix="+" isVisible={isVisible} />
                </span>
                <span className="text-sm text-text-muted">Projects Built</span>
              </div>
              <div className="bg-surface-light border border-white/5 p-6 rounded-xl flex flex-col items-center justify-center text-center">
                <Code2 className="text-primary mb-3" size={28} />
                <span className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter end={10} suffix="+" isVisible={isVisible} />
                </span>
                <span className="text-sm text-text-muted">Technologies</span>
              </div>
              <div className="bg-surface-light border border-white/5 p-6 rounded-xl flex flex-col items-center justify-center text-center">
                <Coffee className="text-primary mb-3" size={28} />
                <span className="text-3xl font-bold text-white mb-1">∞</span>
                <span className="text-sm text-text-muted">Cups of Chai</span>
              </div>
            </div>
          </div>

          {/* Right Column: Skill Bars */}
          <div className="bg-surface border border-white/5 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 text-white">Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-white">{skill.name}</span>
                    <span className="text-sm font-medium text-text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-surface-light rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDuration: '0.6s',
                        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                        transitionDelay: `${index * 50}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
