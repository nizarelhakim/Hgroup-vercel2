import { motion } from "framer-motion";
import { process } from "../../data/content";
import { fadeUp } from "../../utils/motion";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20 px-6 md:px-20">
      <motion.div className="text-center mb-16" {...fadeUp()}>
        <p className="text-gold-600 font-semibold tracking-widest uppercase text-sm mb-3">How We Work</p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900">Our Process</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          A disciplined path from first concept to final handover.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gray-200" />
        {process.map((step, idx) => (
          <motion.div key={step.step} className="relative text-center md:text-left" {...fadeUp(idx * 0.12)}>
            <div className="relative z-10 mx-auto md:mx-0 mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold-400 font-serif font-bold">
              {step.step}
            </div>
            <h3 className="text-lg font-serif font-semibold text-navy-900 mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
