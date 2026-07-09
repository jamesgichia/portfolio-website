"use client";
import { GithubIcon, LinkedinIcon } from "@/components/GithubIcon";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 24px" }}>
        <p className="section-label">Get In Touch</p>
        <h1 className="section-title">
          Let&apos;s <span className="text-gradient">Work Together</span>
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: "560px", marginBottom: "60px", lineHeight: 1.75 }}>
          I&apos;m open to internships, entry-level roles, and consulting engagements in
          software engineering, web application development, and application security.
          Feel free to reach out!
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>

          {/* Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              {
                icon: <Mail size={20} color="var(--purple-400)" />,
                label: "Email",
                value: "jamesgichia15@gmail.com",
                href: "https://mail.google.com/mail/?view=cm&to=jamesgichia15@gmail.com",
              },
              {
                icon: <Phone size={20} color="var(--purple-400)" />,
                label: "Phone",
                value: "+254 791 326 693",
                href: "tel:+254791326693",
              },
              {
                icon: <MapPin size={20} color="var(--purple-400)" />,
                label: "Location",
                value: "Nairobi, Kenya",
                href: null,
              },
              {
                icon: <GithubIcon size={20} color="var(--purple-400)" />,
                label: "GitHub",
                value: "github.com/jamesgichia",
                href: "https://github.com/jamesgichia",
              },
              {
                icon: <LinkedinIcon size={20} color="var(--purple-400)" />,
                label: "LinkedIn",
                value: "linkedin.com/in/jamesgichia",
                href: "https://linkedin.com/in/jamesgichia",
              },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="card" style={{ padding: "18px 20px", display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: "42px", height: "42px", borderRadius: "10px",
                  background: "rgba(139,92,246,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid rgba(139,92,246,0.2)", flexShrink: 0,
                }}>
                  {icon}
                </div>
                <div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "2px" }}>
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{ color: "var(--text-primary)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--purple-400)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                    >
                      {value}
                    </a>
                  ) : (
                    <p style={{ color: "var(--text-primary)", fontSize: "0.9rem", fontWeight: 500 }}>{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick message card */}
          <div className="card" style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
              <Send size={20} color="var(--purple-400)" />
              <h2 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)" }}>
                Quick Message
              </h2>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.7 }}>
              The quickest way to reach me is via email. I typically respond within 24 hours.
            </p>
            <div style={{
              padding: "16px",
              borderRadius: "10px",
              background: "rgba(139,92,246,0.07)",
              border: "1px dashed rgba(139,92,246,0.25)",
              fontFamily: "Fira Code, monospace",
              fontSize: "0.85rem",
              color: "var(--purple-400)",
              lineHeight: 1.8,
            }}>
              <span style={{ color: "var(--text-muted)" }}>To:</span> jamesgichia15@gmail.com<br />
              <span style={{ color: "var(--text-muted)" }}>Subject:</span> Let&apos;s collaborate 🚀
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&to=jamesgichia15@gmail.com&su=Let's collaborate"
              className="btn-primary"
              id="contact-email-btn"
              style={{ width: "fit-content" }}
            >
              <Mail size={16} /> Send Email
            </a>

            {/* Availability */}
            <div style={{
              marginTop: "8px",
              padding: "14px 16px",
              borderRadius: "10px",
              background: "rgba(34,197,94,0.06)",
              border: "1px solid rgba(34,197,94,0.2)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse 2s infinite" }} />
              <p style={{ fontSize: "0.85rem", color: "#4ade80", fontWeight: 500 }}>
                Available for internships &amp; entry-level roles
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
