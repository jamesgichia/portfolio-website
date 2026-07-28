import { Metadata } from "next";
import AnimatedSkillBars from "@/components/AnimatedSkillBars";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills of James Gichia — Python, Django, Next.js, PostgreSQL, Docker, OWASP security testing, Burp Suite, and more.",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    title: "Skills | James Gichia",
    description: "Technical skills of James Gichia — Python, Django, Next.js, PostgreSQL, Docker, OWASP security testing, Burp Suite, and more.",
    url: "/skills",
  },
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
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS / Google Cloud Platform", level: 75 },
      { name: "CI/CD (GitHub Actions)", level: 80 },
      { name: "Linux Server Administration", level: 85 },
      { name: "Containerization Orchestration", level: 78 },
    ],
  },
  {
    category: "Professional & Soft Skills",
    skills: [
      { name: "System Architecture & Design", level: 85 },
      { name: "Complex Problem Solving", level: 90 },
      { name: "Agile / Scrum Methodologies", level: 80 },
      { name: "Technical Communication", level: 85 },
      { name: "Cross-Functional Collaboration", level: 88 },
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
        <p className="section-label">James Gichia&apos;s Capabilities</p>
        <h1 className="section-title">
          Software Engineering & Security <span className="text-gradient">Skills</span>
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: "560px", marginBottom: "60px", lineHeight: 1.75 }}>
          My core competencies as a web application specialist span full-stack development, database engineering, and application
          security — built through extensive architectural design, real-world projects, and hands-on lab training.
        </p>

        {/* Animated skill bars — client component */}
        <AnimatedSkillBars skillGroups={skillGroups} />

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
