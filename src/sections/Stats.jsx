import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "../data/hotelData";

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-20 lg:py-24"
      style={{ background: "#F5EFE6" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x divide-gold/30">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="text-center lg:px-10"
            >
              <p
                className="font-serif font-light text-gold mb-2"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "'Cormorant Garamond', serif" }}
              >
                {stat.number}
              </p>
              <p className="eyebrow text-charcoal/60" style={{ fontSize: "0.65rem" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
