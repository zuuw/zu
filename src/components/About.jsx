"use client";

import { motion } from "framer-motion";
import SkillBar from "./Skillbar";
import CarouselApps from "./CarouselApps";


export default function About() {
  return (
    <section
      id="about"
      className="h-screen grid md:grid-cols-2 items-center px-6 md:px-20"
    >
      {/* About Card */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-center gap-6"
      >
        {/* Placeholder photo */}

        <img className="bg-white/10 rounded-2xl top-"
                  src="photoofme.png"
                  alt="Diff"
                  width={200}
                  height={200}
                />

      <div className="w-28 h-28 rounded-full bg-gray-300 sm:hidden"></div>
        {/* About text */}
        <div>
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-gray-300 mb-3">
            Hello, I'm Cody Mcleod aka "zuuw" on the internet. I am a 23 year old who has been coding since the summer of '24. Before I was coding I worked
            as an electrical apprentice doing commercial and industrial work.
          </p>
          <ul className="list-disc list-inside text-gray-300">
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
        className="mt-10 md:mt-0 space-y-6 text-white"
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
