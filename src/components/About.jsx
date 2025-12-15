"use client";

import { motion } from "framer-motion";
import SkillBar from "./Skillbar"; 
import { Briefcase, Code, User } from 'lucide-react'; // Example icons

export default function About() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-center w-full">
      {/* About Card (Col 1 & 2) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="xl:col-span-2 bg-gray-900/40 border border-white/10 rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-start gap-8 backdrop-blur-sm"
      >
        <div className="flex-shrink-0">
          <img 
            className="rounded-full object-cover w-32 h-32 md:w-48 md:h-48 border-4 border-blue-500/50 shadow-lg"
            src="headshot-web.png" // Ensure this image path is correct
            alt="Cody McLeod Headshot"
            width={192}
            height={192}
          />
        </div>

        {/* About text */}
        <div>
          <h2 className="text-4xl font-extrabold text-white mb-4 flex items-center gap-3">
            <User className="w-8 h-8 text-blue-400" />
            About Me
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            Hello! My name is **Cody McLeod**, known online as "zuuw." I'm a 23-year-old web developer. My journey began in the summer of 2024, where I quickly transitioned from an electrical apprentice—a background that instilled discipline and systematic problem-solving—to a passion for creative web development.
          </p>
          <p className="mb-6 text-gray-300 leading-relaxed">
            I focus on **front-end development** with modern tools like Next.js, Tailwind CSS, and TypeScript, blending aesthetic design with robust functionality. I am always keen to tackle new challenges and expand my full-stack capabilities.
          </p>
          
          <h3 className="text-2xl font-semibold text-white mt-6 mb-3">Interests</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-gray-400">
            <li className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-blue-500" /> Discipline (from trades)</li>
            <li className="flex items-center gap-2"><Code className="w-4 h-4 text-blue-500" /> Building & Tinkering</li>
            <li className="flex items-center gap-2">🏋️ Gym</li>
            <li className="flex items-center gap-2">🎮 Gaming</li>
          </ul>
        </div>
      </motion.div>
      
      {/* Skills (Col 3) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="xl:col-span-1 bg-gray-900/40 border border-white/10 rounded-3xl shadow-2xl p-8 space-y-6 backdrop-blur-sm"
      >
        <h2 className="text-3xl font-bold text-white mb-6">Core Skills</h2>
        <SkillBar skill="Vanilla (HTML/CSS/JS)" level={90} color="blue" />
        <SkillBar skill="Next.js / React" level={65} color="cyan" />
        <SkillBar skill="Tailwind CSS" level={85} color="green" />
        <SkillBar skill="TypeScript" level={30} color="orange" />
        <SkillBar skill="Webflow" level={70} color="red" />
      </motion.div>
    </div>
  );
}