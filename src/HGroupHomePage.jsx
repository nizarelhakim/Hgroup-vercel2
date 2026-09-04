import { useEffect, useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Printer,
  ArrowUp,
  Building2,
  HardHat,
  Layers,
  Hammer,
} from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const expertise = [
  {
    title: "Development",
    desc: "Feasibility, planning, approvals, and end-to-end delivery.",
    img: "/images/development.jpg",
    icon: Building2,
  },
  {
    title: "Construction",
    desc: "Robust project execution with safety and performance standards.",
    img: "/images/construction.png",
    icon: HardHat,
  },
  {
    title: "Interior Fit-Out",
    desc: "Tailored finishes with spatial harmony and technology integration.",
    img: "/images/fitout.png",
    icon: Layers,
  },
  {
    title: "Joinery & Finishes",
    desc: "Custom cabinetry and in-house craftsmanship.",
    img: "/images/joinery.png",
    icon: Hammer,
  },
];

const portfolio = [
  { src: "/images/img2.jpg", title: "Urban Loft Interior" },
  { src: "/images/img3.jpg", title: "Modern Escape" },
  { src: "/images/img1.jpg", title: "Residential Luxury" },
  { src: "/images/YGWO5492.JPG", title: "AUB Comic Center" },
  { src: "/images/SLDP6569.JPG", title: "Residential Luxury" },
  { src: "/images/t4.jpg", title: "Award Winning Office" },
];

const values = [
  { title: "Trust", desc: "Relationships built on transparency and follow-through." },
  { title: "Craftsmanship", desc: "Meticulous execution, from structure to finish." },
  { title: "Enduring Design", desc: "Timeless spaces made to outlast trends." },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay },
  };
}

