import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { rooms } from "../data/hotelData";

const amenityIcons = { wifi: "📶", bath: "🛁", tv: "📺", ac: "❄️", coffee: "☕", minibar: "🍷", butler: "🤵" };

export default function Rooms() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="rooms" className="py-24 lg:py-32" style={{ background: "#F5EFE6" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          style={{ marginBottom: "3.5rem" }}
        >
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Maeva Hotel &amp; Resort</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(2.8rem,6vw,5rem)" }}>Rooms &amp; Suites</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="room-card"
            >
              <div className="room-card-img-wrap" style={{ position: "relative" }}>
                <img src={room.image} alt={room.name} className="card-img" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                <div className="card-overlay" style={{ position: "absolute", inset: 0 }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.4rem 1.5rem", color: "white" }}>
                  <p style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif", color: "rgba(255,255,255,0.65)", marginBottom: "0.35rem" }}>
                    {room.category}
                  </p>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.5rem", fontWeight: 300, marginBottom: "0.75rem" }}>
                    {room.name}
                  </h3>
                  <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.25)", marginBottom: "0.75rem" }} />
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: "0.6rem" }}>
                      {room.amenities.slice(0, 4).map(a => (
                        <span key={a} style={{ fontSize: "0.85rem", opacity: 0.75 }}>{amenityIcons[a]}</span>
                      ))}
                    </div>
                    <a href="#contact" style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'DM Sans',sans-serif", color: "rgba(255,255,255,0.8)", transition: "color 0.3s", textDecoration: "none" }}
                      onMouseEnter={e => e.currentTarget.style.color = "#C9A96E"}
                      onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}
                    >
                      More Details <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.6 }}
          style={{ textAlign: "center", marginTop: "3.5rem" }}
        >
          <a href="#contact" className="btn-outline-dark">View All Rooms</a>
        </motion.div>
      </div>
    </section>
  );
}
