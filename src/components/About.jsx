"use client";

import { motion } from "framer-motion";
import SkillBar from "./Skillbar";
import Tilt from "react-parallax-tilt";


export default function About() {
  return (
    <section
      id="about"
      className="h-screen grid grid-cols-1 mt-[150px] xl:grid-cols-2 items-center px-6 md:px-20"
    >
      {/* About Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur rounded-2xl shadow-xl p-6 flex flex-col xl:flex-row items-center gap-6"
      >

        <img className="bg-white/10 rounded-2xl"
                  src="headshot-web.png"
                  alt="Diff"
                  width={200}
                  height={200}
                />

      <div className=" hidden w-28 h-28 rounded-full bg-gray-300 xl:block"></div>
        {/* About text */}
        <div>
          <h2 id="aboutme" className="text-white text-3xl font-bold mb-2">About Me</h2>
          <p className=" mb-3">
           Hello! My name is Cody McLeod, though most people online know me as “zuuw.” I’m a 23-year-old web developer who began coding in the summer of 2024 and quickly fell in love with the creative and problem-solving side of it. Before diving into the world of code, I worked as an electrical apprentice, gaining hands-on experience in both commercial and industrial environments. That background taught me discipline, attention to detail, and how to think through complex systems—skills I now apply to every project I build. Today, I’m focused on expanding my skills in front-end development, exploring modern tools like Next.js and Tailwind CSS, and creating projects that blend design with functionality.
          </p>
          <ul className=" hidden list-disc list-insid lg:block">
            <li>Gym </li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
      </motion.div>
      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ padding: 30 }}
        className="hidden mt-10 xl:block md:mt-0 space-y-6"
      >
        <SkillBar skill="Vanilla (HTML/CSS/JAVASCRIPT)" level={90} />
        <SkillBar skill="Next.js" level={60} />
        <SkillBar skill="TailwindCSS" level={85} />
        <SkillBar skill="TypeScript" level={30} />
        <SkillBar skill="Webflow" level={70} />
      </motion.div>
    </section>
  );
}
