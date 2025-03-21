import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="py-20 bg-gray-100">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-semibold">About Me</h2>
      <p className="mt-4">
        Software Engineer at Invincible Ocean. Expertise in React.js, Tailwind, TypeScript, and Three.js, delivering interactive and high-performance web solutions.
      </p>
    </motion.div>
  </section>
);

export default About;
