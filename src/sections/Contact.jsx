import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <p className="eyebrow mb-4">Get In Touch</p>
            <h2 className="section-heading text-5xl lg:text-6xl mb-6">
              Reserve Your<br />Stay
            </h2>
            <span className="divider-gold" />
            <p className="text-sm text-gray-500 leading-relaxed font-sans font-light mb-10 max-w-sm">
              Our reservations team is available 24 hours a day, seven days a week. We would be honoured to curate your perfect Maeva experience.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-sm">☎</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5" style={{ letterSpacing: "0.15em", fontSize: "0.65rem" }}>Phone</p>
                  <p className="text-gold font-serif font-light">+91 98898 75151</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold text-sm">✉</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5" style={{ letterSpacing: "0.15em", fontSize: "0.65rem" }}>Email</p>
                  <p className="text-charcoal font-sans text-sm font-light">reservations@maeva.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gold text-sm">📍</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5" style={{ letterSpacing: "0.15em", fontSize: "0.65rem" }}>Address</p>
                  <p className="text-charcoal font-sans text-sm font-light leading-relaxed">
                    527 Woodland Avenue, Civil Lines<br />
                    New Delhi, 110054
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-widest block mb-2" style={{ letterSpacing: "0.15em", fontSize: "0.65rem" }}>First Name</label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full border-b border-gray-200 py-2 text-sm font-sans font-light outline-none bg-transparent focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-widest block mb-2" style={{ letterSpacing: "0.15em", fontSize: "0.65rem" }}>Last Name</label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full border-b border-gray-200 py-2 text-sm font-sans font-light outline-none bg-transparent focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-400 uppercase tracking-widest block mb-2" style={{ letterSpacing: "0.15em", fontSize: "0.65rem" }}>Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border-b border-gray-200 py-2 text-sm font-sans font-light outline-none bg-transparent focus:border-gold transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-widest block mb-2" style={{ letterSpacing: "0.15em", fontSize: "0.65rem" }}>Check In</label>
                  <input
                    type="date"
                    className="w-full border-b border-gray-200 py-2 text-sm font-sans font-light outline-none bg-transparent focus:border-gold transition-colors text-gray-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 uppercase tracking-widest block mb-2" style={{ letterSpacing: "0.15em", fontSize: "0.65rem" }}>Check Out</label>
                  <input
                    type="date"
                    className="w-full border-b border-gray-200 py-2 text-sm font-sans font-light outline-none bg-transparent focus:border-gold transition-colors text-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-400 uppercase tracking-widest block mb-2" style={{ letterSpacing: "0.15em", fontSize: "0.65rem" }}>Message</label>
                <textarea
                  placeholder="Any special requests or questions..."
                  rows={4}
                  className="w-full border-b border-gray-200 py-2 text-sm font-sans font-light outline-none bg-transparent focus:border-gold transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="btn-gold w-full">
                  Send Enquiry
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
