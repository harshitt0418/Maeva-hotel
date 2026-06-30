import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { faqs } from "../data/hotelData";

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState(0);

  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: "#FAF6F1" }}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mb-14"
        >
          <p className="eyebrow mb-3">Need to Know</p>
          <h2 className="section-heading text-5xl lg:text-6xl">
            Frequently Asked
          </h2>
        </motion.div>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <button
                className="w-full text-left py-5 flex items-start justify-between gap-4"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span
                  className="font-serif text-lg font-light text-charcoal"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {faq.q}
                </span>
                <span
                  className={`text-gold text-xl flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-gray-500 leading-relaxed font-sans font-light pb-5 pr-8">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
