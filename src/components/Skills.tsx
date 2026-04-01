import { FileJson, Atom, Flame, Database, FileCode2, Paintbrush, Globe, Leaf, Server, Cpu } from 'lucide-react';

const row1 = [
  { name: 'HTML5', icon: Globe, color: '#E34F26' },
  { name: 'CSS3', icon: Paintbrush, color: '#1572B6' },
  { name: 'JavaScript', icon: FileJson, color: '#F7DF1E' },
  { name: 'React', icon: Atom, color: '#61DAFB' },
  { name: 'TypeScript', icon: FileCode2, color: '#3178C6' },
];

const row2 = [
  { name: 'Node.js', icon: Server, color: '#339933' },
  { name: 'Express', icon: Cpu, color: '#FFFFFF' },
  { name: 'MongoDB', icon: Leaf, color: '#47A248' },
  { name: 'Firebase', icon: Flame, color: '#FFCA28' },
  { name: 'Supabase', icon: Database, color: '#3ECF8E' },
];

const MarqueeRow = ({ items, direction }: { items: typeof row1, direction: 'left' | 'right' }) => {
  // Duplicate items to create seamless loop
  const duplicatedItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className="marquee-container w-full py-2">
      <div className={`flex w-max space-x-12 sm:space-x-20 px-4 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}>
        {duplicatedItems.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div 
              key={index} 
              className="flex flex-col items-center gap-[8px] group w-20 sm:w-24 flex-shrink-0"
            >
              <Icon 
                color={tech.color} 
                className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-1"
                strokeWidth={1.5}
              />
              <span className="text-[11px] sm:text-[13px] text-[#e8e8f0] text-center font-medium">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="py-[32px] px-[4%] md:py-[40px] md:px-[5%] lg:py-[60px] lg:px-[6%] bg-background flex flex-col justify-center items-center overflow-hidden">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Core Technologies</h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          The primary tools I use to build modern, scalable applications.
        </p>
      </div>

      <div className="w-full max-w-5xl">
        <div className="bg-[#13131c] rounded-[16px] border border-white/[0.06] py-[28px] px-[24px] w-full h-auto shadow-2xl overflow-hidden">
          <div className="flex flex-col gap-6 md:gap-8">
            <MarqueeRow items={row1} direction="right" />
            <MarqueeRow items={row2} direction="left" />
          </div>
        </div>
      </div>
    </section>
  );
}
