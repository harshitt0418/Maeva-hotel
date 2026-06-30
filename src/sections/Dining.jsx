import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Dining() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="dining" style={{ padding: "6rem 0", background: "#fff" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="split-2col">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22,1,0.36,1] }}
            className="img-zoom dining-img"
          >
            <img src="/images/lobby.jpg" alt="Maeva interior" />
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, delay: 0.2, ease: [0.22,1,0.36,1] }}>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>Culinary Excellence</p>
            <h2 className="section-heading" style={{ fontSize: "clamp(2.4rem,4.5vw,3.6rem)", marginBottom: "1.25rem" }}>
              Dining<br />Experience
            </h2>
            <span style={{ display: "block", width: "40px", height: "1px", background: "#C9A96E", marginBottom: "1.5rem" }} />
            <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.85, marginBottom: "1.25rem", fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
              Our in-house dining experience is a celebration of the world's finest ingredients, prepared by chefs who have trained in the most prestigious kitchens across Asia and Europe.
            </p>
            <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.85, marginBottom: "2.5rem", fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
              From our curated breakfast service to our à la carte dinner menu, every meal at Maeva is a destination in its own right — crafted to create memories that linger long after departure.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2.5rem" }}>
              {["Signature Breakfast", "À La Carte Dinner", "In-Room Dining", "Evening High Tea"].map(venue => (
                <div key={venue} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#C9A96E", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.875rem", fontFamily: "'DM Sans',sans-serif", color: "#1C1C1C", fontWeight: 300 }}>{venue}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-outline-dark">Reserve a Table</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
