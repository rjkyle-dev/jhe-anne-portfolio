import { Section } from "./Section";

const groups = [
  { title: "Front-End", icon: "🎨", items: [["HTML", 92], ["CSS", 88], ["JavaScript", 80], ["Bootstrap", 85], ["Tailwind CSS", 82]] },
  { title: "Back-End", icon: "⚙️", items: [["PHP", 78], ["Node.js", 70], ["MySQL", 82]] },
  { title: "Programming", icon: "💻", items: [["Java", 80], ["Python", 78], ["C#", 72]] },
  { title: "Tools", icon: "🧰", items: [["MS Word", 95], ["Canva", 90], ["Git", 75], ["Figma", 70]] },
] as const;

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title={"What I |bring to the table"} subtitle="Technical proficiencies developed through coursework, projects, and self-study.">
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g, idx) => (
          <div key={g.title} className="glass rounded-3xl p-7 hover:shadow-glow transition animate-fade-up" style={{ animationDelay: `${idx * 0.08}s` }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center text-2xl shadow-glow">{g.icon}</div>
              <h3 className="text-xl font-bold">{g.title}</h3>
            </div>
            <div className="space-y-4">
              {g.items.map(([name, pct]) => (
                <div key={name as string}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{name}</span>
                    <span className="text-muted-foreground">{pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full bg-gradient-primary rounded-full transition-all duration-1000" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
