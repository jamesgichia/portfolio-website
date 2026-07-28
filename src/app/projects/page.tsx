import { Metadata } from "next";
import { GithubIcon } from "@/components/GithubIcon";
import { ExternalLink, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio projects by James Gichia — WebGuard (automated security scanner), tuSupport (multi-tenant SaaS), and Firewall Rules Optimizer. Django, Next.js, Python.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | James Gichia",
    description:
      "Portfolio projects by James Gichia — WebGuard (automated security scanner), tuSupport (multi-tenant SaaS), and Firewall Rules Optimizer. Django, Next.js, Python.",
    url: "/projects",
  },
};

const featuredProject = {
  title: "WebGuard",
  subtitle: "Automated Web Security Scanner",
  status: "In Development",
  statusColor: "blue",
  description:
    "A modular web-application security scanner covering 10 OWASP-aligned check categories: transport security, headers, CORS, cookie security, information disclosure, DNS security, and CVE-based component analysis.",
  highlights: [
    "Each check is a concrete subclass of a shared base-check contract",
    "Architecture: engine, CLI, FastAPI backend, and React dashboard",
    "JWT authentication and PostgreSQL-backed scan storage",
    "JSON, HTML, and PDF report generation",
    "Targeting ≥80% test coverage per module",
  ],
  tags: ["Python", "FastAPI", "React", "PostgreSQL", "Docker", "JWT", "OWASP"],
  github: "https://github.com/jamesgichia/webguard",
  live: null,
};

const projects = [
  {
    title: "tuSupport",
    subtitle: "Multi-Tenant SaaS Fundraiser Platform",
    status: "In Development",
    statusColor: "blue",
    description:
      "A multi-tenant SaaS platform for digitising informal Kenyan fundraising (\"harambees\"). Built on security-by-design principles with full tenant isolation, RBAC, and a versioned RESTful API.",
    highlights: [
      "Tenant-isolation strategy with organisation-scoped data model",
      "M-Pesa Daraja API integration for mobile payments",
      "Role-Based Access Control (RBAC) across all endpoints",
      "Financial ledger tracking and audit-grade logging",
      "12-week phased delivery roadmap with full technical scope",
    ],
    tags: ["Django REST", "Next.js", "TypeScript", "PostgreSQL", "M-Pesa", "RBAC"],
    github: "https://github.com/jamesgichia/tusupport",
    live: null,
  },
  {
    title: "Firewall Rules Optimizer",
    subtitle: "Python · Linux Security Tool",
    status: "Completed",
    statusColor: "green",
    description:
      "A Python CLI tool that analyses and optimises iptables firewall rule sets on Linux systems — reducing processing overhead while preserving the original security intent of each rule.",
    highlights: [
      "Rule prioritisation and re-ordering logic",
      "Reduces iptables processing overhead without weakening policy",
      "Produces maintainable, documented recommendations",
      "Tested on Kali Linux and Garuda Linux environments",
    ],
    tags: ["Python", "Linux", "iptables", "CLI", "Security Automation"],
    github: "https://github.com/jamesgichia/firewall_rules_optimizer",
    live: null,
  },
  {
    title: "Academic Full-Stack Apps",
    subtitle: "Django · MySQL / PostgreSQL",
    status: "Completed",
    statusColor: "green",
    description:
      "A collection of full-stack web applications built for university coursework using Django with relational schemas in MySQL and PostgreSQL.",
    highlights: [
      "Backend logic with CRUD operations",
      "Database-driven features with schema design",
      "Relational data modelling and query optimisation",
    ],
    tags: ["Django", "MySQL", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/jamesgichia",
    live: null,
  },
];

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [featuredProject, ...projects].map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        applicationCategory: "DeveloperApplication",
        url: project.live || project.github,
      },
    })),
  };

  return (
    <div style={{ paddingTop: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 24px" }}>
        <p className="section-label">Portfolio</p>
        <h1 className="section-title">
          Projects &amp;{" "}
          <span className="text-gradient">Builds</span>
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1rem",
            maxWidth: "580px",
            marginBottom: "60px",
            lineHeight: 1.75,
          }}
        >
          A selection of projects I&apos;ve designed and built — ranging from security tooling to
          SaaS platforms. Each project is production-minded with a focus on clean architecture
          and security-by-design.
        </p>

        {/* ── FEATURED PROJECT ── */}
        <div
          className="card"
          style={{
            padding: "40px",
            marginBottom: "28px",
            border: "1px solid rgba(212,175,55,0.45)",
            boxShadow: "0 0 40px rgba(212,175,55,0.12), 0 4px 24px rgba(0,0,0,0.2)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle top accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "linear-gradient(90deg, #AA8222, #FFE55C, #22C55E)",
            }}
          />

          {/* Featured badge + title row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "12px",
            }}
          >
            <div>
              {/* Featured label */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  background: "rgba(212,175,55,0.12)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  borderRadius: "999px",
                  padding: "3px 10px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "var(--gold-400)",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                <Star size={11} fill="currentColor" />
                Featured Project
              </div>
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: "1.6rem",
                  color: "var(--text-primary)",
                  marginBottom: "4px",
                }}
              >
                {featuredProject.title}
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                {featuredProject.subtitle}
              </p>
            </div>
            <span className={`tag tag-${featuredProject.statusColor}`}>
              {featuredProject.status}
            </span>
          </div>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              marginBottom: "20px",
              maxWidth: "820px",
            }}
          >
            {featuredProject.description}
          </p>

          <ul
            style={{
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "8px 24px",
              marginBottom: "24px",
            }}
          >
            {featuredProject.highlights.map((h) => (
              <li
                key={h}
                style={{
                  display: "flex",
                  gap: "10px",
                  color: "var(--text-secondary)",
                  fontSize: "0.88rem",
                }}
              >
                <span style={{ color: "var(--purple-400)", flexShrink: 0 }}>▸</span>
                {h}
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginBottom: "24px",
            }}
          >
            {featuredProject.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href={featuredProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: "8px 18px", fontSize: "0.85rem" }}
            >
              <GithubIcon size={15} color="var(--purple-400)" /> GitHub
            </a>
            {featuredProject.live && (
              <a
                href={featuredProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: "8px 18px", fontSize: "0.85rem" }}
              >
                <ExternalLink size={15} /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* ── OTHER PROJECTS ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {projects.map(({ title, subtitle, status, statusColor, description, highlights, tags, github, live }) => (
            <div key={title} className="card" style={{ padding: "32px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <div>
                  <h2
                    style={{
                      fontWeight: 800,
                      fontSize: "1.2rem",
                      color: "var(--text-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    {title}
                  </h2>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{subtitle}</p>
                </div>
                <span className={`tag tag-${statusColor}`}>{status}</span>
              </div>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.93rem",
                  lineHeight: 1.75,
                  marginBottom: "20px",
                }}
              >
                {description}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  marginBottom: "24px",
                }}
              >
                {highlights.map((h) => (
                  <li
                    key={h}
                    style={{
                      display: "flex",
                      gap: "10px",
                      color: "var(--text-secondary)",
                      fontSize: "0.88rem",
                    }}
                  >
                    <span style={{ color: "var(--purple-400)", flexShrink: 0 }}>▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "24px",
                }}
              >
                {tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ padding: "8px 16px", fontSize: "0.85rem" }}
                >
                  <GithubIcon size={15} color="var(--purple-400)" /> GitHub
                </a>
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: "8px 16px", fontSize: "0.85rem" }}
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
