import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Text */}
          <motion.div variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="max-w-xl">
            <motion.div variants={fadeUp} className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#C9A96E", fontSize: "0.85rem" }}>☆</span>)}
            </motion.div>
            <motion.p variants={fadeUp} className="eyebrow mb-4">Maeva Hotel &amp; Resort</motion.p>
            <motion.h2 variants={fadeUp} className="section-heading" style={{ fontSize: "clamp(2.4rem,4.5vw,3.6rem)", marginBottom: "1.25rem" }}>
              Enjoy a Luxury<br />Experience
            </motion.h2>
            <motion.span variants={fadeUp} className="divider-gold" />
            <motion.p variants={fadeUp} style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.85, marginBottom: "1.25rem", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              Welcome to Maeva — a distinguished hotel and resort where timeless architecture meets the warmth of genuine Indian hospitality. Every space here has been designed to envelop you in elegance, from the grand entrance portal to the serene corridors above.
            </motion.p>
            <motion.p variants={fadeUp} style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.85, marginBottom: "2.5rem", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
              Our dedicated team anticipates your every need — ensuring each moment of your stay is effortless, memorable, and entirely your own.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid #C9A96E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#C9A96E", fontSize: "1rem" }}>☎</span>
              </div>
              <div>
                <p style={{ fontSize: "0.65rem", color: "#9ca3af", letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif", marginBottom: "4px" }}>Reservations</p>
                <p style={{ color: "#C9A96E", fontFamily: "'Cormorant Garamond',serif", fontSize: "1.15rem", fontWeight: 300 }}>+91 98898 75151</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Real staggered images */}
          <div className="stagger-pair" style={{ paddingTop: "32px" }}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="img-zoom"
            >
              <img src="/images/about-corridor.jpg" alt="Maeva corridor" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="img-zoom offset"
            >
              <img src="/images/about-atrium.jpg" alt="Maeva atrium" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
