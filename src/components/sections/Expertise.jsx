import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { expertise } from "../../data/content";
import { fadeUp } from "../../utils/motion";

export default function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-24 bg-gray-50 py-20 px-6 md:px-20">
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
            <Card className="overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
  );
}
