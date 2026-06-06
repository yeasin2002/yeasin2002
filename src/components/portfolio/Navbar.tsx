export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-pop text-cream font-display font-black brutal-border">
            Y
          </span>
          yeasin<span className="text-indigo-pop">.</span>dev
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-indigo-pop transition-colors">About</a>
          <a href="#experience" className="hover:text-indigo-pop transition-colors">Experience</a>
          <a href="#projects" className="hover:text-indigo-pop transition-colors">Projects</a>
          <a href="#skills" className="hover:text-indigo-pop transition-colors">Skills</a>
        </nav>
        <a
          href="mailto:mdkawsarislam2002@gmail.com"
          className="rounded-full bg-ink text-cream px-5 py-2.5 text-sm font-semibold hover:bg-indigo-pop transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}