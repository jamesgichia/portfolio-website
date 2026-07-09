import Link from "next/link";
import { SocialRow } from "@/components/SocialRow";
import { GithubIcon } from "@/components/GithubIcon";
import {
  ExternalLink,
  Shield,
  Code2,
  Server,
  ArrowRight,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  return (
    <div style={{ paddingTop: "64px" }}>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "80px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div style={{ width: "100%" }}>
          {/* Available badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
            <span className="tag tag-green">
              <span
                style={{
                  display: "inline-block",
                  width: "7px",
                  height: "7px",
                  background: "#4ade80",
                  borderRadius: "50%",
                  marginRight: "6px",
                  animation: "pulse 2s infinite",
                }}
              />
              Open to Opportunities
            </span>
            <span className="tag" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <MapPin size={11} />
              Ruiru, Kenya
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              fontWeight: 900,
              lineHeight: 1.08,
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">James Gichia</span>
            <br />
            <span style={{ color: "var(--text-secondary)", fontWeight: 700 }}>
              Software Engineer
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              marginBottom: "40px",
              lineHeight: 1.75,
            }}
          >
            I build <strong style={{ color: "var(--text-primary)" }}>full-stack web applications</strong> with
            Django and Next.js, with a specialisation in{" "}
            <strong style={{ color: "var(--purple-400)" }}>application security</strong>. Currently
            building personal projects.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "60px" }}>
            <Link href="/projects" className="btn-primary" id="hero-view-projects">
              View My Projects <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-outline" id="hero-contact">
              Get In Touch
            </Link>
            <a
              href="https://github.com/jamesgichia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              id="hero-github"
            >
              <GithubIcon size={16} color="var(--purple-400)" /> GitHub
            </a>
          </div>

          {/* Social row */}
          <SocialRow />
        </div>
      </section>

      {/* ── WHAT I DO ── */}
      <section
        style={{
          padding: "100px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p className="section-label">What I Do</p>
        <h2 className="section-title">My Expertise</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          {[
            {
              icon: <Server size={28} color="var(--purple-400)" />,
              title: "Backend Development",
              desc: "Building robust APIs and server-side applications with Django, DRF, Flask, and PostgreSQL. Clean architecture, RBAC, and versioned endpoints.",
            },
            {
              icon: <Code2 size={28} color="var(--purple-400)" />,
              title: "Frontend Development",
              desc: "Crafting responsive, modern UIs using Next.js, TypeScript, and Tailwind CSS. From landing pages to multi-tenant SaaS dashboards.",
            },
            {
              icon: <Shield size={28} color="var(--purple-400)" />,
              title: "Application Security",
              desc: "OWASP Top 10 assessment, Burp Suite testing, secure auth design (JWT), and building security automation tools like WebGuard.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="card" style={{ padding: "28px" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background: "rgba(22,101,52,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  border: "1px solid rgba(22,101,52,0.22)",
                }}
              >
                {icon}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "10px", color: "var(--text-primary)" }}>
                {title}
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.92rem" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section
        style={{
          padding: "100px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p className="section-label">Work</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "12px" }}>
          <h2 className="section-title" style={{ margin: 0 }}>Featured Projects</h2>
          <Link
            href="/projects"
            style={{ color: "var(--purple-400)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}
          >
            All Projects <ArrowRight size={15} />
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginTop: "40px" }}>
          {[
            {
              title: "WebGuard",
              status: "In Development",
              statusColor: "blue",
              desc: "Automated web-application security scanner covering 10 OWASP-aligned check categories. Features CLI, FastAPI backend, and a React dashboard with JWT auth.",
              tags: ["Python", "FastAPI", "React", "PostgreSQL", "Docker"],
              github: "https://github.com/jamesgichia/webguard",
            },
            {
              title: "tuSupport",
              status: "In Development",
              statusColor: "blue",
              desc: "Multi-tenant SaaS fundraising platform digitalising informal Kenyan harambees. Includes M-Pesa Daraja API integration, RBAC, and audit-grade logging.",
              tags: ["Django REST", "Next.js", "PostgreSQL", "TypeScript"],
              github: "https://github.com/jamesgichia/tusupport",
            },
            {
              title: "Firewall Rules Optimizer",
              status: "Completed",
              statusColor: "green",
              desc: "Python CLI tool that analyses and optimises iptables firewall rule sets on Linux — reducing processing overhead while preserving security intent.",
              tags: ["Python", "Linux", "iptables", "Security"],
              github: "https://github.com/jamesgichia/firewall_rules_optimizer",
            },
          ].map(({ title, status, statusColor, desc, tags, github }) => (
            <div key={title} className="card" style={{ padding: "28px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)" }}>{title}</h3>
                <span className={`tag tag-${statusColor}`}>{status}</span>
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, flex: 1, marginBottom: "20px" }}>
                {desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                {tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--purple-400)", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}
              >
                <GithubIcon size={15} color="var(--purple-400)" /> View on GitHub <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
