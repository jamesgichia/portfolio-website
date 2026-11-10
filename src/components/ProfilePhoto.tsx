"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photoSrc = "/IMG-20261109-WA2101.jpg";

export default function ProfilePhoto() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="View a larger photo of James Gichia"
        style={{
          display: "block",
          padding: 0,
          border: 0,
          borderRadius: "50%",
          background: "transparent",
          cursor: "zoom-in",
          marginBottom: "28px",
        }}
      >
        <Image
          src={photoSrc}
          alt="James Gichia"
          width={160}
          height={160}
          priority
          style={{
            display: "block",
            width: "clamp(112px, 24vw, 160px)",
            height: "clamp(112px, 24vw, 160px)",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "50%",
            border: "3px solid var(--purple-400)",
            boxShadow: "0 0 32px rgba(170,130,34,0.2)",
          }}
        />
      </button>

      {isOpen && (
        <div
          role="presentation"
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            background: "rgba(0, 0, 0, 0.88)",
            cursor: "zoom-out",
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Profile photo of James Gichia"
            onClick={(event) => event.stopPropagation()}
            style={{
              position: "relative",
              width: "min(90vw, 720px)",
              height: "min(82vh, 820px)",
              cursor: "default",
            }}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close enlarged photo"
              style={{
                position: "absolute",
                top: "-12px",
                right: "-12px",
                zIndex: 1,
                width: "40px",
                height: "40px",
                border: "1px solid rgba(255,255,255,0.35)",
                borderRadius: "50%",
                background: "#171717",
                color: "white",
                fontSize: "1.5rem",
                lineHeight: 1,
                cursor: "pointer",
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <Image
              src={photoSrc}
              alt="James Gichia — enlarged profile photo"
              fill
              sizes="(max-width: 720px) 90vw, 720px"
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
