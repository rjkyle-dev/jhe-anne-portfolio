import { useEffect, useState } from "react";
import profile from "@/assets/profile.jpg";

const roles = ["Aspiring Web Developer", "IT Graduate", "Problem Solver", "Lifelong Learner"];

export function Hero() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text === current) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text === "") { setDel(false); setI(i + 1); }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(t);
  }, [text, del, i]);

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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4">
            Hi, I'm <span className="text-gradient">Jheanne Selle</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6 h-8">
            {text}<span className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle animate-pulse" />
          </p>
          <p className="text-base text-muted-foreground max-w-xl mb-8 leading-relaxed">
            An Information Technology graduate crafting elegant, user-friendly digital experiences.
            Passionate about modern web development, clean code, and continuous growth.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-medium px-6 py-3 rounded-xl shadow-glow hover:scale-[1.02] transition">
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
                src={profile}
                alt="Jheanne Selle portrait"
                width={420} height={420}
                className="w-72 h-72 sm:w-96 sm:h-96 object-cover rounded-[1.5rem]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-4 py-3 animate-float">
              <p className="text-xs text-muted-foreground">Experience</p>
              <p className="font-bold text-gradient">Fresh Grad</p>
            </div>
            <div className="absolute -top-6 -right-6 glass rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "2s" }}>
              <p className="text-xs text-muted-foreground">Focus</p>
              <p className="font-bold text-gradient">Web Dev</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
