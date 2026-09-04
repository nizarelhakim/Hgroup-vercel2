import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "../../data/content";

export default function Portfolio() {
  const [hovered, setHovered] = useState(null);
  const [tapped, setTapped] = useState(null);
  const [finePointer, setFinePointer] = useState(true);
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  useEffect(() => {
    setFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
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

        <div
          ref={containerRef}
          onMouseMove={finePointer ? handleMove : undefined}
          className="relative"
        >
          {portfolio.map((p, i) => {
            const isOpen = finePointer ? hovered === i : tapped === i;
            return (
              <div key={p.src} className="border-b border-ink-950/10">
                <button
                  onMouseEnter={() => finePointer && setHovered(i)}
                  onMouseLeave={() => finePointer && setHovered(null)}
                  onClick={() => !finePointer && setTapped(tapped === i ? null : i)}
                  className="w-full flex items-center gap-4 md:gap-8 py-6 md:py-8 text-left group"
                >
                  <span className="font-display font-bold text-ink-600 text-sm w-8 shrink-0">{p.index}</span>
                  <span className="flex-1 font-display font-extrabold text-xl md:text-3xl text-ink-950 group-hover:text-clay-500 transition-colors">
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

                {!finePointer && (
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <img
                          src={p.src}
                          alt={p.title}
                          loading="lazy"
                          className="w-full h-56 object-cover rounded-sm mb-6"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}

          {finePointer && (
            <motion.div
              style={{ left: springX, top: springY }}
              className="pointer-events-none absolute z-10 w-64 h-44 -translate-x-1/2 -translate-y-1/2 rounded-sm overflow-hidden shadow-2xl"
              animate={{ opacity: hovered !== null ? 1 : 0, scale: hovered !== null ? 1 : 0.85 }}
              transition={{ duration: 0.25 }}
            >
              {hovered !== null && (
                <img src={portfolio[hovered].src} alt="" className="w-full h-full object-cover" />
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