export default function HGroupHomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 scroll-smooth scroll-pt-[220px]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur text-white shadow-sm px-6 md:px-20 py-4 flex justify-between items-center">
        <a href="#top" className="flex items-center gap-2 text-xl font-serif font-bold tracking-wide">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-navy-950 text-base">H</span>
          H-Group SARL
        </a>

        <nav className="hidden md:flex items-center gap-8 font-medium">
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
            href="https://www.instagram.com/yourhandle"
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
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden sticky top-[64px] z-40 bg-navy-900 text-white overflow-hidden shadow-lg"
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
                href="https://www.instagram.com/yourhandle"
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

      {/* Hero */}
      <div id="top" className="relative w-full h-[92vh] min-h-[560px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/hero.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/60 to-navy-950/90 pointer-events-none" />
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
            Comprehensive development, construction, and interior solutions since 1999.
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
      </div>

      {/* About */}
      <section id="about" className="scroll-mt-28 py-20 px-6 md:px-20 bg-white">
        <motion.div className="flex flex-col md:flex-row items-center gap-12" {...fadeUp()}>
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-3">About Us</p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-navy-900">
              Built on Heritage. Driven by Excellence.
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Founded in 1999 by civil engineer Majd Hakim and architect Samir Hakim, H-Group SARL is a family-rooted firm with a legacy of over 30 years in premium construction and interior delivery.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              From ground-up developments to high-end interior transformations, our approach is built on trust, craftsmanship, and a commitment to enduring design. We pride ourselves on shaping timeless spaces that reflect both innovation and integrity.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Today, H-Group continues to carry forward a tradition of precision and care—delivering projects that feel personal, purposeful, and distinctly bespoke.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
              {values.map((v) => (
                <div key={v.title} className="text-center md:text-left">
                  <p className="font-serif font-bold text-navy-900 text-lg">{v.title}</p>
                  <p className="text-sm text-gray-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="/images/about-image.png"
              alt="About H-Group SARL"
              loading="lazy"
              className="w-full rounded-2xl shadow-soft"
            />
          </div>
        </motion.div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="scroll-mt-28 bg-gray-50 py-20 px-6 md:px-20">
        <motion.div className="text-center mb-12" {...fadeUp()}>
          <p className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">Our Expertise</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From planning to execution, we master the full spectrum of real estate delivery.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {expertise.map((item, idx) => (
            <motion.div key={item.title} {...fadeUp(idx * 0.1)}>
              <Card className="overflow-hidden">
                <div className="relative">
                  <img src={item.img} alt={item.title} loading="lazy" className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy-900/90 text-gold-400">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-xl font-serif font-semibold mb-2 text-navy-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="scroll-mt-28 py-20 px-6 md:px-20 bg-white">
        <motion.div className="text-center mb-12" {...fadeUp()}>
          <p className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-3">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">Portfolio Highlights</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A curated selection of our most distinctive projects.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolio.map((p, i) => (
            <motion.div
              key={i}
              {...fadeUp((i % 3) * 0.1)}
              className="group relative rounded-2xl overflow-hidden shadow-soft cursor-pointer"
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white text-lg font-serif font-semibold">{p.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-28 bg-navy-900 text-white py-20 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div {...fadeUp()}>
            <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-3">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Connect with Us</h2>

            <ul className="space-y-5 text-gray-200">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-gold-400 shrink-0" />
                <span>
                  <a href="tel:+9611800640" className="hover:text-gold-400 transition-colors">+961 (01) 800 640</a>
                  {" "}&mdash;{" "}
                  <a href="tel:+9613366253" className="hover:text-gold-400 transition-colors">+961 (03) 366 253</a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-gold-400 shrink-0" />
                <span>Raouche, Australia St., Saad Bldg &mdash; P.O.Box: 6907</span>
              </li>
              <li className="flex items-start gap-3">
                <Printer className="w-5 h-5 mt-1 text-gold-400 shrink-0" />
                <span>+961 (01) 787 190</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-gold-400 shrink-0" />
                <a href="mailto:info@hgroup-lb.com" className="hover:text-gold-400 transition-colors">info@hgroup-lb.com</a>
              </li>
            </ul>
          </motion.div>

          <motion.form
            action="https://formspree.io/f/meogqzpa"
            method="POST"
            className="grid grid-cols-1 gap-4"
            {...fadeUp(0.15)}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-3 rounded-lg bg-white/95 text-navy-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-white/95 text-navy-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold-500"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="p-3 rounded-lg bg-white/95 text-navy-900 placeholder-gray-500 h-32 focus:outline-none focus:ring-2 focus:ring-gold-500"
              required
            ></textarea>
            <Button type="submit" variant="primary" className="w-full py-3 text-lg">
              Send Message
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="bg-gray-50 text-gray-600 py-10 px-6 md:px-20 text-sm">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-base font-semibold mb-3 text-navy-900">Privacy Policy</h3>
          <p className="mb-2">
            We respect your privacy. Any personal information shared through this website will be treated with confidentiality.
            We do not sell or share your data with third parties unless required by law.
          </p>
          <p>
            By using our website, you agree to our privacy practices. For questions, contact us at{" "}
            <a href="mailto:info@hgroup-lb.com" className="underline hover:text-navy-900">info@hgroup-lb.com</a>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 text-gray-300">
        <div className="max-w-6xl mx-auto px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-serif font-bold text-lg mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-navy-950 text-sm">H</span>
              H-Group SARL
            </div>
            <p className="text-sm text-gray-400">
              Family-rooted development, construction, and interior fit-out firm delivering premium projects since 1999.
            </p>
          </div>

          <div>
            <p className="text-white font-semibold mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold-400 transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold mb-3">Follow Us</p>
            <a
              href="https://www.instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-gold-400 transition-colors"
            >
              <Instagram className="w-5 h-5" /> Instagram
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 text-center text-xs text-gray-500 py-4">
          &copy; {new Date().getFullYear()} H-Group SARL. All rights reserved.
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-navy-950 shadow-soft hover:bg-gold-600 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
