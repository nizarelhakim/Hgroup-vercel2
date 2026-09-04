import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { fadeUp } from "../../utils/motion";

export default function Cta() {
  return (
    <section className="relative bg-gray-50 py-20 px-6 md:px-20 overflow-hidden">
      <motion.div
        className="relative max-w-4xl mx-auto text-center bg-navy-900 rounded-3xl px-8 py-16 shadow-soft"
        {...fadeUp()}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          Have a project in mind?
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
          Let's talk about how H-Group can bring your development, build, or fit-out to life.
        </p>
        <a href="#contact">
          <Button variant="primary" className="px-8 py-3 text-lg">
            Start the Conversation
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
