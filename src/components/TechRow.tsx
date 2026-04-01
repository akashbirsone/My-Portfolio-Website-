import { FileJson, Atom, Flame, Database } from 'lucide-react';

export default function TechRow() {
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
    <section className="py-12 bg-[#1a1a1a] flex justify-center items-center">
      <div className="w-full max-w-3xl px-6">
        <div className="flex flex-row justify-between items-center gap-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center group"
              >
                <div 
                  className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-[#2a2a2a] transition-all duration-300 group-hover:-translate-y-2"
                  style={{
                    boxShadow: `0 0 20px ${tech.glow}, inset 0 0 10px ${tech.glow}`,
                    border: `1px solid ${tech.color}40`
                  }}
                >
                  <Icon 
                    size={36} 
                    color={tech.color} 
                    className="sm:w-10 sm:h-10 md:w-12 md:h-12 drop-shadow-lg"
                    style={{ filter: `drop-shadow(0 0 8px ${tech.color})` }}
                  />
                </div>
                <span className="mt-4 text-xs sm:text-sm md:text-base font-semibold text-white tracking-wide opacity-90 group-hover:opacity-100 transition-opacity">
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
