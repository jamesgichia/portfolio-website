export const metadata = {
  title: "Skills",
  description: "Technical skills of James Gichia — Python, Django, Next.js, PostgreSQL, Docker, OWASP security testing, Burp Suite, and more.",
};

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 82 },
      { name: "JavaScript / TypeScript", level: 72 },
      { name: "Bash / Shell", level: 75 },
      { name: "HTML & CSS", level: 85 },
      { name: "PowerShell", level: 55 },
    ],
  },
  {
    category: "Backend & Frameworks",
    skills: [
      { name: "Django / Django REST Framework", level: 88 },
      { name: "Flask", level: 70 },
      { name: "FastAPI", level: 72 },
      { name: "RESTful API Design", level: 85 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Next.js / React", level: 70 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Responsive Design", level: 80 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: 84 },
      { name: "MySQL", level: 78 },
      { name: "Schema Design & Optimisation", level: 80 },
    ],
  },
  {
    category: "Security",
    skills: [
      { name: "OWASP Top 10", level: 85 },
      { name: "Burp Suite (Pro/Community)", level: 82 },
      { name: "Penetration Testing", level: 75 },
      { name: "Secure Auth (JWT, RBAC)", level: 80 },
      { name: "SQLi / XSS / SSRF / IDOR", level: 80 },
    ],
  },
  {
    category: "Infrastructure & Tools",
    skills: [
      { name: "Docker", level: 72 },
      { name: "Git / GitHub", level: 88 },
      { name: "Linux (Kali / Garuda)", level: 84 },
      { name: "iptables", level: 72 },
      { name: "Nmap & Recon Workflows", level: 76 },
    ],
  },
];

const platforms = [
  { name: "PortSwigger Web Security Academy", focus: "SQLi, XSS, SSRF — Burp Suite" },
  { name: "Hack The Box (HTB) Academy", focus: "Linux PrivEsc, Active Directory, Web Recon" },
  { name: "CyberWeek Africa 2025", focus: "Compliance by Design — Security Architecture" },
];

export default function SkillsPage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
        <p className="section-label">Capabilities</p>
        <h1 className="section-title">
          Technical <span className="text-gradient">Skills</span>
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: "560px", marginBottom: "60px", lineHeight: 1.75 }}>
          My core competencies span full-stack development, database engineering, and application
          security — built through projects, coursework, and hands-on lab training.
        </p>

        {/* Skill bars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
          {skillGroups.map(({ category, skills }) => (
            <div key={category}>
              <h2 style={{ fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--green-500)", marginBottom: "20px" }}>
                {category}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {skills.map(({ name, level }) => (
                  <div key={name}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ fontSize: "0.88rem", color: "var(--text-primary)", fontWeight: 500 }}>{name}</span>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{level}%</span>
                    </div>
                    <div style={{ height: "7px", background: "rgba(212,175,55,0.15)", borderRadius: "4px", overflow: "hidden", border: "1px solid rgba(212,175,55,0.2)" }}>
                      <div
                        style={{
                          height: "100%",
                          width: `${level}%`,
                          background: "linear-gradient(90deg, #AA8222, #D4AF37, #22C55E)",
                          borderRadius: "4px",
                          transition: "width 1s ease",
                          boxShadow: "0 0 8px rgba(212,175,55,0.5)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Training platforms */}
        <div style={{ marginTop: "80px" }}>
          <p className="section-label">Training & Labs</p>
          <h2 className="section-title" style={{ fontSize: "1.6rem" }}>Applied Learning</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "28px" }}>
            {platforms.map(({ name, focus }) => (
              <div key={name} className="card" style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <div className="timeline-dot" />
                <div>
                  <p style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95rem" }}>{name}</p>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>{focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
