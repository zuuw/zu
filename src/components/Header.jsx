"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Header() {
  return (
    <div className="z-[-1]">
      {/* z1-logo (Top Right) */}
      <motion.div
        initial={{ x: "100%", y: "-100%", opacity: 0 }}
        animate={{ x: 150, y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute"
      >
        <Image
          src="z1-logo.svg"
          alt="Logo Part 1"
          width={400}
          height={400}
          priority
        />
      </motion.div>

      {/* z2-logo (Bottom Left) */}
      <motion.div
        initial={{ x: "-100%", y: "100%", opacity: 0 }}
        animate={{ x: 150, y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute"
      >
        <Image
          src="z2-logo.svg"
          alt="Logo Part 2"
          width={400}
          height={400}
          priority
        />
      </motion.div>
    </div>
  );
}
