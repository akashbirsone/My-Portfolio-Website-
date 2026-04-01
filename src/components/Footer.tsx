export default function Footer() {
  return (
    <footer className="bg-background py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-muted text-sm text-center md:text-left">
          Built with React + TypeScript · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
