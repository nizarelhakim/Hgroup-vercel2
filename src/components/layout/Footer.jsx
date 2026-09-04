import { Instagram } from "lucide-react";
import { contact } from "../../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-600 border-t border-white/10 px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <p>&copy; {new Date().getFullYear()} H-Group SARL. All rights reserved.</p>
      <p>Beirut, Lebanon</p>
      <a
        href={contact.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-bone-50 transition-colors"
      >
        <Instagram className="w-4 h-4" /> Instagram
      </a>
    </footer>
  );
}
