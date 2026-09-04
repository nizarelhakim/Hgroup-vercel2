import { motion } from "framer-motion";
import { values } from "../../data/content";
import { fadeUp } from "../../utils/motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 px-6 md:px-20 bg-white">
      <motion.div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto" {...fadeUp()}>
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-3">About Us</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-navy-900">
            Built on Heritage. Driven by Excellence.
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Founded in 1999 by civil engineer Majd Hakim and architect Samir Hakim, H-Group SARL is a family-rooted firm with a legacy of over 30 years in premium construction and interior delivery.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            From ground-up developments to high-end interior transformations, our approach is built on trust, craftsmanship, and a commitment to enduring design. We pride ourselves on shaping timeless spaces that reflect both innovation and integrity.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Today, H-Group continues to carry forward a tradition of precision and care—delivering projects that feel personal, purposeful, and distinctly bespoke.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
            {values.map((v) => (
              <div key={v.title} className="text-center md:text-left">
                <p className="font-serif font-bold text-navy-900 text-lg">{v.title}</p>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2">
          <img
            src="/images/about-image.png"
            alt="About H-Group SARL"
            loading="lazy"
            className="w-full rounded-2xl shadow-soft"
          />
        </div>
      </motion.div>
    </section>
  );
}
