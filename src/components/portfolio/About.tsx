import { Section } from "./Section";
import aboutImg from "@/assets/about-me.jpg.asset.json";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={"Get to |know me"}
      subtitle="A glimpse into who I am and what inspires my creative work."
    >
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative animate-fade-up flex justify-center lg:justify-start">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-primary rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-70 transition" />
            <div className="relative glass rounded-[2rem] p-3 shadow-glow">
              <img
                src={aboutImg.url}
                alt="Jhe-anne portrait"
                className="w-full max-w-md h-[28rem] sm:h-[34rem] object-cover rounded-[1.5rem]"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 text-sm shadow-soft hidden sm:block">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Creative</p>
              <p className="font-semibold">Visual Designer</p>
            </div>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            HI, I'm <span className="text-gradient">Jhe-anne!</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            I am passionate about creating visually appealing and meaningful designs using Canva.
            I enjoy transforming ideas into engaging graphics, presentations, and digital content
            that effectively communicate messages. With a strong interest in art, design, and
            technology, I continuously explore new techniques and trends to enhance my skills and
            create impactful visual experiences.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass rounded-2xl p-4">
              <p className="text-xs text-muted-foreground uppercase">Focus</p>
              <p className="font-semibold mt-1">Canva & Visual Design</p>
            </div>
            <div className="glass rounded-2xl p-4">
              <p className="text-xs text-muted-foreground uppercase">Location</p>
              <p className="font-semibold mt-1">Panabo City, Philippines</p>
            </div>
            <div className="glass rounded-2xl p-4">
              <p className="text-xs text-muted-foreground uppercase">Interests</p>
              <p className="font-semibold mt-1">Art, Design & Tech</p>
            </div>
            <div className="glass rounded-2xl p-4">
              <p className="text-xs text-muted-foreground uppercase">Availability</p>
              <p className="font-semibold mt-1">Open to projects</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
