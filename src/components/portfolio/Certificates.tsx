import { useState } from "react";
import { Section } from "./Section";

const certs = [
  { title: "Web Development Bootcamp", issuer: "Online Academy", color: "from-violet-500 to-fuchsia-500" },
  { title: "JavaScript Essentials", issuer: "Cisco NetAcad", color: "from-cyan-500 to-blue-500" },
  { title: "Python for Everybody", issuer: "Coursera", color: "from-amber-500 to-orange-500" },
  { title: "Cybersecurity Seminar", issuer: "IT Society", color: "from-emerald-500 to-teal-500" },
  { title: "UI/UX Workshop", issuer: "Design Hub", color: "from-pink-500 to-rose-500" },
  { title: "Cloud Fundamentals", issuer: "AWS Educate", color: "from-indigo-500 to-purple-500" },
];

export function Certificates() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section id="certificates" eyebrow="Certificates" title={"Seminars &|certifications"} subtitle="Continuous learning through courses, workshops, and industry seminars.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((c, i) => (
          <button key={c.title} onClick={() => setOpen(i)} className="group glass rounded-3xl overflow-hidden text-left hover:shadow-glow transition animate-fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
            <div className={`h-40 bg-gradient-to-br ${c.color} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent)]" />
              <div className="absolute bottom-3 right-3 text-white/90 text-4xl">🏅</div>
            </div>
            <div className="p-5">
              <h4 className="font-bold">{c.title}</h4>
              <p className="text-sm text-muted-foreground mt-1">{c.issuer}</p>
              <span className="inline-block mt-3 text-sm text-gradient font-medium">View certificate →</span>
            </div>
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-background/80 backdrop-blur-lg animate-fade-up" onClick={() => setOpen(null)}>
          <div className="glass rounded-3xl max-w-lg w-full p-6 shadow-glow" onClick={(e) => e.stopPropagation()}>
            <div className={`h-56 rounded-2xl bg-gradient-to-br ${certs[open].color} grid place-items-center text-6xl`}>🏅</div>
            <h3 className="text-2xl font-bold mt-5">{certs[open].title}</h3>
            <p className="text-muted-foreground mt-1">Issued by {certs[open].issuer}</p>
            <button onClick={() => setOpen(null)} className="mt-5 bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-xl font-medium shadow-glow">Close</button>
          </div>
        </div>
      )}
    </Section>
  );
}
