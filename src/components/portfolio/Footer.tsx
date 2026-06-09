export function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/10 mt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-gradient font-semibold">Jheanne Selle</span>. Crafted with care.
        </p>
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/jheanneypilselle" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="glass w-10 h-10 grid place-items-center rounded-xl hover:shadow-glow transition">📘</a>
          <a href="mailto:jheanneselle28@gmail.com" aria-label="Email" className="glass w-10 h-10 grid place-items-center rounded-xl hover:shadow-glow transition">✉️</a>
        </div>
      </div>
    </footer>
  );
}
