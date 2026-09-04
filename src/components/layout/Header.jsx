import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu, X } from "lucide-react";
import { navLinks, contact } from "../../data/content";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? scrollTop / max : 0);
      setScrolled(scrollTop > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 text-white transition-colors duration-300 ${
        scrolled ? "bg-navy-950/90 backdrop-blur-md shadow-lg" : "bg-navy-950/60 backdrop-blur-sm"
      }`}
    >
      <div className="px-6 md:px-20 py-4 flex justify-between items-center">
        <a href="#top" className="flex items-center gap-2 text-xl font-serif font-bold tracking-wide">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-navy-950 text-base">H</span>
          H-Group SARL
        </a>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-gray-200 hover:text-gold-400 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold-400 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-200 hover:text-gold-400 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      <div className="h-px w-full bg-white/10">
        <div
          className="h-px bg-gold-500 transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy-950 text-white overflow-hidden shadow-lg"
          >
            <div className="flex flex-col px-6 py-4 gap-4 font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold-400 transition-colors"
              >
                <Instagram className="w-5 h-5" /> Instagram
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
