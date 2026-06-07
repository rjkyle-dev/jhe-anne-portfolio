import { Section } from "./Section";
import { Palette, Layers, Sparkles, Layout, Clapperboard, FileText, Table } from "lucide-react";

const designSkills = [
  { name: "Graphic Design", icon: Palette, description: "Crafting compelling visual identities and brand assets." },
  { name: "Poster Design", icon: Layers, description: "Designing eye-catching promotional and event materials." },
  { name: "Visual Content Creation", icon: Sparkles, description: "Producing engaging graphics for digital and social platforms." },
];

const softwareTools = [
  { name: "Canva", icon: Layout, description: "Designing layouts, social posts, and marketing visuals." },
  { name: "CapCut", icon: Clapperboard, description: "Editing and producing short-form video content." },
  { name: "Microsoft Word", icon: FileText, description: "Creating polished documents, reports, and proposals." },
  { name: "Microsoft Excel", icon: Table, description: "Organizing data, budgets, and analytics with precision." },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="My |Expertise" subtitle="A blend of creative design skills and essential software tools for professional digital content creation.">
      <div className="space-y-16">
        {/* Design Skills */}
        <div>
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
              <Palette className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold">Design Skills</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {designSkills.map((skill, i) => (
              <div
                key={skill.name}
                className="group glass rounded-3xl p-7 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center mb-5 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-bold mb-2">{skill.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                <div className="mt-5 h-1 w-12 rounded-full bg-gradient-primary group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Software Tools */}
        <div>
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
              <Layout className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold">Software Tools</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softwareTools.map((tool, i) => (
              <div
                key={tool.name}
                className="group glass rounded-3xl p-7 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${(i + 3) * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center mb-5 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <tool.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-bold mb-2">{tool.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                <div className="mt-5 h-1 w-12 rounded-full bg-gradient-primary group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
