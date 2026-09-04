import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Printer } from "lucide-react";
import { Button } from "../ui/button";
import { contact } from "../../data/content";
import { fadeUp } from "../../utils/motion";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-navy-900 text-white py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div {...fadeUp()}>
          <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-3">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Connect with Us</h2>

          <ul className="space-y-5 text-gray-200">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 text-gold-400 shrink-0" />
              <span>
                <a href={`tel:${contact.phones[0].replace(/[^+\d]/g, "")}`} className="hover:text-gold-400 transition-colors">
                  {contact.phones[0]}
                </a>
                {" "}&mdash;{" "}
                <a href={`tel:${contact.phones[1].replace(/[^+\d]/g, "")}`} className="hover:text-gold-400 transition-colors">
                  {contact.phones[1]}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-gold-400 shrink-0" />
              <span>{contact.address} &mdash; {contact.poBox}</span>
            </li>
            <li className="flex items-start gap-3">
              <Printer className="w-5 h-5 mt-1 text-gold-400 shrink-0" />
              <span>{contact.fax}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1 text-gold-400 shrink-0" />
              <a href={`mailto:${contact.email}`} className="hover:text-gold-400 transition-colors">{contact.email}</a>
            </li>
          </ul>
        </motion.div>

        <motion.form
          action={contact.formAction}
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
  );
}
