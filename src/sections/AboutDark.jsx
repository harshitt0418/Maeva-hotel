import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutDark() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#1C1C1C", padding: "6rem 0" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="split-2col" style={{ alignItems: "start" }}>
          {/* Left — Text */}
          <div style={{ maxWidth: "520px" }}>
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}
              style={{ display: "flex", gap: "4px", marginBottom: "1rem" }}>
              {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#C9A96E", fontSize: "0.85rem" }}>☆</span>)}
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }}
              className="eyebrow" style={{ color: "rgba(201,169,110,0.7)", marginBottom: "1rem" }}>Best Prices</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.2, ease: [0.22,1,0.36,1] }}
              className="section-heading-light" style={{ fontSize: "clamp(2.4rem,4.5vw,3.6rem)", marginBottom: "1.25rem" }}>
              Unmatched Value,<br />Unrivalled Luxury
            </motion.h2>
            <motion.span initial={{ width: 0 }} animate={inView ? { width: 40 } : {}} transition={{ duration: 0.8, delay: 0.4 }}
              style={{ display: "block", height: "1px", background: "#C9A96E", marginBottom: "1.5rem" }} />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
              style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, marginBottom: "1.25rem", fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
              At Maeva, we believe true luxury should never be out of reach. Our best-rate guarantee ensures you always receive the most competitive pricing — with every premium detail included.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}
              style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.85, marginBottom: "2.5rem", fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
              From curated welcome packages to complimentary breakfast and early check-in privileges, we offer more value per night than any comparable property in the region.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.5 }}
              style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid rgba(201,169,110,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#C9A96E" }}>☎</span>
              </div>
              <div>
                <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif", marginBottom: "4px" }}>Reservations</p>
                <p style={{ color: "#C9A96E", fontFamily: "'Cormorant Garamond',serif", fontSize: "1.15rem", fontWeight: 300 }}>+91 98898 75151</p>
              </div>
            </motion.div>
          </div>

          {/* Right — Real staggered images */}
          <div className="stagger-pair">
            <motion.div initial={{ opacity: 0, y: 60 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.35, ease: [0.22,1,0.36,1] }}
              className="img-zoom">
              <img src="/images/dark-exterior.jpg" alt="Maeva exterior night" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.55, ease: [0.22,1,0.36,1] }}
              className="img-zoom offset">
              <img src="/images/dark-room.jpg" alt="Maeva room" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
