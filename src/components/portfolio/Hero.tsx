import profileAsset from "@/assets/profile.png.asset.json";
import cvAsset from "@/assets/cv.pdf.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-secondary/25 blur-3xl animate-blob" style={{ animationDelay: "5s" }} />
      {/* Particles */}
      {Array.from({ length: 14 }).map((_, k) => (
        <span key={k} className="absolute w-1.5 h-1.5 rounded-full bg-white/40 animate-float"
          style={{ top: `${(k * 53) % 100}%`, left: `${(k * 37) % 100}%`, animationDelay: `${k * 0.4}s` }} />
      ))}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="glass inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" /> Available for opportunities
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8">
            Hi, I'm <span className="text-gradient">Jheanne Selle</span>
          </h1>
          <div className="flex flex-wrap gap-3">
            <a href={cvAsset.url} download="Jheanne-Selle-CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-medium px-6 py-3 rounded-xl shadow-glow hover:scale-[1.02] transition">
              Download CV
            </a>
            <a href="#contact" className="glass inline-flex items-center gap-2 text-foreground font-medium px-6 py-3 rounded-xl hover:bg-white/10 transition">
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-[2rem] blur-2xl opacity-60 animate-pulse" />
            <div className="relative glass rounded-[2rem] p-3 shadow-glow">
              <img
                src={profileAsset.url}
                alt="Jheanne Selle portrait"
                width={420} height={420}
                className="w-72 h-72 sm:w-96 sm:h-96 object-cover rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
