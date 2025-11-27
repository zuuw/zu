import { motion } from "framer-motion";

export default function SkillBar({ skill, level }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="bg-white h-3 rounded-full"
        />
      </div>
    </div>
  );
}
