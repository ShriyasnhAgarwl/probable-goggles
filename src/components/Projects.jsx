import { motion } from "framer-motion";

const projects = [
  {
    title: "Invincible Metalabs",
    desc: "Integrated Three.js for AR and voice cloning, increasing user engagement by 40%.",
  },
  {
    title: "InvincibleMeta.ai",
    desc: "Built admin dashboards with TypeScript and Tailwind, achieving a 96% Lighthouse score.",
  },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-100">
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-semibold">Projects</h2>
      {projects.map(project => (
        <div key={project.title} className="mt-6">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p>{project.desc}</p>
        </div>
      ))}
    </motion.div>
  </section>
);

export default Projects;
