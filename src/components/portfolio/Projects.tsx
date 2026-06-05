import { Section } from "./Section";

const projects = [
  { name: "Student Records System", desc: "A PHP & MySQL based system for managing student information with role-based access.", tags: ["PHP", "MySQL", "Bootstrap"], emoji: "🎓" },
  { name: "Portfolio Website", desc: "A modern, responsive personal portfolio with glassmorphism design and smooth animations.", tags: ["React", "Tailwind"], emoji: "💼" },
  { name: "Inventory Tracker", desc: "Desktop inventory management app built with C# and SQL Server for small businesses.", tags: ["C#", "SQL"], emoji: "📦" },
  { name: "Weather Dashboard", desc: "JavaScript dashboard consuming a public weather API with charts and forecasts.", tags: ["JavaScript", "API"], emoji: "🌤️" },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title={"Selected |projects"} subtitle="A few things I've designed, built, and shipped during my studies.">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article key={p.name} className="group glass rounded-3xl p-6 hover:shadow-glow hover:-translate-y-1 transition animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="h-44 rounded-2xl bg-gradient-primary relative overflow-hidden mb-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.25),transparent)]" />
              <div className="absolute inset-0 grid place-items-center text-7xl group-hover:scale-110 transition">{p.emoji}</div>
            </div>
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full glass text-muted-foreground">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
