import { motion } from "framer-motion";

const Contact = () => (
  <section id="contact" className="py-20 bg-white">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-semibold">Contact</h2>
      <p className="mt-4">📧 <a href="mailto:shriyanshagar9026@gmail.com">shriyanshagar9026@gmail.com</a></p>
      <p>📞 7652093392</p>
    </motion.div>
  </section>
);

export default Contact;
