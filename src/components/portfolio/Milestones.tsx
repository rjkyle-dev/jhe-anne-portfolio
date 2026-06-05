import { Section } from "./Section";

const items = [
  { date: "2024", title: "Dean's Lister", desc: "Recognized for consistent academic excellence across multiple semesters." },
  { date: "2023", title: "IT Competition Finalist", desc: "Participated and placed in a regional IT skills and innovation competition." },
  { date: "2023", title: "Tree Planting Activity", desc: "Volunteered in a community-driven environmental sustainability initiative." },
  { date: "2022", title: "Capstone Project Award", desc: "Earned commendation for a student records management system." },
];

export function Milestones() {
  return (
    <Section id="milestones" eyebrow="Milestones" title={"Achievements &|recognitions"} subtitle="Moments that shaped my journey through college and beyond.">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/40 to-transparent" />
        <div className="space-y-10">
          {items.map((it, i) => (
            <div key={it.title} className={`relative grid sm:grid-cols-2 gap-6 items-center animate-fade-up ${i % 2 ? "" : ""}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`pl-12 sm:pl-0 ${i % 2 ? "sm:order-2 sm:pl-12" : "sm:text-right sm:pr-12"}`}>
                <div className="glass rounded-2xl p-5 hover:shadow-glow transition">
                  <p className="text-xs text-gradient font-bold tracking-widest">{it.date}</p>
                  <h4 className="text-lg font-bold mt-1">{it.title}</h4>
                  <p className="text-sm text-muted-foreground mt-2">{it.desc}</p>
                </div>
              </div>
              <div className="hidden sm:block" />
              <span className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
