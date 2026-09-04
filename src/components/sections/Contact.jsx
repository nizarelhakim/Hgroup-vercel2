import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { contact } from "../../data/content";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-ink-950 text-bone-50 py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <p className="font-display font-bold uppercase tracking-[0.2em] text-clay-500 text-xs mb-6">
          Get in Touch
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-4xl md:text-7xl leading-[0.95] mb-12 max-w-3xl"
        >
          Let&rsquo;s build something that lasts.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-3 text-lg text-ink-600">
            <p>
              <a href={`tel:${contact.phones[0].replace(/[^+\d]/g, "")}`} className="hover:text-bone-50 transition-colors">{contact.phones[0]}</a>
              {" "}&mdash;{" "}
              <a href={`tel:${contact.phones[1].replace(/[^+\d]/g, "")}`} className="hover:text-bone-50 transition-colors">{contact.phones[1]}</a>
            </p>
            <p>{contact.address} &mdash; {contact.poBox}</p>
            <p>Fax: {contact.fax}</p>
            <p>
              <a href={`mailto:${contact.email}`} className="hover:text-bone-50 transition-colors">{contact.email}</a>
            </p>
          </div>

          <form action={contact.formAction} method="POST" className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="bg-transparent border-b border-white/20 py-3 placeholder-ink-600 focus:outline-none focus:border-clay-500 transition-colors"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-transparent border-b border-white/20 py-3 placeholder-ink-600 focus:outline-none focus:border-clay-500 transition-colors"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="bg-transparent border-b border-white/20 py-3 h-20 placeholder-ink-600 focus:outline-none focus:border-clay-500 transition-colors resize-none"
              required
            ></textarea>
            <MagneticButton
              type="submit"
              className="mt-4 self-start flex items-center gap-3 bg-clay-500 hover:bg-clay-600 text-ink-950 font-display font-bold px-8 py-4 rounded-full transition-colors"
            >
              Send Message <Mail className="w-4 h-4" />
            </MagneticButton>
          </form>
        </div>
      </div>
    </section>
  );
}
