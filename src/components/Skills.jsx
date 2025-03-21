import { motion } from "framer-motion";

const skills = ["React.js", "Tailwind CSS", "TypeScript", "Redux", "Firebase", "Three.js", "Docker", "Node.js", "MongoDB", "GitHub"];

const Skills = () => (
  <section id="skills" className="py-20 bg-white">
    <motion.div
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-semibold">Skills</h2>
      <div className="mt-6 flex flex-wrap gap-4">
        {skills.map(skill => (
          <span key={skill} className="bg-blue-600 text-white px-3 py-1 rounded">{skill}</span>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills;
