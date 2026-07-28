"use client";

import { useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

export default function AnimatedSkillBars({ skillGroups }: { skillGroups: SkillGroup[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bars = containerRef.current?.querySelectorAll<HTMLElement>("[data-level]");
    if (!bars) return;

    // Native scroll-driven animation is handled in CSS.
    // This IntersectionObserver fallback handles browsers without support
    // (e.g. Firefox) — it animates bars from 0 to their target width on entry.
    if (CSS.supports("(animation-timeline: view()) and (animation-range: entry)")) {
      return; // native CSS handles it
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const bar = entry.target as HTMLElement;
            const level = bar.dataset.level ?? "0";
            bar.style.width = `${level}%`;
            observer.unobserve(bar);
          }
        }
      },
      { threshold: 0.1 }
    );

    bars.forEach((bar) => {
      bar.style.width = "0%"; // start hidden for fallback
      observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "32px",
      }}
    >
      {skillGroups.map(({ category, skills }) => (
        <div key={category} className="skill-group">
          <h2
            style={{
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--green-500)",
              marginBottom: "20px",
            }}
          >
            {category}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {skills.map(({ name, level }) => (
              <div key={name}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "6px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-primary)",
                      fontWeight: 500,
                    }}
                  >
                    {name}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    {level}%
                  </span>
                </div>
                <div
                  style={{
                    height: "7px",
                    background: "rgba(212,175,55,0.15)",
                    borderRadius: "4px",
                    overflow: "hidden",
                    border: "1px solid rgba(212,175,55,0.2)",
                  }}
                >
                  {/* data-level drives the IntersectionObserver fallback.
                      The CSS scroll-driven animation uses @keyframes to grow
                      width from 0 to the inline style target. */}
                  <div
                    className="skill-bar"
                    data-level={level}
                    style={
                      {
                        height: "100%",
                        // CSS scroll-driven browsers pick up this width directly
                        // and animate it via @keyframes grow-bar.
                        width: `${level}%`,
                        background:
                          "linear-gradient(90deg, #AA8222, #D4AF37, #22C55E)",
                        borderRadius: "4px",
                        boxShadow: "0 0 8px rgba(212,175,55,0.5)",
                        // Animation fallback browsers start at 0 (set by JS above)
                        transition: "width 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
                        // CSS scroll-driven animation (native)
                        animationName: "grow-bar",
                        animationFillMode: "both",
                        animationTimeline: "view(block 80% 20%)",
                        animationRange: "entry 0% entry 60%",
                      } as React.CSSProperties
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @supports ((animation-timeline: view()) and (animation-range: entry)) {
            @keyframes grow-bar {
              from { width: 0%; }
            }
          }
        }

        /* Fade-up for each skill group on scroll */
        @media (prefers-reduced-motion: no-preference) {
          @supports ((animation-timeline: view()) and (animation-range: entry)) {
            .skill-group {
              animation: skill-group-fadein auto linear both;
              animation-timeline: view();
              animation-range: entry 0% entry 35%;
            }
            @keyframes skill-group-fadein {
              from {
                opacity: 0;
                transform: translateY(24px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
