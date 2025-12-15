import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import ZuuwHeader from "@/components/ZuuwHeader";
import NavBar from "@/components/NavBar"; // NEW IMPORT

import projects from "@/data/projects";

// Utility component for consistent section padding/alignment
const PageLayout = ({ children, className = "" }) => (
    <div className={`max-w-7xl w-full mx-auto px-6 lg:px-12 py-20 ${className}`}>
        {children}
    </div>
)

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scroll-snap-container">
      <NavBar /> {/* NEW: Sticky Navigation */}
      
      {/* HOME */}
      <section id="home" className="page pt-16"> 
        <ZuuwHeader />
      </section>
      
      {/* ABOUT ME */}
      <section id="aboutme" className="page pt-16">
        <PageLayout>
            <About />
        </PageLayout>
      </section>
      
      {/* PROJECTS */}
      <section id="projects" className="page pt-16">
        <PageLayout className="flex flex-col items-center">
            <h2 className="text-4xl font-extrabold mb-10 text-white border-b-4 border-blue-500 pb-2">Selected Projects</h2>
            <div className="flex gap-8 overflow-x-auto no-scrollbar py-4 px-4"> 
                {/* Scrollable list of cards */}
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>
        </PageLayout>
      </section>
      
      {/* CONTACT */}
      <section id="contact" className="page pt-16">
        <ContactForm />
      </section>
    </div>
  );
}