import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolio } from "../../data/content";

export default function Portfolio() {
  const [active, setActive] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openProject = (i) => {
    if (active === i) {
      setActive(null);
    } else {
      setActive(i);
      setImageIndex(0);
    }
  };

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
            const hasMultiple = p.images.length > 1;
            return (
              <div key={p.title} className="border-b border-ink-950/10">
                <button
                  onClick={() => openProject(i)}
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
                      <div className="relative w-full max-h-[75vh] flex items-center justify-center bg-ink-950/5 rounded-sm mb-6">
                        <img
                          src={p.images[imageIndex]}
                          alt={`${p.title} ${imageIndex + 1}`}
                          loading="lazy"
                          className="w-full max-h-[75vh] object-contain"
                        />

                        {hasMultiple && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setImageIndex((prev) => (prev - 1 + p.images.length) % p.images.length);
                              }}
                              aria-label="Previous image"
                              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-bone-50/90 hover:bg-bone-50 text-ink-950 shadow-md transition-colors"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setImageIndex((prev) => (prev + 1) % p.images.length);
                              }}
                              aria-label="Next image"
                              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-bone-50/90 hover:bg-bone-50 text-ink-950 shadow-md transition-colors"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                            <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-ink-950/80 text-bone-50 text-xs font-medium tracking-wide">
                              {imageIndex + 1} / {p.images.length}
                            </span>
                          </>
                        )}
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
