import { motion } from "framer-motion";
import { expertise } from "../../data/content";

export default function Hero() {
  return (
    <div id="top" className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink-950">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/70" />

      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="font-display font-bold uppercase tracking-[0.3em] text-clay-500 text-xs md:text-sm mb-6"
        >
          Development &middot; Construction &middot; Interior Fit-Out &middot; Since 1999
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-bone-50 text-[13vw] md:text-[8vw] leading-[0.92] tracking-tight max-w-5xl"
        >
          Building
          <br />
          Tomorrow, Today
        </motion.h1>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-10 py-6 text-bone-50/70 text-xs md:text-sm font-medium tracking-wide border-t border-white/10">
        <span>Beirut, Lebanon</span>
        <span className="hidden md:block">Scroll to explore</span>
        <span>{expertise.length} Core Disciplines</span>
      </div>
    </div>
  );
}
