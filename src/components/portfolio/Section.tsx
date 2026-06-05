import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, subtitle, children }: { id: string; eyebrow: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-14 animate-fade-up">
          <span className="glass inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-widest text-muted-foreground mb-4">{eyebrow}</span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            {title.split("|").map((p, i) => i === 1 ? <span key={i} className="text-gradient">{p}</span> : <span key={i}>{p}</span>)}
          </h2>
          {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto mt-4">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
