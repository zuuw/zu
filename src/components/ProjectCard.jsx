import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ title, imageSrc, href = "#" }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
      <div className="
        w-[280px] h-[350px] 
        rounded-[3rem] /* Extra large radius for modern look */
        bg-gray-800/60 
        border border-white/10 
        shadow-xl 
        p-6 
        flex flex-col items-center justify-between 
        transition-all duration-500 
        group-hover:scale-[1.02] 
        group-hover:bg-gray-800/80
        group-hover:shadow-blue-500/30
      ">
        {/* Image Wrapper */}
        <div className="w-full h-[200px] rounded-t-3xl rounded-b-lg overflow-hidden border border-white/20">
          
          <Image
            src={imageSrc}
            alt={title}
            width={300}
            height={200}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Title & Icon */}
        <div className="flex justify-between items-center w-full mt-4">
            <h3 className="text-white text-xl font-bold">
            {title}
            </h3>
            <ArrowUpRight className="w-6 h-6 text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"/>
        </div>
      </div>
    </Link>
  );
}