import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import { Instagram } from 'lucide-react';


export default function HGroupHomePage() {
  return (
    <div className="bg-gray-100 text-gray-900 scroll-smooth scroll-pt-[220px]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-800 text-white shadow-sm px-6 md:px-20 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">H-Group SARL</div>
        <nav className="space-x-6 font-medium hidden md:block">
          <a href="#about" className="hover:text-blue-300">About</a>
          <a href="#expertise" className="hover:text-blue-300">Expertise</a>
          <a href="#portfolio" className="hover:text-blue-300">Portfolio</a>
          <a href="#contact" className="hover:text-blue-300">Contact</a>
          <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
    <Instagram className="inline w-5 h-5" />
  </a>

        </nav>
      </header>

      {/* Hero */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/hero.png')" }}>
        {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none"></div>
        <div className="bg-black bg-opacity-50 p-6 rounded-2xl max-w-3xl text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Building Tomorrow, Today</h1>
          <p className="text-white text-lg md:text-xl mb-6">Comprehensive development, construction, and interior solutions since 1999.</p>
          <a href="#portfolio">
            <Button className="bg-slate-700 text-white px-6 py-2 text-lg hover:scale-105">Explore Our Work</Button>
          </a>
        </div>
      </motion.div>

     {/* About */}
<section id="about" className="mt-16 py-20 px-6 md:px-20 bg-white">
  <motion.div 
    className="flex flex-col md:flex-row items-center gap-12"
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.6 }} 
    viewport={{ once: true }}
  >
    {/* Text */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-4xl font-bold mb-6 text-slate-800">Built on Heritage. Driven by Excellence.</h2>
      <p className="text-lg text-gray-700 mb-4">
        Founded in 1999 by civil engineer Majd Hakim and architect Samir Hakim, H-Group SARL is a family-rooted firm with a legacy of over 30 years in premium construction and interior delivery.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        From ground-up developments to high-end interior transformations, our approach is built on trust, craftsmanship, and a commitment to enduring design. We pride ourselves on shaping timeless spaces that reflect both innovation and integrity.
      </p>
      <p className="text-lg text-gray-700">
        Today, H-Group continues to carry forward a tradition of precision and care—delivering projects that feel personal, purposeful, and distinctly bespoke.
      </p>
    </div>

    {/* Image */}
    <div className="md:w-1/2">
      <img 
        src="/images/about-image.png" 
        alt="About H-Group SARL" 
        className="w-full rounded-xl shadow-lg"
      />
    </div>
  </motion.div>
</section>


      {/* Expertise */}
      <section id="expertise" className="bg-white py-16 px-6 md:px-40">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Expertise</h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">From planning to execution, we master the full spectrum of real estate delivery.</p>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          {[
            {
              title: "Development",
              desc: "Feasibility, planning, approvals, and end-to-end delivery.",
              img: "/images/development.jpg"

            },
            {
              title: "Construction",
              desc: "Robust project execution with safety and performance standards.",
              img: "/images/construction.png"
            },
            {
              title: "Interior Fit-Out",
              desc: "Tailored finishes with spatial harmony and technology integration.",
              img: "/images/fitout.png"
            },
            {
              title: "Joinery & Finishes",
              desc: "Custom cabinetry and in-house craftsmanship.",
              img: "/images/joinery.png"
            }
          ].map((item, idx) => (
            <Card key={idx} className="rounded-2xl shadow-xl overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-base">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">Portfolio Highlights</h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">A curated selection of our most distinctive projects.</p>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          {[
            {
              src: "/images/img2.jpg",
              title: "Urban Loft Interior"
            },
            {
              src: "/images/img3.jpg",
              title: "Modern Escape"
            },
            {
              src: "/images/img1.jpg",
              title: "Residential Luxury"
            },
      {
              src: "https://images.unsplash.com/photo-1529429611270-66d9abf00576?auto=format&fit=crop&w=800&q=80",
              title: "Contemporary Commercial Space"
            },
      {
              src: "https://images.unsplash.com/photo-1529429611270-66d9abf00576?auto=format&fit=crop&w=800&q=80",
              title: "Contemporary Commercial Space"
            }
          ].map((p, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg">
              <img src={p.src} alt={p.title} className="w-full h-64 object-cover" />
              <div className="p-4 text-center text-lg font-medium text-gray-800">{p.title}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-800 text-white py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-6">Connect with Us</h2>
        <p className="mb-2">
  Telephone: <a href="tel:+9611800640" className="underline hover:text-blue-400">+961 (01) 800 640</a> - <a href="tel:+9613366253" className="underline hover:text-blue-400">+961 (03) 366 253</a>
</p>
        <p className="mb-2">Address: Raouche, Australia St., Saad Bldg</p>
        <p className="mb-2">P.O.Box: 6907</p>
        <p className="mb-2">Fax: +961 (01) 787 190</p>
        <p className="mb-6">Email: <a href="mailto:info@hgroup-lb.com" className="underline hover:text-blue-400">info@hgroup-lb.com</a></p>
       <form
  action="https://formspree.io/f/meogqzpa"
  method="POST"
  className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mt-8"
>
  <input type="text" name="name" placeholder="Name" className="p-3 rounded bg-white text-black" required />
  <input type="email" name="email" placeholder="Email" className="p-3 rounded bg-white text-black" required />
  <textarea name="message" placeholder="Message" className="md:col-span-2 p-3 rounded bg-white text-black h-32" required></textarea>
  <Button type="submit" className="md:col-span-2 w-full bg-slate-700 text-white px-6 py-2 text-lg">Send Message</Button>
</form>

      </section>
{/* Privacy Policy */}
<section id="privacy" className="bg-white text-gray-800 py-12 px-4 md:px-10 text-sm">
  <div className="max-w-8xl mx-auto">
    <h3 className="text-xl font-semibold mb-4">Privacy Policy</h3>
    <p className="mb-2">
      We respect your privacy. Any personal information shared through this website will be treated with confidentiality. 
      We do not sell or share your data with third parties unless required by law.
    </p>
    <p className="mb-2">
      By using our website, you agree to our privacy practices. For questions, contact us at 
      <a href="mailto:info@hgroup-lb.com" className="underline text-blue-600 ml-1">info@hgroup-lb.com</a>.
    </p>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-black text-white text-sm text-center py-4">
        <p>&copy; {new Date().getFullYear()} H-Group SARL. All rights reserved.</p>
      </footer>
    </div>
  );
}
