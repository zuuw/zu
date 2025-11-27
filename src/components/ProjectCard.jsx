import React from "react";
import Image from "next/image";
import Link from "next/link";

// A reusable ProjectCard component
// - Fixed size so images of different dimensions won't stretch the layout
// - Clickable to navigate to a project page
// - Style matches your soft-glass, rounded, semi-transparent design

export default function ProjectCard({ title, imageSrc, href = "#" }) {
  return (
    <Link href={href} className="group">
      <div className="w-[260px] h-[320px] rounded-3xl bg-white/10 backdrop-blur-md shadow-lg p-5 flex flex-col items-center justify-between transition-transform duration-300 group-hover:scale-105">
        {/* Image Wrapper */}
        <div className="w-full h-[200px] rounded-2xl overflow-hidden bg-white/20 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={title}
            width={300}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Title */}
        <h3 className="text-white text-xl font-semibold text-center mt-3">
          {title}
        </h3>
      </div>
    </Link>
  );
}

/*
USAGE EXAMPLE IN A LOOP CAROUSEL (e.g., inside a parent component):

const projects = [
  {
    title: "Portfolio Website",
    imageSrc: "/projects/portfolio.png",
    href: "/projects/portfolio",
  },
  {
    title: "League Trainer Tool",
    imageSrc: "/projects/league.png",
    href: "/projects/league",
  },
  // Add more projects easily...
];

<div className="flex gap-6 overflow-x-auto no-scrollbar py-10 px-4">
  {projects.map((project, idx) => (
    <ProjectCard key={idx} {...project} />
  ))}
</div>
*/
