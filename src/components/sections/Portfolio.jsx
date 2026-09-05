import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "../../data/content";

export default function Portfolio() {
  const [active, setActive] = useState(null);

  return (
    <section id="portfolio" className="scroll-mt-20 bg-bone-50 py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-16 border-b border-ink-950/10 pb-8">
          <h2 className="font-display font-extrabold text-ink-950 text-4xl md:text-6xl">Selected Work</h2>
          <p className="hidden md:block text-ink-600 text-sm max-w-xs text-right">
            A curated index of our most distinctive projects.
          </p>
        </div>

        <div>
          {portfolio.map((p, i) => {
            const isOpen = active === i;
            return (
              <div key={p.src} className="border-b border-ink-950/10">
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 md:gap-8 py-6 md:py-8 text-left group"
                >
                  <span className="font-display font-bold text-ink-600 text-sm w-8 shrink-0">{p.index}</span>
                  <span
                    className={`flex-1 font-display font-extrabold text-xl md:text-3xl transition-colors ${
                      isOpen ? "text-clay-500" : "text-ink-950 group-hover:text-clay-500"
                    }`}
                  >
                    {p.title}
                  </span>
                  <span className="hidden sm:block text-xs uppercase tracking-wide text-ink-600 shrink-0">
                    {p.category}
                  </span>
                  <ArrowUpRight
                    className={`w-5 h-5 shrink-0 text-ink-950 transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-clay-500" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="w-full max-h-[75vh] flex items-center justify-center bg-ink-950/5 rounded-sm mb-6">
                        <img
                          src={p.src}
                          alt={p.title}
                          loading="lazy"
                          className="w-full max-h-[75vh] object-contain"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
