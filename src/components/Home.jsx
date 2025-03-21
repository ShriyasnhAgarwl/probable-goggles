import { motion } from "framer-motion";

const Home = () => (
  <section id="home" className="h-screen flex items-center justify-center bg-gray-800 text-white">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold">Hi, I'm Shriyansh Agarwal</h2>
      <p className="mt-4">Frontend Developer | React & Tailwind Specialist</p>
    </motion.div>
  </section>
);

export default Home;
