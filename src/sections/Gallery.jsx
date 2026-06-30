import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { galleryImages } from "../data/hotelData";

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" style={{ padding: "6rem 0", background: "#fff" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9 }} style={{ marginBottom: "3.5rem" }}>
          <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>Visual Journey</p>
          <h2 className="section-heading" style={{ fontSize: "clamp(2.8rem,6vw,5rem)" }}>Gallery</h2>
        </motion.div>

        {/* Gallery grid — mix of landscape and portrait */}
        <div className="gallery-grid">
          {/* Row 1: portrait | landscape | landscape */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0, ease: [0.22,1,0.36,1] }}
            className="img-zoom tall gallery-tall-img">
            <img src={galleryImages[0].src} alt={galleryImages[0].caption} />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.1, ease: [0.22,1,0.36,1] }}
            className="img-zoom gallery-short-img">
            <img src={galleryImages[1].src} alt={galleryImages[1].caption} />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.15, ease: [0.22,1,0.36,1] }}
            className="img-zoom tall gallery-tall-img">
            <img src={galleryImages[2].src} alt={galleryImages[2].caption} />
          </motion.div>
          {/* Row 2 fill */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.2, ease: [0.22,1,0.36,1] }}
            className="img-zoom gallery-short-img">
            <img src={galleryImages[3].src} alt={galleryImages[3].caption} />
          </motion.div>
          {/* Row 3 */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.25, ease: [0.22,1,0.36,1] }}
            className="img-zoom gallery-short-img">
            <img src={galleryImages[4].src} alt={galleryImages[4].caption} />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.3, ease: [0.22,1,0.36,1] }}
            className="img-zoom gallery-short-img gallery-wide">
            <img src={galleryImages[5].src} alt={galleryImages[5].caption} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
