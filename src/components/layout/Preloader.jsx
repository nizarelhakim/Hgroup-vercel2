import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const progress = Math.min((now - start) / 900, 1);
      setCount(Math.round(progress * 100));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 200);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-ink-950 flex items-end justify-between px-6 md:px-10 py-8"
        >
          <span className="font-display font-extrabold text-bone-50 text-lg">H-Group</span>
          <span className="font-display font-extrabold text-clay-500 text-lg tabular-nums">{count}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
