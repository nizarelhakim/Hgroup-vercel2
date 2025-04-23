import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";

export default function HGroupHomePage() {
  return (
    <div className="bg-gray-100 text-gray-900 scroll-smooth scroll-pt-[220px]">
      <header className="sticky top-0 z-50 bg-slate-800 text-white shadow-sm px-6 md:px-20 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">H-Group SARL</div>
        <nav className="space-x-6 font-medium hidden md:block">
          <a href="#about" className="hover:text-blue-300 transition duration-200">About</a>
          <a href="#expertise" className="hover:text-blue-300 transition duration-200">Expertise</a>
          <a href="#portfolio" className="hover:text-blue-300 transition duration-200">Portfolio</a>
          <a href="#contact" className="hover:text-blue-300 transition duration-200">Contact</a>
        </nav>
      </header>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1713799159280-5e879d00fdee?auto=format&fit=crop&w=1600&q=80')" }}>
        <div className="bg-black bg-opacity-50 p-6 rounded-2xl max-w-3xl text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Building Tomorrow, Today</h1>
          <p className="text-white text-lg md:text-xl mb-6">Comprehensive development, construction, and interior solutions since 1999.</p>
          <a href="#portfolio">
            <Button className="bg-slate-700 text-white px-6 py-2 text-lg transition duration-300 hover:scale-105">Explore Our Work</Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
