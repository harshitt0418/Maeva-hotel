import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { testimonials } from "../data/hotelData";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="eyebrow mb-3">Guest Stories</p>
          <h2 className="section-heading text-5xl lg:text-6xl mb-16">
            Voices of Maeva
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => <span key={i} className="text-gold text-lg">★</span>)}
          </div>

          {/* Quote */}
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-2xl lg:text-3xl font-light text-charcoal leading-relaxed mb-10 max-w-3xl mx-auto"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "{testimonials[active].text}"
            </motion.blockquote>
          </AnimatePresence>

          {/* Author */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active + "author"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-2"
            >
              <img
                src={testimonials[active].avatar}
                alt={testimonials[active].name}
                className="w-12 h-12 rounded-full object-cover border-2 border-gold/30"
              />
              <p className="font-sans font-normal text-sm text-charcoal">{testimonials[active].name}</p>
              <p className="eyebrow text-gray-400" style={{ fontSize: "0.65rem" }}>{testimonials[active].title}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-6 h-px transition-all duration-500 ${i === active ? "bg-gold" : "bg-gray-200"}`}
                style={{ height: "1px" }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
