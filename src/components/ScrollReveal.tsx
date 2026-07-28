"use client";

import { useEffect, useRef } from "react";

/**
 * ScrollReveal wraps its children and fades them in as they
 * scroll into the viewport.
 *
 * Uses native CSS scroll-driven animations (view() timeline) where
 * supported (Chrome/Edge 115+, Safari 26+) and falls back to
 * IntersectionObserver for Firefox and older browsers.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;   // stagger delay in ms
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Native support — CSS handles the animation, just add the class
    if (CSS.supports("(animation-timeline: view()) and (animation-range: entry)")) {
      el.classList.add("scroll-reveal");
      if (delay) el.style.animationDelay = `${delay}ms`;
      return;
    }

    // IntersectionObserver fallback (Firefox, older browsers)
    el.style.opacity = "0";
    el.style.transform = "translateY(28px)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = "opacity 0.65s ease, transform 0.65s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
