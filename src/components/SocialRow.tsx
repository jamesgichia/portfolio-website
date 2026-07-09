"use client";

import { GithubIcon, LinkedinIcon } from "@/components/GithubIcon";
import { Mail } from "lucide-react";

const socials = [
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
  {
    href: "https://mail.google.com/mail/?view=cm&to=jamesgichia15@gmail.com",
    icon: (hovered: boolean) => <Mail size={20} color={hovered ? "var(--purple-400)" : "var(--text-muted)"} />,
    label: "Email",
  },
];

export function SocialRow() {
  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        Connect
      </span>
      <div style={{ width: "40px", height: "1px", background: "var(--border)" }} />
      {socials.map(({ href, icon, label }) => (
        <SocialLink key={label} href={href} label={label} icon={icon} />
      ))}
    </div>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: (hovered: boolean) => React.ReactNode;
}) {
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

// Need React import for useState
import React from "react";
