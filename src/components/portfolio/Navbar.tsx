import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#milestones", label: "Milestones" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}>
      <nav className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all`}>
        <div className={`glass rounded-2xl px-5 py-3 flex items-center justify-between ${scrolled ? "shadow-soft" : ""}`}>
          <a href="#home" className="font-display font-bold text-lg sr-only">
            Home
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-xl shadow-glow hover:opacity-90 transition">
            Contact Me
          </a>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-white/5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden glass mt-2 rounded-2xl p-3 animate-fade-up">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
