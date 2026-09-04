import { motion } from "framer-motion";
import { Counter } from "../ui/Counter";
import { stats } from "../../data/content";
import { fadeUp } from "../../utils/motion";

export default function Stats() {
  return (
    <section className="bg-navy-900 py-14 px-6 md:px-20">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} {...fadeUp(i * 0.1)}>
            <p className="text-4xl md:text-5xl font-serif font-bold text-gold-400">
              {stat.static ? (
                <>{stat.value}{stat.suffix}</>
              ) : (
                <Counter value={stat.value} suffix={stat.suffix} />
              )}
            </p>
            <p className="mt-2 text-sm text-gray-300 tracking-wide">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
