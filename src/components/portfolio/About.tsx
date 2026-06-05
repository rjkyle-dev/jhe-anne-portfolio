import { Section } from "./Section";

const stats = [
  { label: "Projects", value: 12 },
  { label: "Certificates", value: 18 },
  { label: "Seminars", value: 9 },
  { label: "Awards", value: 5 },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title={"Get to |know me"} subtitle="A glimpse into my background, vision, and what drives me forward.">
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 glass rounded-3xl p-8 animate-fade-up">
          <h3 className="text-2xl font-bold mb-4">Hello! I'm a passionate IT graduate.</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I am an Information Technology graduate passionate about web development, software
            engineering, and digital innovation. I enjoy creating efficient, user-friendly systems
            and continuously expanding my technical skills through projects, seminars, and certifications.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            My goal is to contribute to meaningful technology that empowers people, while growing
            into a well-rounded developer who builds with intention and care.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-4">
              <p className="text-xs text-muted-foreground uppercase">Education</p>
              <p className="font-semibold mt-1">BS Information Technology</p>
            </div>
            <div className="glass rounded-2xl p-4">
              <p className="text-xs text-muted-foreground uppercase">Location</p>
              <p className="font-semibold mt-1">Panabo City, Philippines</p>
            </div>
            <div className="glass rounded-2xl p-4">
              <p className="text-xs text-muted-foreground uppercase">Focus</p>
              <p className="font-semibold mt-1">Web & Software Dev</p>
            </div>
            <div className="glass rounded-2xl p-4">
              <p className="text-xs text-muted-foreground uppercase">Availability</p>
              <p className="font-semibold mt-1">Open to roles</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-3xl p-6 text-center hover:bg-white/10 transition">
              <p className="text-4xl font-bold text-gradient">{s.value}+</p>
              <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
