'use client'

import BackButton from "@/components/BackButton";
import projects from "@/data/projects";
import { useParams } from "next/navigation";
import { FaGithub } from "react-icons/fa";

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <>
    <BackButton className="ml-[20vh] mt-[20vh]"/>
    <div className="max-w-4xl mx-auto p-6 mt-[20vh]">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      {/* Carousel */}
      <div className="flex overflow-x-scroll space-x-4 mb-6">
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${project.title} screenshot ${idx + 1}`}
            className="h-64 w-auto rounded-lg shadow-lg flex-shrink-0"
          />
        ))}
      </div>

      {/* Description */}
      <p className="mb-4">{project.description}</p>

      {/* GitHub link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        <FaGithub className="mr-2" /> View on GitHub
      </a>
    </div>
    </>
  );
}
