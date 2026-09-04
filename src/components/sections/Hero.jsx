import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { expertise } from "../../data/content";

export default function Hero() {
  return (
    <div id="top">
      <div
        className="relative w-full h-[92vh] min-h-[560px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/55 to-navy-950/95 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-3xl text-center px-6"
        >
          <p className="text-gold-400 tracking-[0.3em] uppercase text-sm mb-4">Since 1999</p>
          <h1 className="text-white text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Building Tomorrow, Today
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8">
            Comprehensive development, construction, and interior solutions for Beirut's most distinctive addresses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#portfolio">
              <Button variant="primary" className="px-8 py-3 text-lg w-full sm:w-auto">
                Explore Our Work
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="px-8 py-3 text-lg w-full sm:w-auto">
                Get in Touch
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </div>

      <div className="bg-navy-950 border-y border-white/10 py-3 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...expertise, ...expertise, ...expertise].map((item, i) => (
            <span key={i} className="flex items-center text-sm tracking-widest uppercase text-gray-400 px-8">
              {item.title}
              <span className="text-gold-500 ml-8">&bull;</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
