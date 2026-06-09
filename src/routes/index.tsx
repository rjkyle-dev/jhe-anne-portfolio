import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Milestones } from "@/components/portfolio/Milestones";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jheanne Selle — IT Graduate & Graphic Design Portfolio" },
      { name: "description", content: "Portfolio of Jheanne Selle featuring graphic design work, recipe marketing visuals, projects, skills, and milestones." },
      { property: "og:title", content: "Jheanne Selle — IT Graduate & Graphic Design Portfolio" },
      { property: "og:description", content: "Explore Jheanne Selle's portfolio featuring recipe graphic design work for KusinaUniversity, skills, and milestones." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Milestones />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

