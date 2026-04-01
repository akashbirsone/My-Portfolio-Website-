import { FileJson, Atom, Flame, Database } from 'lucide-react';

export default function Skills() {
  const technologies = [
    {
      name: 'JavaScript',
      icon: FileJson,
      color: '#F7DF1E',
      glow: 'rgba(247, 223, 30, 0.6)',
    },
    {
      name: 'React',
      icon: Atom,
      color: '#61DAFB',
      glow: 'rgba(97, 218, 251, 0.6)',
    },
    {
      name: 'Firebase',
      icon: Flame,
      color: '#FFCA28',
      glow: 'rgba(255, 202, 40, 0.6)',
    },
    {
      name: 'Supabase',
      icon: Database,
      color: '#3ECF8E',
      glow: 'rgba(62, 207, 142, 0.6)',
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#1a1a1a] flex flex-col justify-center items-center">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Core Technologies</h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto px-6">
          The primary tools I use to build modern, scalable applications.
        </p>
      </div>

      <div className="w-full max-w-4xl px-6">
        <div className="flex flex-row justify-between items-center gap-4 sm:gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center group w-full"
              >
                <div 
                  className="relative flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-[#222222] transition-all duration-300 group-hover:-translate-y-2"
                  style={{
                    boxShadow: `0 0 25px ${tech.glow}, inset 0 0 15px ${tech.glow}`,
                    border: `1px solid ${tech.color}50`
                  }}
                >
                  <Icon 
                    size={48} 
                    color={tech.color} 
                    className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 drop-shadow-lg"
                    style={{ filter: `drop-shadow(0 0 10px ${tech.color})` }}
                  />
                </div>
                <span className="mt-5 text-sm sm:text-base md:text-lg font-semibold text-white tracking-wide opacity-90 group-hover:opacity-100 transition-opacity text-center">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
