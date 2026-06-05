import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Milestones } from "@/components/portfolio/Milestones";
import { Certificates } from "@/components/portfolio/Certificates";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jheanne Selle — IT Graduate & Aspiring Web Developer" },
      { name: "description", content: "Portfolio of Jheanne Selle, an Information Technology graduate and aspiring web developer based in Panabo City." },
      { property: "og:title", content: "Jheanne Selle — IT Graduate & Aspiring Web Developer" },
      { property: "og:description", content: "Explore projects, skills, certificates, and milestones of an IT graduate passionate about web development." },
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
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
