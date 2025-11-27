import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import ZuuwHeader from "@/components/ZuuwHeader";

import projects from "@/data/projects";
export default function Home() {
  return (
    <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* your sections */}
      <section id="home" className="page"><ZuuwHeader /></section>
      <section id="aboutme" className="page"><About /></section>
      <section id="projects" className="page flex gap-6 overflow-x-auto no-scrollbar py-10 px-4">
{projects.map((project, idx) => (
<ProjectCard key={idx} {...project} />
))}
</section>
      <section id="contact" className="page"><ContactForm /></section>
    </div>
  );
}
