import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio, portfolioCategories } from "../../data/content";
import { fadeUp } from "../../utils/motion";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? portfolio : portfolio.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="scroll-mt-24 py-20 px-6 md:px-20 bg-white">
      <motion.div className="text-center mb-10" {...fadeUp()}>
        <p className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-3">Our Work</p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">Portfolio Highlights</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          A curated selection of our most distinctive projects.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {portfolioCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-colors border ${
              filter === cat
                ? "bg-navy-900 text-white border-navy-900"
                : "bg-transparent text-navy-900 border-gray-300 hover:border-navy-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div
              key={p.src}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="group relative rounded-2xl overflow-hidden shadow-soft cursor-pointer"
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-white text-xs tracking-wide uppercase">
                {p.category}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white text-lg font-serif font-semibold">{p.title}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
