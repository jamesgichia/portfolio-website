"use client";
import React from "react";
import { GithubIcon, LinkedinIcon } from "@/components/GithubIcon";
import { Mail } from "lucide-react";
import SmartEmailLink from "@/components/SmartEmailLink";

const EMAIL = "jamesgichia15@gmail.com";

const nonEmailSocials = [
  {
    href: "https://github.com/jamesgichia",
    icon: (hovered: boolean) => <GithubIcon size={20} color={hovered ? "var(--purple-400)" : "var(--text-muted)"} />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/jamesgichia",
    icon: (hovered: boolean) => <LinkedinIcon size={20} color={hovered ? "var(--purple-400)" : "var(--text-muted)"} />,
    label: "LinkedIn",
  },
];

export function SocialRow() {
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        Connect
      </span>
      <div style={{ width: "40px", height: "1px", background: "var(--border)" }} />

      {nonEmailSocials.map(({ href, icon, label }) => (
        <SocialLink key={label} href={href} label={label} icon={icon} />
      ))}

      {/* Smart email link — native app first, Gmail fallback */}
      <EmailIconLink />
    </div>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: (hovered: boolean) => React.ReactNode }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{ display: "flex" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon(hovered)}
    </a>
  );
}

function EmailIconLink() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <SmartEmailLink
      aria-label="Email"
      style={{ display: "flex" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Mail size={20} color={hovered ? "var(--purple-400)" : "var(--text-muted)"} />
    </SmartEmailLink>
  );
}
