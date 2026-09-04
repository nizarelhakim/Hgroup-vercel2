import { Instagram } from "lucide-react";
import { navLinks, contact, expertise } from "../../data/content";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-white font-serif font-bold text-lg mb-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-navy-950 text-sm">H</span>
            H-Group SARL
          </div>
          <p className="text-sm text-gray-400 max-w-sm">
            Family-rooted development, construction, and interior fit-out firm delivering premium projects in Beirut since 1999.
          </p>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm mt-4 hover:text-gold-400 transition-colors"
          >
            <Instagram className="w-5 h-5" /> Instagram
          </a>
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
          <p className="text-white font-semibold mb-3">Services</p>
          <ul className="space-y-2 text-sm">
            {expertise.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-gray-500 py-4">
        &copy; {new Date().getFullYear()} H-Group SARL. All rights reserved.
      </div>
    </footer>
  );
}
