import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { expertise } from "../../data/content";

export default function Expertise() {
  const [active, setActive] = useState(0);

  return (
    <section id="expertise" className="scroll-mt-20 bg-ink-950 text-bone-50 py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-8">
          <h2 className="font-display font-extrabold text-4xl md:text-6xl">Our Expertise</h2>
          <p className="hidden md:block text-ink-600 text-sm max-w-xs text-right">
            From planning to execution, we master the full spectrum of real estate delivery.
          </p>
        </div>

        <div>
          {expertise.map((item, i) => {
            const isActive = active === i;
            return (
              <div key={item.title} className="border-b border-white/10">
                <button
                  onClick={() => setActive(isActive ? -1 : i)}
                  className="w-full flex items-center gap-6 py-6 md:py-8 text-left group"
                >
                  <span className="font-display font-bold text-ink-600 text-sm md:text-base w-8 shrink-0">
                    {item.index}
                  </span>
                  <span
                    className={`flex-1 font-display font-extrabold text-2xl md:text-4xl transition-colors ${
                      isActive ? "text-clay-500" : "group-hover:text-clay-500"
                    }`}
                  >
                    {item.title}
                  </span>
                  <Plus
                    className={`w-6 h-6 shrink-0 transition-transform duration-300 ${isActive ? "rotate-45" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col md:flex-row gap-6 pb-8">
                        <img
                          src={item.img}
                          alt={item.title}
                          loading="lazy"
                          className="w-full md:w-64 h-40 object-cover rounded-sm"
                        />
                        <p className="text-ink-600 text-base md:text-lg max-w-md self-center">{item.desc}</p>
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
