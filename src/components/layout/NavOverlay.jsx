import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { navLinks, contact } from "../../data/content";

export default function NavOverlay() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 mix-blend-difference text-bone-50 pointer-events-none">
        <a href="#top" className="font-display font-extrabold text-lg tracking-tight pointer-events-auto">
          H-Group
        </a>
        <button
          onClick={() => setOpen(true)}
          className="font-display font-bold text-sm tracking-wide uppercase pointer-events-auto flex items-center gap-2"
          aria-label="Open menu"
        >
          Menu
          <span className="inline-block w-6 h-px bg-current" />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-ink-950 text-bone-50 flex flex-col justify-between px-6 md:px-10 py-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-display font-extrabold text-lg">H-Group</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="font-display font-bold text-sm tracking-wide uppercase"
              >
                Close
              </button>
            </div>

            <nav className="flex flex-col gap-2 md:gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
                  className="group flex items-baseline gap-4 font-display font-extrabold text-5xl md:text-7xl leading-tight hover:text-clay-500 transition-colors"
                >
                  <span className="text-base md:text-lg text-ink-600 group-hover:text-clay-500 font-sans font-normal">
                    0{i + 1}
                  </span>
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-sm text-ink-600">
              <div>
                <p>{contact.phones[0]}</p>
                <p>{contact.email}</p>
              </div>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-clay-500 transition-colors"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
