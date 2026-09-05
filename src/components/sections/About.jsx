import { motion } from "framer-motion";
import { values, yearsOfExperience } from "../../data/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-bone-50 py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <p className="font-display font-bold uppercase tracking-[0.2em] text-clay-500 text-xs mb-4">
              About Us
            </p>
            <div className="relative inline-block">
              <span className="font-display font-extrabold text-ink-950 text-8xl md:text-9xl leading-none">
                {yearsOfExperience}
              </span>
              <span className="absolute -right-6 top-2 font-display font-bold text-clay-500 text-2xl">+</span>
            </div>
            <p className="mt-2 text-ink-600 text-sm uppercase tracking-wide">Years shaping Beirut</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-8"
          >
            <h2 className="font-display font-extrabold text-ink-950 text-3xl md:text-5xl leading-tight mb-8">
              Built on heritage.
              <br />
              Driven by excellence.
            </h2>
            <p className="text-lg text-ink-800 mb-4 max-w-xl">
              Founded in 1999 by civil engineer Majd Hakim and architect Samir Hakim, H-Group SARL is a family-rooted firm with a legacy of {yearsOfExperience}+ years in premium construction and interior delivery.
            </p>
            <p className="text-lg text-ink-800 mb-4 max-w-xl">
              From ground-up developments to high-end interior transformations, our approach is built on trust, craftsmanship, and a commitment to enduring design.
            </p>
            <p className="text-lg text-ink-800 mb-12 max-w-xl">
              Today, H-Group continues to carry forward a tradition of precision and care—delivering projects that feel personal, purposeful, and distinctly bespoke.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-ink-950/10 pt-8">
              {values.map((v) => (
                <div key={v.title}>
                  <p className="font-display font-bold text-ink-950 text-lg mb-1">{v.title}</p>
                  <p className="text-sm text-ink-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
