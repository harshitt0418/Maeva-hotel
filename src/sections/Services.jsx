import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "../data/hotelData";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="amenities" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-16 text-center"
        >
          <p className="eyebrow mb-3">Our Services</p>
          <h2 className="section-heading text-5xl lg:text-6xl">
            Curated Experiences
          </h2>
        </motion.div>

        {/* 3-column service cards (matching reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="service-card group"
            >
              {/* Icon area — matches reference style with placeholder image feel */}
              <div
                className="w-16 h-14 mb-5 flex items-center justify-center"
                style={{ borderBottom: "2px solid #C9A96E" }}
              >
                <span className="text-3xl">{service.icon}</span>
              </div>

              <h3
                className="font-serif text-xl font-light text-charcoal mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {service.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed font-sans font-light">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
