import { GraduationCap, Briefcase, Award, Users } from "lucide-react";

export const metadata = {
  title: "About — James Gichia",
  description: "Learn about James Gichia — Computer Science student, software engineer, and security enthusiast based in Ruiru, Nairobi, Kenya.",
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>

        {/* Header */}
        <p className="section-label">About Me</p>
        <h1 className="section-title" style={{ maxWidth: "700px" }}>
          Building Secure Software,{" "}
          <span className="text-gradient">One Layer at a Time</span>
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "680px", marginBottom: "64px" }}>
          I&apos;m a Computer Science student at Mama Ngina University (graduating December 2026)
          with a passion for building robust full-stack applications and securing them against
          real-world threats. My journey spans government ICT infrastructure, applied penetration
          testing, and architecting multi-tenant SaaS platforms.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>

          {/* Education */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <GraduationCap size={22} color="var(--purple-400)" />
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>Education</h2>
            </div>
            <div className="card" style={{ padding: "24px" }}>
              <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>BSc Computer Science</h3>
              <p style={{ color: "var(--purple-400)", fontSize: "0.9rem", marginBottom: "8px" }}>
                Mama Ngina University, Kenya
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginBottom: "16px" }}>
                Expected December 2026
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.7 }}>
                Relevant coursework: Computer Systems Security, Computer Networks, Advanced Database Systems, 
                Distributed Systems, Design &amp; Analysis of Algorithms, Research Methods.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <Briefcase size={22} color="var(--purple-400)" />
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>Experience</h2>
            </div>
            <div className="card" style={{ padding: "24px" }}>
              <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "4px" }}>
                ICT Infrastructure &amp; Security Intern
              </h3>
              <p style={{ color: "var(--purple-400)", fontSize: "0.9rem", marginBottom: "4px" }}>
                ICT Authority, Coast Region, Kenya
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginBottom: "16px" }}>
                May 2025 – Jul 2025
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Identified and remediated network vulnerabilities across government systems",
                  "Configured networking equipment across regional government offices",
                  "Conducted formal security assessments and authored remediation procedures",
                  "Collaborated with cross-functional teams on infrastructure improvements",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "8px", color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                    <span style={{ color: "var(--purple-400)", flexShrink: 0, marginTop: "3px" }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <Award size={22} color="var(--purple-400)" />
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>Certifications</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Cisco — Ethical Hacking",
                "Cisco — Cybersecurity Essentials",
                "Cisco — Introduction to Cybersecurity",
                "Cisco — Networking Fundamentals",
              ].map((cert) => (
                <div key={cert} className="card" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--purple-500)", flexShrink: 0 }} />
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Conferences */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <Users size={22} color="var(--purple-400)" />
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                Leadership &amp; Events
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="card" style={{ padding: "20px 24px" }}>
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem", marginBottom: "4px" }}>
                  Chairperson — SDA Society (Campus)
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.87rem", lineHeight: 1.6 }}>
                  Led meetings, mentored members, and organised training sessions and outreach programs.
                  Managed communication and project execution across the organisation.
                </p>
              </div>
              <div className="card" style={{ padding: "20px 24px" }}>
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem", marginBottom: "4px" }}>
                  CyberWeek Africa 2025 — Delegate
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", marginBottom: "8px" }}>
                  Oct 27–31 · Kenya School of Government, Nairobi
                </p>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.87rem", lineHeight: 1.6 }}>
                  Attended the &quot;Compliance by Design&quot; track; networked with professionals from NC4,
                  ICT Authority, and the Communications Authority of Kenya.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div style={{ marginTop: "60px" }}>
          <p className="section-label">Languages</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "16px" }}>
            {[
              { lang: "English", level: "Fluent (C2)" },
              { lang: "Kiswahili", level: "Intermediate (B1)" },
              { lang: "Kikuyu", level: "Intermediate (B1)" },
            ].map(({ lang, level }) => (
              <div key={lang} className="card" style={{ padding: "12px 20px", display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.9rem" }}>{lang}</span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>{level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
