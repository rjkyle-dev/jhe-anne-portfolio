import { useState } from "react";
import { Section } from "./Section";
import { Award, GraduationCap, Code2, Sprout, ExternalLink, X } from "lucide-react";
import topcitCert from "@/assets/topcit-certificate.pdf.asset.json";
import pythonCert from "@/assets/python-certificate.pdf.asset.json";
import treeCert from "@/assets/tree-planting-certificate.pdf.asset.json";

type Milestone = {
  year: string;
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  group: string;
  certificateUrl?: string;
};

const items: Milestone[] = [
  {
    year: "2024–2026",
    title: "Dean's Lister",
    category: "Academic Achievement",
    description: "Consistently recognized for academic excellence and outstanding academic performance.",
    icon: GraduationCap,
    group: "Academic Achievement",
  },
  {
    year: "2024",
    title: "TOPCIT Exam Taker (Level 1)",
    category: "Technical Competency Assessment",
    description: "Participated in the Test of Practical Competency in ICT (TOPCIT) to evaluate practical knowledge and skills in Information and Communication Technology.",
    icon: Award,
    group: "Certifications & Assessments",
    certificateUrl: topcitCert.url,
  },
  {
    year: "2025",
    title: "Python Essentials 1",
    category: "Technical Certification — Cisco Networking Academy",
    description: "Completed foundational training in Python programming, covering core concepts, problem-solving techniques, and basic software development principles.",
    icon: Code2,
    group: "Certifications & Assessments",
    certificateUrl: pythonCert.url,
  },
  {
    year: "2026",
    title: "Tree Planting Activity",
    category: "Volunteer Activity",
    description: "Participated in an environmental conservation initiative focused on promoting sustainability and community involvement through tree planting activities.",
    icon: Sprout,
    group: "Community Engagement",
    certificateUrl: treeCert.url,
  },
];

export function Milestones() {
  const [viewing, setViewing] = useState<Milestone | null>(null);

  return (
    <Section id="milestones" eyebrow="Milestones" title={"Achievements &|recognitions"} subtitle="Academic highlights, certifications, and community involvement that shaped my journey.">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/40 to-transparent" />
        <div className="space-y-10">
          {items.map((it, i) => {
            const Icon = it.icon;
            const onRight = i % 2 === 1;
            return (
              <div key={it.title} className="relative grid sm:grid-cols-2 gap-6 items-center animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`pl-12 sm:pl-0 ${onRight ? "sm:order-2 sm:pl-12" : "sm:text-right sm:pr-12"}`}>
                  <div className="glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition group">
                    <div className={`flex items-center gap-3 mb-3 ${onRight ? "" : "sm:justify-end"}`}>
                      <span className="glass inline-flex items-center justify-center w-10 h-10 rounded-xl text-gradient">
                        <Icon className="w-5 h-5" />
                      </span>
                      <p className="text-xs text-gradient font-bold tracking-widest">{it.year}</p>
                    </div>
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground/80">{it.group}</p>
                    <h4 className="text-lg font-bold mt-1">{it.title}</h4>
                    <p className="text-xs text-secondary mt-1">{it.category}</p>
                    <p className="text-sm text-muted-foreground mt-3">{it.description}</p>
                    {it.certificateUrl && (
                      <div className={`mt-4 flex ${onRight ? "" : "sm:justify-end"}`}>
                        <button
                          onClick={() => setViewing(it)}
                          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition"
                        >
                          <ExternalLink className="w-4 h-4" /> View Certificate
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="hidden sm:block" />
                <span className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
              </div>
            );
          })}
        </div>
      </div>

      {viewing && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-up"
          onClick={() => setViewing(null)}
        >
          <div
            className="glass rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
              <div>
                <h3 className="font-bold">{viewing.title}</h3>
                <p className="text-xs text-muted-foreground">{viewing.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={viewing.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 rounded-lg glass hover:bg-white/10 transition inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Open
                </a>
                <button
                  onClick={() => setViewing(null)}
                  aria-label="Close"
                  className="p-2 rounded-lg hover:bg-white/10 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <iframe src={viewing.certificateUrl} title={viewing.title} className="flex-1 w-full bg-white" />
          </div>
        </div>
      )}
    </Section>
  );
}
