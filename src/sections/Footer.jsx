export default function Footer() {
  return (
    <footer style={{ background: "#141414", paddingTop: "4rem", paddingBottom: "2rem" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "3rem", paddingBottom: "3rem", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          className="footer-grid">
          {/* About */}
          <div>
            <h4 style={{ fontFamily: "'Cormorant Garamond',serif", color: "white", fontSize: "1.35rem", fontWeight: 300, marginBottom: "1.25rem" }}>About Hotel</h4>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.85, fontFamily: "'DM Sans',sans-serif", fontWeight: 300, marginBottom: "1.5rem" }}>
              Maeva Hotel &amp; Resort is a distinguished five-star property — a timeless sanctuary where impeccable service meets breathtaking design in the heart of the city.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {["f", "in", "▶"].map((icon, i) => (
                <a key={i} href="#"
                  style={{ width: "34px", height: "34px", border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.35)", fontSize: "0.7rem", textDecoration: "none", transition: "all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9A96E"; e.currentTarget.style.color = "#C9A96E"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "rgba(255,255,255,0.35)"; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 style={{ fontFamily: "'Cormorant Garamond',serif", color: "white", fontSize: "1.35rem", fontWeight: 300, marginBottom: "1.25rem" }}>Explore</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Home", "Rooms & Suites", "Dining", "Spa & Wellness", "About Hotel", "Contact"].map(link => (
                <li key={link}>
                  <a href="#" style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans',sans-serif", fontWeight: 300, textDecoration: "none", transition: "color 0.3s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#C9A96E"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Cormorant Garamond',serif", color: "white", fontSize: "1.35rem", fontWeight: 300, marginBottom: "1.25rem" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.75, fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
                527 Woodland Avenue, Civil Lines,<br />New Delhi, 110054
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
                <span style={{ color: "#C9A96E" }}>☎</span> +91 98898 75151
              </p>
              <p style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
                <span style={{ color: "#C9A96E" }}>✉</span> reservations@maeva.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: "1.5rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}
          className="footer-bottom">
          <span style={{ fontFamily: "'Cormorant Garamond',serif", color: "#C9A96E", fontSize: "1.2rem", letterSpacing: "0.25em" }}>MAEVA HOTEL &amp; RESORT</span>
          <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.2)", fontFamily: "'DM Sans',sans-serif", fontWeight: 300 }}>
            © {new Date().getFullYear()} Maeva Hotel &amp; Resort. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-bottom { text-align: center; }
        }
      `}</style>
    </footer>
  );
}
