import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.5 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % heroImages.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[640px] flex flex-col">
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((src, i) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === idx ? 1 : 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            style={{ zIndex: i === idx ? 1 : 0 }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              style={{
                transform: i === idx ? "scale(1.04)" : "scale(1)",
                transition: "transform 7s ease-out",
              }}
            />
          </motion.div>
        ))}
        {/* Cinematic overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.40) 40%, rgba(0,0,0,0.65) 100%)",
            zIndex: 2,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 pb-36" style={{ zIndex: 3 }}>
        <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col items-center">
          {/* Stars */}
          <motion.div variants={fadeUp} className="flex gap-1.5 mb-5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-gold" style={{ fontSize: "1.1rem" }}>★</span>
            ))}
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="eyebrow mb-6"
            style={{ color: "rgba(255,255,255,0.75)", letterSpacing: "0.4em" }}
          >
            Maeva Hotel &amp; Resort
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3.2rem, 8.5vw, 8.5rem)",
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              color: "white",
              fontWeight: 300,
              lineHeight: 1.05,
              marginBottom: "2rem",
            }}
          >
            Enjoy A Luxury
            <br />
            Experience
          </motion.h1>

          {/* CTA */}
          <motion.div variants={fadeUp}>
            <a href="#rooms" className="btn-outline">
              Rooms &amp; Suites
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute flex flex-col items-center gap-2"
        style={{ bottom: "170px", left: "50%", transform: "translateX(-50%)", zIndex: 3 }}
      >
        <div style={{ width: "1px", height: "44px", background: "rgba(255,255,255,0.2)", position: "relative", overflow: "hidden" }}>
          <motion.div
            style={{ position: "absolute", top: 0, left: 0, width: "100%", background: "#C9A96E" }}
            animate={{ height: ["0%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 0.4 }}
          />
        </div>
      </motion.div>

      {/* Booking Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 right-0 bottom-0"
        style={{ zIndex: 4 }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white shadow-2xl px-6 lg:px-8 py-5 flex flex-col md:flex-row items-start md:items-end gap-5 md:gap-0">
            <div className="flex-1 md:pr-6 md:border-r border-gray-100 w-full">
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1C1C", fontFamily: "'DM Sans', sans-serif", marginBottom: "8px" }}>Check In / Out</p>
              <input type="text" placeholder="Check In  →  Check Out" className="booking-bar-input" />
            </div>
            <div className="flex-1 md:px-6 md:border-r border-gray-100 w-full">
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1C1C", fontFamily: "'DM Sans', sans-serif", marginBottom: "8px" }}>Guests</p>
              <input type="text" placeholder="Guests 1" className="booking-bar-input" />
            </div>
            <div className="flex-1 md:px-6 md:border-r border-gray-100 w-full">
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1C1C", fontFamily: "'DM Sans', sans-serif", marginBottom: "8px" }}>Room Type</p>
              <select className="booking-bar-input" style={{ cursor: "pointer", appearance: "none", background: "transparent" }}>
                <option>All Room Types</option>
                <option>Deluxe Twin Room</option>
                <option>Grand King Suite</option>
                <option>Premier Double Room</option>
              </select>
            </div>
            <div className="md:pl-6 w-full md:w-auto">
              <button className="btn-gold w-full md:w-auto whitespace-nowrap">Book Your Room</button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Image nav dots */}
      <div className="absolute right-6 flex flex-col gap-2" style={{ bottom: "180px", zIndex: 3 }}>
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            style={{
              width: "4px",
              borderRadius: "2px",
              background: i === idx ? "#C9A96E" : "rgba(255,255,255,0.35)",
              height: i === idx ? "28px" : "12px",
              border: "none",
              cursor: "pointer",
              transition: "all 0.5s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
